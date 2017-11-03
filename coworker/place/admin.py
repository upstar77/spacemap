from django.contrib import admin
from .models import Place, Amenities, Photos, MeetingRoom, MembershipDeskPrice, Category


class AmenitiesAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_additional')
    list_editable = ['is_additional']


class MeetingRoomInlineAdmin(admin.StackedInline):
    model = MeetingRoom


class MembershipDeskPriceInlineAdmin(admin.StackedInline):
    model = MembershipDeskPrice


class PhotosInlineAdmin(admin.StackedInline):
    model = Photos


class PlaceAdmin(admin.ModelAdmin):
    inlines = [MeetingRoomInlineAdmin, MembershipDeskPriceInlineAdmin, PhotosInlineAdmin]
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
