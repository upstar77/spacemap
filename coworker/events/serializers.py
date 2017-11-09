# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)
from rest_framework_elasticsearch.es_serializer import ElasticModelSerializer

from .models import Event
from .search_indexes import EventIndex


class ElasticBlogSerializer(ElasticModelSerializer):
    class Meta:
        model = Event
        es_model = EventIndex
        fields = ('pk', 'name', 'description')
