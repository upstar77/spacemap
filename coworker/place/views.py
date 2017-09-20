import logging
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView

from coworker.core.form_mixins import PassUser
from .forms import PlaceForm, PlaceFirstForm, PlacePhotoForm

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
    # def form_valid(self, form):
    #     return JsonResponse({"status": "ok"})





@method_decorator(csrf_exempt, name='dispatch')
class PlaceAddContinue(CreateView):
    template_name = 'place/continue_page.html'
    form_class = PlaceForm


    def get_initial(self):
        return self.request.session.get('firs_form_data', {"place_name": "coworker_alex"})

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



@method_decorator(csrf_exempt, name='dispatch')
class PhotoDropzone(CreateView):
    # template_name = 'place/continue_page.html'
    form_class = PlacePhotoForm
    template_name = ""

    def get_success_url(self):
        return ""

    def form_invalid(self, form):
        print(form.errors)
        return JsonResponse({"status": "error"})

    def form_valid(self, form):
        photo = form.save(commit=False)
        photo.user = self.request.user
        photo.save()

        if photo.is_header_image:
            from django.core.files.images import get_image_dimensions
            w, h = get_image_dimensions(photo.file)
            d = {"status": "success", "url": photo.file.url, "width": w, "height": h}
        else:
            d = {"name": photo.file.url, "ext": "jpg", "msg": "scs"}
        return JsonResponse(d)


