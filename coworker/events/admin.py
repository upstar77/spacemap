from django.contrib import admin
from .models import Event, Investor, Startup


# class InvestorsInline(admin.TabularInline):
#     model = Invoice

class EventAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['name']}
    filter_horizontal = ('investors', 'startups')


admin.site.register(Event, EventAdmin)
admin.site.register(Investor)
admin.site.register(Startup)
