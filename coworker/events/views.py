from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import DetailView, ListView, TemplateView
from django.views.decorators.csrf import csrf_exempt

from config.es_client import es_client

from rest_framework_elasticsearch import es_views, es_pagination, es_filters
from .search_indexes import EventIndex
from .search import bulk_indexing

from core.mixins import SearchBase
from events.models import Event


class SearchList(SearchBase, TemplateView):
    template_name = 'events/search_events.html'

    # def get(self, request, *args, **kwargs):
    #     return render(request, self.template_name, ctx)
    #
    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        ctx['object_list'] = Event.objects.all()
        return ctx


class EventDetailView(DetailView):
    model = Event
    template_name = 'events/event_detail.html'
    slug_url_kwarg = "event"

    def get_context_data(self, **kwargs):
        return super(EventDetailView, self).get_context_data(**kwargs)



class AutocompleteBase:
    pass
from django.contrib.postgres.search import SearchVector

class AutocompleteEvent(AutocompleteBase, View):
    def get(self, request, *args, **kwargs):
        ctx = {}
        q = request.GET["q"]
        # from django.contrib.postgres.search import TrigramSimilarity
        # Event.objects.annotate(similarity=TrigramSimilarity('name', q)).filter(similarity__gt=0.3).order_by('-similarity')
        from .documents import EventDocument

        ss = EventDocument.search().query("match", description=q)
        qs = ss.to_queryset()
        # qs is just a django queryset and it is called with order_by to keep
        # the same order as the elasticsearch result.

        for event in ss:
            print(event.name, event.description)

        # ctx['q'] = list(Event.objects.filter(name__search=q).values_list("name", flat=True))
        # import pdb; pdb.set_trace()
        return JsonResponse(ctx)



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
