from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    #path('', views.homepage, name='home'),
    url('', views.DragAndDropUploadView.as_view(), name='drag_and_drop_upload'),
]