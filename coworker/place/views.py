import logging
import pickle

from django.shortcuts import render, redirect
from django.core import serializers
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.forms.models import inlineformset_factory, modelformset_factory
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView, FormView

from coworker.core.form_mixins import PassUser
from .models import Place, MeetingRoom
from .forms import PlaceForm, PlaceFirstForm, PlacePhotoForm, PlaceDescriptionForm, \
    PlaceContactDetailsForm, PlaceAmenitiesForm, PlaceAddLocationForm, PlaceAddMeetingRoomsForm,\
    PlaceAddMeetingRoomInlineForm

log = logging.getLogger('debug')


class PlaceView(TemplateView):
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
    request = None

    def get_success_url(self):
        return reverse_lazy('place:place_add_description')

    def get_form_kwargs(self):
        kwargs = super(PlaceAdd, self).get_form_kwargs()
        kwargs['request'] = self.request
        return kwargs

    def form_valid(self, form):
        return super(PlaceAdd, self).form_valid(form)


class PlaceAddDescriptionView(CreateView):
    template_name = 'place/place_description.html'
    form_class = PlaceDescriptionForm
    success_url = reverse_lazy('place:place_add_contact_details')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddDescriptionView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place = self.request.session.get('current_created_place')
        if current_created_place:
            try:
                kwargs['instance'] = pickle.loads(current_created_place)
            except pickle.PickleError:
                pass
        return kwargs


class PlaceAddContactDetailsView(CreateView):
    template_name = 'place/place_contact_details.html'
    form_class = PlaceContactDetailsForm
    success_url = reverse_lazy('place:place_add_amenities')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddContactDetailsView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place = self.request.session.get('current_created_place')
        if current_created_place:
            try:
                kwargs['instance'] = pickle.loads(current_created_place)
            except pickle.PickleError:
                pass
        return kwargs


class PlaceAddAmenitiesView(CreateView):
    template_name = 'place/place_amenities.html'
    form_class = PlaceAmenitiesForm
    success_url = reverse_lazy('place:place_add_location')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddAmenitiesView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place = self.request.session.get('current_created_place')
        if current_created_place:
            try:
                kwargs['instance'] = pickle.loads(current_created_place)
            except pickle.PickleError:
                pass
        return kwargs


class PlaceAddLocationView(CreateView):
    template_name = 'place/place_add_location.html'
    form_class = PlaceAddLocationForm
    success_url = reverse_lazy('place:place_add_meeting_rooms')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddLocationView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place = self.request.session.get('current_created_place')
        if current_created_place:
            try:
                kwargs['instance'] = pickle.loads(current_created_place)
            except pickle.PickleError:
                pass
        return kwargs


class PlaceAddMeetingRoomsView(CreateView):
    template_name = 'place/place_add_meeting_rooms.html'
    form_class = PlaceAddMeetingRoomsForm
    formset_class = inlineformset_factory(
        Place,
        MeetingRoom,
        extra=1,
        can_delete=False,
        form=PlaceAddMeetingRoomInlineForm)
    success_url = reverse_lazy('place:place_add_meeting_rooms')
    request = None

    def get_formset(self, **kwargs):
        return self.formset_class(self.request.POST or None, self.request.FILES or None, **kwargs)

    def get_form_kwargs(self):
        kwargs = super(PlaceAddMeetingRoomsView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place = self.request.session.get('current_created_place')
        if current_created_place:
            try:
                kwargs['instance'] = pickle.loads(current_created_place)
            except pickle.PickleError:
                pass
        return kwargs

    def get_context_data(self, **kwargs):
        ctx = super(PlaceAddMeetingRoomsView, self).get_context_data(**kwargs)
        ctx['formset'] = self.get_formset()
        return ctx

    def form_valid(self, form):
        print(form.data)
        return super(PlaceAddMeetingRoomsView, self).form_valid(form)



@method_decorator(csrf_exempt, name='dispatch')
class PlaceAddContinue(CreateView):
    template_name = 'place/place_description.html'
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


