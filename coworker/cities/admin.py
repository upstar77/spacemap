from django.contrib import admin
from .models import City, Country, Contenent, CityOrigin


class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'level_type', 'status')

admin.site.register(City, CityAdmin)
admin.site.register(Country)
admin.site.register(Contenent)
admin.site.register(CityOrigin)
