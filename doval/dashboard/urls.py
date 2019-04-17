from django.urls import path
from django.conf.urls import url
from . import views

'''
    URL patterns redirecting requests to views to handle them.
    
    ^$ empty url handled by DragAndDropUploadView
    ^annotate$ /annotate url handled by SelectedFileView
    ^start$ /start url handled by tohome view
'''
urlpatterns = [
    #path('', views.homepage, name='home'),
    url(r'^$', views.DragAndDropUploadView.as_view(), name='drag_and_drop_upload'),
    url(r'^annotate$', views.SelectedFileView.as_view(), name='annotate'),
    url(r'^annotate/k(?P<key>.+)$', views.SelectedFileView.keyrequest, name='key_selection'),
    #url(r'^annotate/s(?P<sample>.+)$', views.SelectedFileView.samprequest, name='samp_selection'),
    url(r'^annotate/update', views.multiupdate, name='multiupdate'),
    url(r'^annotate/export', views.export, name='export'),
    url(r'^annotate/subset', views.subset, name='subset'),
    url(r'^annotate/pivot', views.pivot, name='pivot'),
    url(r'^annotate/nominalkey', views.nominalkey, name='nominalkey'),
    url(r'^annotate/browsersave', views.browsersave, name='browsersave'),
    url(r'^annotate/resetdataset', views.resetDF, name='resetdataset'),
    url(r'^start$', views.tohome, name='back')
]