from ajax_select.admin import AjaxSelectAdmin
from django.contrib import admin
from django.forms import ModelForm

from .models import Place, Amenities, Photos, MeetingRoom, MembershipDeskPrice, Category
from cities_light.admin import CityAdmin
from coworker.cities.models import City
from .forms import PlaceModelForm


class PhotosInlineAdmin(admin.StackedInline):
    model = Photos
    min_num = 0
    extra = 2
    fields = ['image', 'image_img', 'is_header_image']
    readonly_fields = ['image_img']


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
                "short_description",
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
    fields = ['image_img']
    readonly_fields = ['image_img']


class CategoryAdmin(admin.ModelAdmin):
   prepopulated_fields = {'slug': ['name']}


admin.site.register(Place, PlaceAdmin)
admin.site.register(Photos, PhotosAdmin)
admin.site.register(Category, CategoryAdmin)
#admin.site.register(MeetingRoom, MeetingRoomAdmin)
