from django.contrib import admin
from .models import City


class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'level_type', 'status')

admin.site.register(City, CityAdmin)
