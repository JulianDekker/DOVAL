import os
from django.shortcuts import render, render_to_response, redirect
from django.conf import settings
from django.http import JsonResponse
from django.views import View
import json
#from bokeh.layouts import layout
import dovalapi

from .forms import FileForm
from .models import file
import pandas as pd


selectfile = {}
keys = []
samples = []

class DragAndDropUploadView(View):
    '''
    Renders the dashboard and handles the drag and drop actions.
    '''
    def get(self, request):
        form = FileForm()
        clear_database()
        return render(self.request, 'pages/localupload/index.html', {'uploadform': form})

    def post(self, request):
        form = FileForm(self.request.POST, self.request.FILES)
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

    def keyrequest(self, key):
        print(key, list)
        print('keyreq')
        if key is not None:
            selected = key_select(key)
            return updateview(selected=selected, sample=samples)

    def samprequest(self, sample):
        print('samplereq')
        if sample is not None:
            samp = samp_select(sample)
            return updateview(selected=keys, sample=samp)

    def post(self, request):
        pass


def updateview(selected=None, sample=None, table=False):
    sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
    df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)
    if len(sample) > 0:
        try:
            sample = [int(s) for s in sample]
        except:
            print("Cannot convert index to integer")
        finally:
            df = df.set_index(df.columns[0]).loc[sample, :]
            df = df.reset_index()
    print('features in: ', selected)
    if table:
        return JsonResponse({'keys': selected, 'df': df.to_json(orient='split'), 'datatable': df.set_index(df.columns[0])[selected].to_html()})
    else:
        return JsonResponse({'keys': selected, 'df': df.to_json(orient='split') })

def updatetable(request):
    sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
    df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)



    return JsonResponse({})

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
    list = json.loads(request.GET['values'])
    if (list == keys):
        return updateview(selected=list, sample=samples)
    else:
        return updateview(selected=list, sample=samples, table=True)

def export(request):
    """
    Recieves json files from ajax call to export.
    :param request:
    :return:
    """
    file = json.loads(request.POST['expJSON'])
    return JsonResponse({'result': 'succes'})

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
