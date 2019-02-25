import os
from django.shortcuts import render, render_to_response, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import pandas as pd
from bokeh.io import output_file, show
from bokeh.layouts import widgetbox
from bokeh.models import ColumnDataSource
from bokeh.models.widgets import DataTable, DateFormatter, TableColumn


params = {}
# Renders the dashboard of the application
@ensure_csrf_cookie
def homepage(request, file=None):
    if request.method == 'POST':
        file = upload(request)
    if file is not None:
        params['filename'] = file.name
        pandasInAction(file.name)
    return render(request, 'pages/dashboard.html', params)


# Uploads the file in the request
def upload(request):
    file = request.FILES['document']
    fs = FileSystemStorage()
    fs.save(file.name, file)
    return file


# Extracts basic information from a file
def pandasInAction(filename):
    df = pd.read_csv(settings.MEDIA_ROOT + '/' + filename)
    #params['shortfile'] = df.head(5)+df.tail(5)
    params['datadescription'] = df.describe()
    print(df.describe(include='all'))
