from django import forms
from django.contrib import admin
from .models import Event, Investor, Startup


# class InvestorsInline(admin.TabularInline):
#     model = Invoice
# lat = PlainLocationField(based_fields=['name'], zoom=7)
from location_field.forms import plain


class YourModelForm(forms.ModelForm):

    points = plain.PlainLocationField(based_fields=['location'], zoom=7)

    class Meta:
        model = Event
        exclude = ['lng', 'lat']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['points'].initial = "%s,%s" % (self.instance.lat, self.instance.lng)

    def save(self, commit=True):
        obj = super().save(commit=False)
        try:
            obj.lat, obj.lng = self.cleaned_data["points"].split(',')
        except ValueError:
            pass
        if commit:
            obj.save()
        return obj

class EventAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['name']}
    filter_horizontal = ('investors', 'startups')

    form = YourModelForm

    # fieldsets = (
    #     (None, {
    #         'fields': ('name', 'description', 'extra_field',),
    #     }),
    # )


admin.site.register(Event, EventAdmin)
admin.site.register(Investor)
admin.site.register(Startup)



# from django.contrib import admin
# from dlf_app.models import Place
#
#
# class PlaceInline(admin.TabularInline):
#     model = Place
#     extra = 0
#
#
# class PlaceAdmin(admin.ModelAdmin):
#     inlines = [
#         PlaceInline,
#     ]
#
#
# admin.site.register(Place, PlaceAdmin)
