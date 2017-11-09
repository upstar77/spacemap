from elasticsearch.helpers import bulk
from elasticsearch import Elasticsearch
from events.models import Event
from .search_indexes import EventIndex
from config.es_client import es_client


def bulk_indexing():
    EventIndex.init(using=es_client)
    es = Elasticsearch()
    bulk(client=es, actions=(b.indexing() for b in Event.objects.all().iterator()))
