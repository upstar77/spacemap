from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import DetailView, ListView, TemplateView
from django.views.decorators.csrf import csrf_exempt

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
