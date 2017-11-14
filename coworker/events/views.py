from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import DetailView, ListView, TemplateView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response

from config.es_client import es_client

from rest_framework_elasticsearch import es_views, es_pagination, es_filters
# from .search_indexes import EventIndex
# from .search import bulk_indexing

from core.mixins import SearchBase
from coworker.events.models import Event


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
        # return JsonResponse(ctx)
        return JsonResponse({"5162-coworkchm":{"value":"Cowork CHM, Hong Kong, Hong Kong","label":"Cowork CHM, Hong Kong, Hong Kong","loc":"3","idx":"5162","coworkspace_url":"hong-kong\/hong-kong\/cowork-chm"},"1807-coworkingspacebytheventures":{"value":"Coworking Space by TheVentures, Ho Chi Minh City, Vietnam","label":"Coworking Space by TheVentures, Ho Chi Minh City, Vietnam","loc":"3","idx":"1807","coworkspace_url":"vietnam\/ho-chi-minh-city\/coworking-space-by-theventures"},"2309-coworkinglegian":{"value":"Coworking Legian, Bali, Indonesia","label":"Coworking Legian, Bali, Indonesia","loc":"3","idx":"2309","coworkspace_url":"indonesia\/bali\/coworking-legian"},"1101-coworkzonehiteccity":{"value":"CoworkZone Hitec City, Hyderabad, India","label":"CoworkZone Hitec City, Hyderabad, India","loc":"3","idx":"1101","coworkspace_url":"india\/hyderabad\/coworkzone-hitec-city"},"4414-coworkinghub":{"value":"Coworking Hub, Hyderabad, India","label":"Coworking Hub, Hyderabad, India","loc":"3","idx":"4414","coworkspace_url":"india\/hyderabad\/coworking-hub"},"5274-coworking24":{"value":"CO-WORKING 24, Hyderabad, India","label":"CO-WORKING 24, Hyderabad, India","loc":"3","idx":"5274","coworkspace_url":"india\/hyderabad\/co-working-24"},"2088-coworkingurquiza":{"value":"Coworking Urquiza, Buenos Aires, Argentina","label":"Coworking Urquiza, Buenos Aires, Argentina","loc":"3","idx":"2088","coworkspace_url":"argentina\/buenos-aires\/coworking-urquiza"},"49-coworkingrosario":{"value":"Coworking Rosario, Rosario, Argentina","label":"Coworking Rosario, Rosario, Argentina","loc":"3","idx":"49","coworkspace_url":"argentina\/rosario\/coworking-rosario"},"v_s":{"value":"cowor","label":"<span>View All Results<\/span>","loc":0,"idx":0,"coworkspace_url":""}})

    def post(self, request, *args, **kwargs):
        return JsonResponse({"170-":{"value":"Moscow, Russia","label":"Moscow, Russia","loc":"2","idx":"170","coworkspace_url": "null"},"1489-cow":{"value":"Co.W, Salem, United States","label":"Co.W, Salem, United States","loc":"3","idx":"1489","coworkspace_url":"united-states\/oregon\/salem\/cow"},"5162-coworkchm":{"value":"Cowork CHM, Hong Kong, Hong Kong","label":"Cowork CHM, Hong Kong, Hong Kong","loc":"3","idx":"5162","coworkspace_url":"hong-kong\/hong-kong\/cowork-chm"},"1807-coworkingspacebytheventures":{"value":"Coworking Space by TheVentures, Ho Chi Minh City, Vietnam","label":"Coworking Space by TheVentures, Ho Chi Minh City, Vietnam","loc":"3","idx":"1807","coworkspace_url":"vietnam\/ho-chi-minh-city\/coworking-space-by-theventures"},"2309-coworkinglegian":{"value":"Coworking Legian, Bali, Indonesia","label":"Coworking Legian, Bali, Indonesia","loc":"3","idx":"2309","coworkspace_url":"indonesia\/bali\/coworking-legian"},"792-cowerkz":{"value":"CoWerkz, Singapore, Singapore","label":"CoWerkz, Singapore, Singapore","loc":"3","idx":"792","coworkspace_url":"singapore\/singapore\/cowerkz"},"1101-coworkzonehiteccity":{"value":"CoworkZone Hitec City, Hyderabad, India","label":"CoworkZone Hitec City, Hyderabad, India","loc":"3","idx":"1101","coworkspace_url":"india\/hyderabad\/coworkzone-hitec-city"},"4414-coworkinghub":{"value":"Coworking Hub, Hyderabad, India","label":"Coworking Hub, Hyderabad, India","loc":"3","idx":"4414","coworkspace_url":"india\/hyderabad\/coworking-hub"},"v_s":{"value":"cow","label":"<span>View All Results<\/span>","loc":0,"idx":0,"coworkspace_url":""}})


