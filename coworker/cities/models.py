from django.db import models
from django.utils.translation import ugettext_lazy as _
from cities_light.abstract_models import (AbstractCity, AbstractRegion, AbstractCountry)
from cities_light.receivers import connect_default_signals



CITY_LEVEL_TYPE = (
    (0, _("China")),
    (1, _("Province")),
    (2, _("City")),
    (3, _("Country")),
)


class Country(AbstractCountry):
    pass

connect_default_signals(Country)

class Region(AbstractRegion):
    pass

connect_default_signals(Region)


class City(AbstractCity):
    CHINA = 0
    PROVINCE = 1
    CITY = 2
    COUNTRY = 3
    timezone = models.CharField(max_length=40)
connect_default_signals(City)


# class Continent(BaseContinent, models.Model):
#     more_data = models.TextField()
#
#     class Meta(BaseCountry.Meta):
#         abstract = False
#         # swappable = swapper.swappable_setting('cities', 'Continent')
#
# class Country(BaseCountry, models.Model):
#     more_data = models.TextField()
#     class Meta(BaseCountry.Meta):
#         abstract = False
#         # swappable = swapper.swappable_setting('cities', 'Country')
#
#
# class City(BaseCity, models.Model):
#     CHINA = 0
#     PROVINCE = 1
#     CITY = 2
#     COUNTRY = 3
#     more_data = models.TextField()
#     class Meta(BaseCountry.Meta):
#         abstract = False
        # swappable = swapper.swappable_setting('cities', 'City')



# class City(models.Model):

#     name = models.CharField(_('Name'), max_length=40)
#     short_name = models.CharField(_('Short name'), max_length=40)
#     level_type = models.PositiveIntegerField(_('Level type'),
#                                              choices=CITY_LEVEL_TYPE)
#     city_code = models.CharField(_('City code'), max_length=7)
#     zip_code = models.CharField(_('Zip code'), max_length=7)
#     lat = models.CharField(_('Latitude'), max_length=20)
#     lng = models.CharField(_('Longitude'), max_length=20)
#     pinyin = models.CharField(_('Chinese Pinyin'), max_length=40)
#     status = models.BooleanField(_('status'), default=True)
#     parent = models.ForeignKey('self', null=True)
#
#     def __str__(self):
#         return self.name
#
#
# class Contenent(models.Model):
#     name = models.CharField(_('name'), max_length=40)
#     slug = models.SlugField()
#     desctiption = models.TextField(blank=True, null=True)
#     image = models.FileField(blank=True)
#
#     def __str__(self):
#         return self.name
#
#
# class Country(models.Model):
#     name = models.CharField(_('name'), max_length=40)
#     slug = models.SlugField()
#     contenent = models.ForeignKey(Contenent)
#     desctiption = models.TextField(blank=True, null=True)
#     image = models.FileField(blank=True)
#
#     def __str__(self):
#         return self.name
#
#     def get_absolute_url(self):
#         return reverse('place:country', args=(self.slug,))
#
#     def get_country_name(self):
#         return "%s %s" % ("country", self.name)
#
# # class State(models.Model):
# #     name = models.CharField(_('name'), max_length=40)
# #     contenent = models.ForeignKey(Country)
# #
# #
# #     def __str__(self):
# #         return self.name
#
#
# class CityOrigin(models.Model):
#     name = models.CharField(_('Name'), max_length=40)
#     slug = models.SlugField()
#     city_code = models.CharField(_('City code'), max_length=7, blank=True)
#     zip_code = models.CharField(_('Zip code'), max_length=7, blank=True)
#     lat = models.CharField(_('Latitude'), max_length=20, blank=True)
#     lng = models.CharField(_('Longitude'), max_length=20, blank=True)
#     image = models.FileField(blank=True)
#
#     country = models.ForeignKey(Country)
#
#     short_name = models.CharField(max_length=2, blank=True)
#
#     description = models.TextField(blank=True, null=True)
#
#     def __str__(self):
#         return self.name
#
#     def get_absolute_url(self):
#         return reverse('place:city', args=(self.country.slug, self.slug,))
#
#     def get_country_name(self):
#         return "%s %s" % ("country", self.country.name)
#
