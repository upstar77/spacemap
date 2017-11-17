from ajax_select.admin import AjaxSelectAdmin
from django.contrib import admin
from django.forms import ModelForm

from .models import Place, Amenities, Photos, MeetingRoom, MembershipDeskPrice, Category
from cities_light.admin import CityAdmin
from coworker.cities.models import City



from ajax_select.fields import AutoCompleteSelectField, AutoCompleteSelectMultipleField



class PlaceModelForm(ModelForm):

    class Meta:
        model = Place
        fields = "__all__"

    city = AutoCompleteSelectField('city', required=False, help_text=None)




class AmenitiesAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_additional')
    list_editable = ['is_additional']


class MeetingRoomInlineAdmin(admin.StackedInline):
    model = MeetingRoom
    min_num = 0
    extra = 1


class MembershipDeskPriceInlineAdmin(admin.StackedInline):
    model = MembershipDeskPrice
    min_num = 0
    extra = 1

class PhotosInlineAdmin(admin.StackedInline):
    model = Photos
    min_num = 0
    extra = 2


class PlaceAdmin(AjaxSelectAdmin):
    inlines = [PhotosInlineAdmin, ]
    prepopulated_fields = {'slug': ['space_name']}
    # raw_id_fields = ("city",)
    form = PlaceModelForm
    # list_display = ('timestamp', application__user, 'amount', 'receipt_image', 'logged')
    # list_filter = ('application__user', )
    # search_fields = ('application__user__first_name', 'application__user__last_name', 'application__user__email')
    fieldsets = (
        (None, {
            "fields": (
                "space_name",
                "slug",
                "cs_description",
                "category",
            )
        }),
        ("Location", {
            # "classes": ("collapse",),
            "fields": ("city", "address", "lat_lng")
        })
    )

class PhotosAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'is_header_image')


class CategoryAdmin(admin.ModelAdmin):
   prepopulated_fields = {'slug': ['name']}

admin.site.register(Place, PlaceAdmin)
admin.site.register(Amenities, AmenitiesAdmin)
admin.site.register(Photos, PhotosAdmin)
admin.site.register(Category, CategoryAdmin)
#admin.site.register(MeetingRoom, MeetingRoomAdmin)
