import os
from django.shortcuts import render, render_to_response, redirect
from django.conf import settings
from django.http import JsonResponse
from django.views import View
from bokeh.layouts import layout
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
        print(sep)
        df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)
        br = dovalapi.BokehResources(dataframe=df)
        #table = br.get_table()
        #simpleexplorer = br.explore_data_vis(dataframe=df)
        #script, div = br.components_web(layout(simpleexplorer, responsive='width_ar', sizing_mode='stretch_both'))
        resource = br.bokeh_web_resources()
        params = {'resource': resource, 'features': br.get_headers(),
                  'samples': br.get_columns()}
        return render(self.request, 'pages/visuals/table.html', params)

    def keyrequest(self, key):
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


def updateview(selected=None, sample=None):
    #print(sample, selected)
    if len(selected) > 0:
        sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
        print(sep)
        df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)
        br = dovalapi.BokehResources(dataframe=df)
        if len(sample) > 0:
            try:
                sample = [int(s) for s in sample]
            except:
                print("Cannot convert index to integer")
            finally:
                df = df.set_index(df.columns[0]).loc[sample, :]
                df = df.reset_index()
        #graph = br.explore_data_vis(dataframe=df[selected])
        graph, table = br.pivotboxplot(dataframe=df, features=selected, rettable=True)
        script, div = br.components_web(layout(graph, responsive='width_ar', sizing_mode='stretch_both'))
        return JsonResponse({'keys': selected, 'script': script, 'div': div, 'table': pd.DataFrame.to_html(table)})
    else:
        return JsonResponse({'keys': []})

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


def key_select(key):
    print('key select 1:', key, keys)
    if key+'_cat' in keys:
        del keys[keys.index(key+'_cat')]
    else:
        if key not in keys:
            keys.append(key)
        else:
            del keys[keys.index(key)]
    for curkey in keys:
        print(curkey[-4:])
        if curkey[-4:] == '_cat':
            keys[keys.index(curkey)] = curkey[:-4]
            print('deleted')
    print('key select 2:', key, keys)
    return keys


def samp_select(sample):
    print('sample', sample)
    if sample not in samples:
        samples.append(sample)
    else:
        del samples[samples.index(sample)]
    print('samples', samples)
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
