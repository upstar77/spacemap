from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import DetailView
from django.views.decorators.csrf import csrf_exempt

from events.models import Event


@method_decorator(csrf_exempt, name='dispatch')
class SearchList(View):
    template_name = 'events/search_events.html'

    def get(self, request, *args, **kwargs):
        ctx = {}
        ctx['events'] = Event.objects.all()
        return render(request, self.template_name, ctx)

    def post(self, request, *args, **kwargs):
        #TODO figure out why and where called post method
        return self.get(request, *args, **kwargs)


class EventDetailView(DetailView):
    model = Event
    template_name = 'events/event_detail.html'
    slug_url_kwarg = "event"

    def get_context_data(self, **kwargs):
        return super(EventDetailView, self).get_context_data(**kwargs)
