from django.contrib import admin
from mptt.admin import DraggableMPTTAdmin
from .models import Category, ServiceAttribute, Service



class CategoryAdmin(DraggableMPTTAdmin):
    prepopulated_fields = {'slug': ['name']}



admin.site.register(Category, CategoryAdmin)
# admin.site.register(Service)
admin.site.register(ServiceAttribute)
admin.site.register(Service)
