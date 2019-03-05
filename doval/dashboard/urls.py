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
    url(r'^annotate/(?P<key>.+)$', views.SelectedFileView.updateview, name='selection'),
    url(r'^start$', views.tohome, name='back')
]