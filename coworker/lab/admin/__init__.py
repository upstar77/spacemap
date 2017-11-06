"""Admin of Zinnia"""
from django.contrib import admin
#
from coworker.lab.admin.category import CategoryAdmin
from coworker.lab.admin.entry import EntryAdmin
from coworker.lab.models import Category
from coworker.lab.models import Entry
# from coworker.lab.settings import ENTRY_BASE_MODEL
#
#
# if ENTRY_BASE_MODEL == 'coworker.lab.models_bases.entry.AbstractEntry':
admin.site.register(Entry, EntryAdmin)
#
admin.site.register(Category, CategoryAdmin)
