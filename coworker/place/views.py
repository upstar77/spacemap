import logging
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView
from .forms import PlaceForm, PlaceFirstForm

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


class PlaceAdd(CreateView):
    template_name = 'place/list_space.html'
    form_class = PlaceFirstForm

    def get_success_url(self):
        return reverse_lazy('place:list-space-continue')

    def get_form_kwargs(self):
        kwargs = super(PlaceAdd, self).get_form_kwargs()
        kwargs['request'] = self.request
        return kwargs

    # def form_invalid(self, form):
    #     print(form.errors)
    #     #TODO should be return super().form_invalid(form), that is just for test
    #     # return redirect('place:list-space-continue')
    #     return JsonResponse({"status": "ok"})
    #
    def form_valid(self, form):
        return JsonResponse({"status": "ok"})



class PlaceAddContinue(CreateView):
    template_name = 'place/continue_page.html'
    form_class = PlaceForm

    def get_initial(self):
        return self.request.session['firs_form_data']

    def get_success_url(self):
        return reverse_lazy('place:continue')
    #
    # def get_form_kwargs(self):
    #     kwargs = super().get_form_kwargs()
    #     kwargs['request'] = self.request
    #     return kwargs

    def form_invalid(self, form):
        print(form.errors)
        return super().form_invalid(form)

    def form_valid(self, form):
        return super().form_valid(form)



#image respoce
# header
# {"status":"success","url":"https:\/\/www.coworker.com\/pictures\/8195\/img-5319jpg_prev.jpg","width":1095,"height":615}
# header-edit
# {"status":"success","url":"https:\/\/www.coworker.com\/pictures\/8195\/edit\/img-5319jpg_prev.jpeg"}
#dropzone
# {"name":"img-5319jpg_1505423441","ext":"jpg","msg":"scs"}
