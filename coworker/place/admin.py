from django.contrib import admin
from .models import Place, Amenities
# Register your models here.



class AmenitiesAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_additional')
    list_editable = ['is_additional']


class PlaceAdmin(admin.ModelAdmin):
    pass
    # list_display = ('timestamp', application__user, 'amount', 'receipt_image', 'logged')
    # list_filter = ('application__user', )
    # search_fields = ('application__user__first_name', 'application__user__last_name', 'application__user__email')


admin.site.register(Place, PlaceAdmin)
admin.site.register(Amenities, AmenitiesAdmin)
