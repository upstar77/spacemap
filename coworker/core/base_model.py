from django.db import models
from location_field.models.spatial import LocationField
from django.utils.functional import cached_property
from django.utils.translation import ugettext_lazy as _


class BaseLocation(models.Model):
    address = models.CharField(max_length=250)
    lat_lng = LocationField(based_fields=['address'], zoom=7)

    class Meta:
        abstract = True

    @cached_property
    def lat(self):
        return self.lat_lng.y

    @cached_property
    def lng(self):
        return self.lat_lng.x
