import os
from django.shortcuts import render, redirect
from django.conf import settings
from django.http import JsonResponse
from django.views import View
import json
import dovalapi

from .forms import FileForm
from .models import file
import pandas as pd
import numpy as np


selectfile = {}
keys = []
samples = []
pivotvars = []
reffv = None

class DragAndDropUploadView(View):
    '''
    Renders the dashboard and handles the drag and drop actions.
    '''
    def get(self, request):
        form = FileForm()

        #if len(file.objects.all()) > 0: \\TODO fix db clear
        #    clear_database()
        return render(self.request, 'pages/localupload/index.html', {'uploadform': form})

    def post(self, request):
        form = FileForm(self.request.POST, self.request.FILES)
        #print(self.request.FILES.name)
        if form.is_valid():
            file = form.save()
            data = {'is_valid': True, 'name': file.file.name, 'url': file.file.url}
        else:
            data = {'is_valid': False}
        selectfile.update(data)
        return JsonResponse(data)


class SelectedFileView(View):
    '''
    Displays the currently selected file and shows some basic information
    '''

    def get(self, request):
        if not selectfile:
            return redirect('/')
        vars = globals()
        vars['keys'] = []
        vars['samples'] = []
        sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
        df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)
        br = dovalapi.BokehResources(dataframe=df)
        params = {'features': br.get_headers(),
                  'samples': br.get_columns(),
                  }
        return render(self.request, 'pages/visuals/table.html', params)

    def post(self, request):
        pass


class FileViewing:

    def __init__(self):
        if selectfile:
            self.sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
            self.df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=self.sep)
            #for i in self.df.columns:
            #    print(self.df[i].dtype)
            #    if str(self.df[i].dtype).startswith('int') or str(self.df[i].dtype).startswith('float'):
            #        self.df = dovalapi.utils.categorise_intdata(self.df, i)

    def updateview(self, selected=None, sample=None, table=False, pivots=None):
        global keys
        if len(sample) > 0:
            try:
                sample = [int(s) for s in sample]
            except:
                print("Cannot convert index to integer")
            finally:
                self.df = self.df.set_index(self.df.columns[0]).loc[sample, :]
                self.df = self.df.reset_index()
        print('features in: ', selected)
        if pivots:
            pivottable = ''
            if len(pivots) > 0:
                for key in keys:
                    pivots.insert(0, key)
                    title = '<p>{}</p>'.format(key)
                    pivottable += title + self.generatePivotTable(pivots)
                    pivots.pop(0)
        else:
            pivottable = ''
        if table:
            return JsonResponse({'keys': selected,
                                 'df': self.df.to_json(orient='split'),
                                 'datatable': self.df.set_index(self.df.columns[0])[selected].to_html(),
                                 'pivottable': pivottable})
        else:
            return JsonResponse({'keys': selected, 'df': self.df.to_json(orient='split')})

    def general_subset(self, indexes, constraints):
        subsetdf = dovalapi.utils().subset_full(dataframe=self.df, indexes=indexes, restrictions=constraints)
        pivot = ''
        features = []
        if len(constraints) > 0:
            features = list(constraints.keys())
            for key in keys:
                features.insert(0, key)
                title = '<p>{}</p>'.format(key)
                pivot += title+self.generatePivotTable(features)
                features.pop(0)
        return JsonResponse({'keys': keys, 'df': subsetdf.to_json(orient='split'), 'datatable': subsetdf.set_index(subsetdf.columns[0])[keys+features].to_html(), 'pivottable': pivot})

    def exportSubset(self, indexes, constraints, type):
        subsetdf = dovalapi.utils().subset_full(dataframe=self.df, indexes=indexes, restrictions=constraints)
        print('aftersbst', subsetdf)
        filename = selectfile['name'][6::]
        filecontent = ''
        if type == 'JSON':
            filename += '_duvalsave.JSON'
            filecontent = subsetdf.to_json(orient='split')
        elif type == 'csv':
            filename += '_duvalsave.csv'
            filecontent = subsetdf.to_csv(index=False)
        elif type == 'tsv':
            filename += '_duvalsave.tsv'
            filecontent = subsetdf.to_csv(sep='\t', index=False)
        return JsonResponse({'filecontent': filecontent, 'filename': filename})

    def generatePivotTable(self, list):
        global samples
        dovutils = dovalapi.utils()
        self.df = dovutils.subset_full(self.df, samples, {})
        pivottable = dovutils.hierarchical_pivottable(self.df, list, notebookout=False)
        return pivottable

    def getNominalKey(self, key):
        values = self.df[key].unique()
        for i, val in enumerate(values):
            if val is np.nan:
                values[i] = "NA"
        return values

    def getTable(self, key, features):
        return self.df.set_index(self.df.columns[0])[key+features].to_html()

