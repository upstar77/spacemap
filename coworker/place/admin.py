from django.contrib import admin
from .models import Place, Amenities, Photos, MeetingRoom, MembershipDeskPrice, Category
from cities_light.admin import CityAdmin

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


class PlaceAdmin(admin.ModelAdmin):
    inlines = [MeetingRoomInlineAdmin, MembershipDeskPriceInlineAdmin, PhotosInlineAdmin]
    raw_id_fields = ("city",)
    # list_display = ('timestamp', application__user, 'amount', 'receipt_image', 'logged')
    # list_filter = ('application__user', )
    # search_fields = ('application__user__first_name', 'application__user__last_name', 'application__user__email')


class PhotosAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'is_header_image')


class CategoryAdmin(admin.ModelAdmin):
   prepopulated_fields = {'slug': ['name']}

admin.site.register(Place, PlaceAdmin)
admin.site.register(Amenities, AmenitiesAdmin)
admin.site.register(Photos, PhotosAdmin)
admin.site.register(Category, CategoryAdmin)
#admin.site.register(MeetingRoom, MeetingRoomAdmin)
