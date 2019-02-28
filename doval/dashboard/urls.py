from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    #path('', views.homepage, name='home'),
    url(r'^$', views.DragAndDropUploadView.as_view(), name='drag_and_drop_upload'),
    url(r'^annotate$', views.SelectedFileView.as_view(), name='annotate'),
]