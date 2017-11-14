from django_elasticsearch_dsl import DocType, Index
from coworker.events.models import Event

# Name of the Elasticsearch index
event = Index('events')
# See Elasticsearch Indices API reference for available settings
event.settings(
    number_of_shards=1,
    number_of_replicas=0
)


@event.doc_type
class EventDocument(DocType):
    class Meta:
        model = Event # The model associated with this DocType

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'name',
            'location',
            'description',
        ]

        # Ignore auto updating of Elasticsearch when a model is saved
        # or deleted:
        # ignore_signals = True
        # Don't perform an index refresh after every update (overrides global setting):
        # auto_refresh = False
        # Paginate the django queryset used to populate the index with the specified size
        # (by default there is no pagination)
        # queryset_pagination = 5000
# car = Car(
#     name="Car one",
#     color="red",
#     type=1,
#     description="A beautiful car"
# )
# car.save()
