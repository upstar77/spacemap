import datetime
from django.utils import timezone
from haystack import indexes
from haystack.fields import CharField

from coworker.place.models import Place


class ProductIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.EdgeNgramField(
        document=True, use_template=True,
        template_name='/Users/admin/projects/coworker/coworker/templates/search/indexes/place_text.txt')
    space_name = indexes.EdgeNgramField(model_attr='space_name')
    cs_description = indexes.EdgeNgramField(model_attr="cs_description", null=True)

    suggestions = indexes.FacetCharField()

    def get_model(self):
        return Place

    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()
from elasticsearch import Elasticsearch
