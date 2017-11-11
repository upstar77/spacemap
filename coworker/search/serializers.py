# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)

from rest_framework import serializers
from rest_framework_elasticsearch.es_serializer import ElasticModelSerializer

from coworker.place.models import Place


class PlaceSerializer(serializers.ModelSerializer):
    # value = serializers.SerializerMethodField()
    label = serializers.ReadOnlyField(source='autocomplete_value')
    # url = serializers.SerializerMethodField()
    value = serializers.ReadOnlyField(source='autocomplete_value')
    coworkspace_url = serializers.ReadOnlyField(source='autocomplete_value')

    class Meta:
        model = Place
        fields = ('pk', 'space_name', 'cs_description', 'value', 'label', 'coworkspace_url')

