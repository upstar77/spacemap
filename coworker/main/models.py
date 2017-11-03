from django.db import models


class Investor(models.Model):
    name = models.CharField(max_length=200)
    picture = models.FileField(upload_to="investor/photos")

    def __str__(self):
        return self.name
