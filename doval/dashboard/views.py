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
        sep = dovalapi.utils.check_sep(settings.MEDIA_ROOT[0:-6] + selectfile['url'])
        df = pd.read_csv(settings.MEDIA_ROOT[0:-6] + selectfile['url'], sep=sep)
        br = dovalapi.BokehResources(dataframe=df)
        table = br.get_table()
        simpleexplorer = br.explore_data_vis(dataframe=df)
        print(simpleexplorer)
        script, div = br.components_web(layout(simpleexplorer, responsive='width_ar', sizing_mode='stretch_both'))
        resource = br.bokeh_web_resources()
        params = {'script': script, 'div': div, 'resource': resource, 'features': br.get_headers(),
                  'samples': br.get_columns()}
        return render(self.request, 'pages/visuals/table.html', params)

    def updateview(self, key):
        selected = selection(key)
        return JsonResponse({'keys': selected})

    def post(self, request):
        pass



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


def selection(key):
    if key not in keys:
        keys.append(key)
    else:
        del keys[keys.index(key)]
    return keys


def clear_database():
    '''
    Deletes all files that are not stored in /doval/files/files
    '''
    for dele in file.objects.all():
        if not os.path.isfile(settings.MEDIA_ROOT[0:-6] + dele.file.url):
            dele.file.delete()
            dele.delete()
    print('cleared db from non-existing files')
