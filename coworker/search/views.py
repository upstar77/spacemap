from coworker.cities.models import City
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from config.es_client import es_client
from rest_framework import views
from django import forms
from django.utils.translation import pgettext

from coworker.search.backends import get_search_backend
from coworker.place.models import Place

from rest_framework_elasticsearch import es_views, es_pagination, es_filters
from events.search_indexes import EventIndex
from place.documents import PlaceDocument
from search.serializers import PlaceSerializer, CitySerializer
from django.apps import apps

# @api_view(['GET', 'POST'])
class Autocomplete(views.APIView):
    search_key = "search"
    search_backend = 'default'

    def get_serializer(self):
        return self.get_model().get_serializer()

    def get_model(self):
        # return apps.get_model(self.kwargs['app'], self.kwargs['model'])
        return Place

    def get_queryset(self):

        return self.get_model().objects.all()

    def get(self, request, *args, **kwargs):
        backend = get_search_backend(self.search_backend)
        query = request.GET[self.search_key]
        results = backend.search(query, model_or_queryset=self.get_queryset())
        # {"792-cowerkz": {
        #     "value":"CoWerkz, Singapore, Singapore","label":"CoWerkz, Singapore, Singapore","loc":"3","idx":"792","coworkspace_url":"singapore\/singapore\/cowerkz"
        # }
        # }
        return Response(self.get_serializer()(results, many=True).data)
