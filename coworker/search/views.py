from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from config.es_client import es_client

from rest_framework_elasticsearch import es_views, es_pagination, es_filters
from events.search_indexes import EventIndex
from place.documents import PlaceDocument


class EventSearchView(es_views.ListElasticAPIView):
    es_client = es_client
    es_model = EventIndex
    es_paginator_class = es_pagination.ElasticLimitOffsetPagination

    es_filter_backends = (
        es_filters.ElasticFieldsFilter,
        es_filters.ElasticSearchFilter,
        es_filters.ElasticOrderingFilter,
    )
    es_ordering = 'start_time'
    es_filter_fields = (
        # es_filters.ESFieldFilter('name', 'tags'),
        # es_filters.ESFieldFilter('start_time', 'is_published')
    )
    es_search_fields = (
        'name',
        'description',
    )

    def list(self, request, *args, **kwargs):
        search = self.filter_search(self.get_es_search())
        search = self.excludes_respond_fields(search)
        res = []
        for item in self.es_representation(search.scan()):
            res.append(item["name"])
        return Response(res)


# @api_view(['GET', 'POST'])
class PlaceSearchView(es_views.ListElasticAPIView):
    permission_classes = (permissions.AllowAny,)
    es_client = es_client
    es_model = PlaceDocument
    es_paginator_class = es_pagination.ElasticLimitOffsetPagination
    es_filter_backends = (
        # es_filters.ElasticFieldsFilter,
        es_filters.ElasticSearchFilter,
        # es_filters.ElasticOrderingFilter,
    )
    # es_ordering = 'start_time'
    es_filter_fields = (
        # es_filters.ESFieldFilter('name', 'tags'),
        # es_filters.ESFieldFilter('start_time', 'is_published')
    )
    es_search_fields = (
        'space_name',
        'cs_description'
    )

    def list(self, request, *args, **kwargs):
        search = self.filter_search(self.get_es_search())
        search = self.excludes_respond_fields(search)
        res = []
        for item in self.es_representation(search.scan()):
            res.append(item["space_name"])
        return Response(res)

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
