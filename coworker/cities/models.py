from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


CITY_LEVEL_TYPE = (
    (0, _("China")),
    (1, _("Province")),
    (2, _("City")),
    (3, _("Country")),
)


class City(models.Model):
    CHINA = 0
    PROVINCE = 1
    CITY = 2
    COUNTRY = 3
    name = models.CharField(_('Name'), max_length=40)
    short_name = models.CharField(_('Short name'), max_length=40)
    level_type = models.PositiveIntegerField(_('Level type'),
                                             choices=CITY_LEVEL_TYPE)
    city_code = models.CharField(_('City code'), max_length=7)
    zip_code = models.CharField(_('Zip code'), max_length=7)
    lat = models.CharField(_('Latitude'), max_length=20)
    lng = models.CharField(_('Longitude'), max_length=20)
    pinyin = models.CharField(_('Chinese Pinyin'), max_length=40)
    status = models.BooleanField(_('status'), default=True)
    parent = models.ForeignKey('self', null=True)

    def __str__(self):
        return self.name


class Contenent(models.Model):
    name = models.CharField(_('name'), max_length=40)
    slug = models.SlugField()

    def __str__(self):
        return self.name


class Country(models.Model):
    name = models.CharField(_('name'), max_length=40)
    slug = models.SlugField()
    contenent = models.ForeignKey(Contenent)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('place:country', args=(self.name,))

# class State(models.Model):
#     name = models.CharField(_('name'), max_length=40)
#     contenent = models.ForeignKey(Country)
#
#
#     def __str__(self):
#         return self.name


class CityOrigin(models.Model):
    name = models.CharField(_('Name'), max_length=40)
    slug = models.SlugField()
    city_code = models.CharField(_('City code'), max_length=7, blank=True)
    zip_code = models.CharField(_('Zip code'), max_length=7, blank=True)
    lat = models.CharField(_('Latitude'), max_length=20, blank=True)
    lng = models.CharField(_('Longitude'), max_length=20, blank=True)
    image = models.FileField(_('City image'), blank=True)

    country = models.ForeignKey(Country)

    desctiption = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('place:city', args=(self.country.slug, self.slug,))
