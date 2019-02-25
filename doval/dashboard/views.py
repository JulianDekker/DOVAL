import os
from django.shortcuts import render, render_to_response, redirect
from bokeh.resources import CDN
from bokeh.plotting import Figure, output_file, show
from bokeh.embed import components
from bokeh.resources import INLINE
from django.conf import settings
from .forms import DataUploadForm


# Create your views here.
def homepage(request):
    if request.method == 'POST':
        form = DataUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = DataUploadForm()

    filefolder = settings.BASE_DIR+'/files/'

    #df = pd.read_csv(filefolder+'GSE51403_expression_matrix_full.txt')

    return render_to_response('pages/dashboard.html', {'form': form})
