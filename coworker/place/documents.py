# documents.py

from django_elasticsearch_dsl import DocType, Index
from coworker.place.models import Place

# Name of the Elasticsearch index
place = Index('place')
# See Elasticsearch Indices API reference for available settings
place.settings(
    number_of_shards=1,
    number_of_replicas=0
)


@place.doc_type
class PlaceDocument(DocType):
    class Meta:
        model = Place # The model associated with this DocType

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'space_name',
            'cs_description',
        ]

        # Ignore auto updating of Elasticsearch when a model is saved
        # or deleted:
        # ignore_signals = True
        # Don't perform an index refresh after every update (overrides global setting):
        # auto_refresh = False
        # Paginate the django queryset used to populate the index with the specified size
        # (by default there is no pagination)
        # queryset_pagination = 5000
