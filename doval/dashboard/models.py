from django.db import models


class file(models.Model):
    title = models.CharField(max_length=200, blank=True)
    file = models.FileField(upload_to='files/', max_length=500)
    uploaded_at = models.DateTimeField(auto_now_add=True)

