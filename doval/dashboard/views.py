import os
from django.shortcuts import render, render_to_response, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from django.http import JsonResponse
from django.views import View

from .forms import FileForm
from .models import file
import pandas as pd
from bokeh.io import output_file, show
from bokeh.layouts import widgetbox
from bokeh.models import ColumnDataSource
from bokeh.models.widgets import DataTable, DateFormatter, TableColumn


params = {}
datalist = []
# Renders the dashboard of the application
@ensure_csrf_cookie
def homepage(request, file=None):
    print(request, request.method)
    if request.method == 'POST':
        file = upload(request)
        if file is not None:
            params['filename'] = file.name
            pandasInAction(file.name)
            print("After this it should render ... ", request)
            return render(request, 'pages/dashboard.html', params)
    return render(request, 'pages/dashboard.html')


class DragAndDropUploadView(View):
    def get(self, request):
        datalist.clear()
        form = FileForm()
        clear_database()
        filelist = file.objects.all()
        return render(self.request, 'pages/localupload/index.html', {'uploadform': form, 'filelist': filelist})

    def post(self, request):
        form = FileForm(self.request.POST, self.request.FILES)
        if form.is_valid():
            file = form.save()
            data = {'is_valid': True, 'name': file.file.name, 'url': file.file.url}
            #pandasInAction(file.file.name)
        else:
            data = {'is_valid': False}
        datalist.append(data)
        print(len(datalist))
        return JsonResponse(data)


# Uploads the file in the request
def upload(request):
    print(request.FILES)
    file = request.FILES[list(request.FILES)[0]]
    fs = FileSystemStorage()
    fs.save(file.name, file)
    return file


# Extracts basic information from a file
def pandasInAction(filename):
    df = pd.read_csv(settings.MEDIA_ROOT + '/' + filename)
    #params['shortfile'] = df.head(5)+df.tail(5)
    params['datadescription'] = df.describe()
    print(df.describe(include='all'))

def clear_database():
    for dele in file.objects.all():
        if not os.path.isfile(settings.MEDIA_ROOT[0:-6] + dele.file.url):
            dele.file.delete()
            dele.delete()
    print('cleared db from non-existing files')
    return
