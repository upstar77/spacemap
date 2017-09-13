import logging
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView
from .forms import PlaceForm

log = logging.getLogger('debug')


class Place(TemplateView):
    template_name = 'place/place.html'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)

        if self.kwargs.get("country"):
            self.template_name = 'place/country.html'

        if self.kwargs.get("city"):
            self.template_name = 'place/city.html'

        if self.kwargs.get("place"):
            self.template_name = 'place/place.html'

        return ctx




# class ListSpace(TemplateView):
#     template_name = 'pages/list_space.html'


class PlaceAdd(CreateView):
    template_name = 'place/list_space.html'
    form_class = PlaceForm

    def get_success_url(self):
        return reverse_lazy('place:continue')

    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)

    def form_valid(self, form):
        return super().form_valid(form)



class PlaceAddContinue(CreateView):
    template_name = 'place/continue_page.html'
    form_class = PlaceForm

    def get_success_url(self):
        return reverse_lazy('place:continue')

    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)

    def form_valid(self, form):
        return super().form_valid(form)

