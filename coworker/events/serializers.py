# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)
from rest_framework_elasticsearch.es_serializer import ElasticModelSerializer

from coworker.events.models import Event
from .search_indexes import EventIndex


class ElasticEventSerializer(ElasticModelSerializer):
    class Meta:
        model = Event
        es_model = EventIndex
        fields = ('pk', 'name', 'start_time', 'description')
