from django.db import models


class DataUploadModel(models.Model):
    data = models.FileField(upload_to='data/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
