from modeltranslation.translator import translator, TranslationOptions
from .models import Entry

class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'content',)

translator.register(Entry, NewsTranslationOptions)
