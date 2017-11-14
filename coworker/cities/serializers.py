# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)

from rest_framework import serializers
from rest_framework_elasticsearch.es_serializer import ElasticModelSerializer

from coworker.cities.models import City


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('pk', 'name')