def tohome(request):
    '''
    Redirects to homepage and deletes file from previous session from storage
    :param request:
    :return:
    '''
    if selectfile:
        if os.path.isfile(settings.MEDIA_ROOT[0:-6] + selectfile['url']):
            os.remove(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
        selectfile.clear()
        return redirect('/')
    else:
        return redirect('/')


def multiupdate(request):
    global reffv
    reffv = FileViewing()
    fv = reffv
    global keys
    global samples
    list = json.loads(request.GET['values'])
    if list == keys:
        return fv.updateview(selected=list, sample=samples)
    else:
        keys = list
        return fv.updateview(selected=list, sample=samples, table=True)


def subset(request):
    global samples, reffv
    if reffv:
        fv = reffv
    else:
        fv = FileViewing()
    indexes = json.loads(request.POST['subset'])
    subvars = json.loads(request.POST['subvar'])
    samples = indexes
    return fv.general_subset(indexes, subvars)


def browsersave(request):
    global reffv
    if reffv:
        fv = reffv
    else:
        fv = FileViewing()
    indexes = json.loads(request.POST['subset'])
    subvars = json.loads(request.POST['subvar'])
    subsettype = json.loads(request.POST['subsettype'])
    return fv.exportSubset(indexes, subvars, subsettype)


def pivot(request):
    global reffv, pivotvars
    if reffv:
        fv = reffv
    else:
        fv = FileViewing()
    table = ''
    pivotPrio = json.loads(request.GET['data'])
    pivotPrio = list(set(filter(lambda x: not (x == 'None'), pivotPrio)))
    pivotvars = pivotPrio
    if len(pivotPrio) > 0:
        for key in keys:
            pivotPrio.insert(0, key)
            title = '<p>{}</p>'.format(key)
            table += title+fv.generatePivotTable(pivotPrio)
            pivotPrio.pop(0)
        return JsonResponse({'pivottable': table, 'pivotkey': pivotPrio, 'datatable': fv.getTable(keys, pivotPrio)})
    else:
        return JsonResponse({'pivottable': '', 'pivotkey': [], 'datatable': ''})


def nominalkey(request):
    global samples, reffv
    if reffv:
        fv = reffv
    else:
        fv = FileViewing()
    key = json.loads(request.GET['key'])
    keys = fv.getNominalKey(key)
    return JsonResponse({'keys': pd.Series(keys).to_json(orient='values')})


def resetDF(request):
    global reffv, samples, pivotvars, keys
    reffv = FileViewing()
    samples = []
    return reffv.updateview(selected=keys, sample=samples, table=True, pivots=pivotvars)


def key_select(key):
    if key+'_cat' in keys:
        del keys[keys.index(key+'_cat')]
    else:
        if key not in keys:
            keys.append(key)
        else:
            del keys[keys.index(key)]
    for curkey in keys:
        if curkey[-4:] == '_cat':
            keys[keys.index(curkey)] = curkey[:-4]
    return keys


def samp_select(sample):
    if sample not in samples:
        samples.append(sample)
    else:
        del samples[samples.index(sample)]
    return samples


def clear_database():
    '''
    Deletes all files that are not stored in /doval/files/files
    '''
    for dele in file.objects.all():
        if not os.path.isfile(settings.MEDIA_ROOT[0:-6] + dele.file.url):
            dele.file.delete()
            dele.delete()
    print('cleared db from non-existing files')
