import logging
import pickle

from django.shortcuts import render, redirect, get_object_or_404
from django.core import serializers
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.forms.models import inlineformset_factory, modelformset_factory, formset_factory
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView, View
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView, FormView
from django.core.files.images import get_image_dimensions
from coworker.core.form_mixins import PassUser
<<<<<<< HEAD
from .models import Place, MeetingRoom, MembershipDeskPrice
=======
from .models import Place, MeetingRoom
from coworker.cities.models import Country, CityOrigin
>>>>>>> alex
from .forms import PlaceForm, PlaceFirstForm, PlacePhotoForm, PlaceDescriptionForm, \
    PlaceContactDetailsForm, PlaceAmenitiesForm, PlaceAddLocationForm, PlaceAddMeetingRoomsForm,\
    PlaceAddMeetingRoomInlineForm, PlaceAddSizeForm, PlaceAddOpeningHoursForm, PlaceAddPaymentMethodsForm,\
    PlaceAddMembershipHotDeskPriceInlineForm, PlaceAddMembershipDescPriceForm

log = logging.getLogger('debug')


class PlaceCountryList(View):
    template_name = 'place/country.html'


    def get_popular_cities(self, country):
        return CityOrigin.objects.filter(country=country)


    def get(self, request, *args, **kwargs):
        country = self.kwargs["country"]
        country = get_object_or_404(Country, slug__icontains=country)
        return render(request, self.template_name, {
            'country': country,
            'popular_cities': self.get_popular_cities(country),
            'top_places': Place.objects.by_country(country),
        })


class SearchList(View):
    template_name = 'pages/search_list.html'

    def get(self, request, *args, **kwargs):
        country = self.kwargs.get("country")
        ctx = {}
        if country:
            places = Place.objects.by_country(country)
        else:
            places = Place.objects.all()

        ctx = {
            'places': places,
        }
        return render(request, self.template_name, ctx)


class PlaceView(View):
    template_name = 'place/place.html'

    # def get_context_data(self, **kwargs):
    #     ctx = super().get_context_data(**kwargs)
    #
    #     if self.kwargs.get("country"):
    #         self.template_name = 'place/country.html'
    #
    #     if self.kwargs.get("city"):
    #         self.template_name = 'place/city.html'
    #
    #     if self.kwargs.get("place"):
    #         self.template_name = 'place/place.html'
    #
    #     return ctx

    def get(self, request, *args, **kwargs):
        place_slug = self.kwargs["place"]
        place = get_object_or_404(Place, slug=place_slug)

        return render(request, self.template_name, {
            'place': place,
        })


class PlaceAddBaseView:
    current_created_place = None

    def get_current_created_place(self):
        current_created_place_pickle = self.request.session.get('current_created_place')
        if current_created_place_pickle:
            try:
                return pickle.loads(current_created_place_pickle)
            except pickle.PickleError:
                pass
        return None


class PlaceAddView(CreateView):
    template_name = 'place/list_space.html'
    form_class = PlaceFirstForm
    request = None

    def get_success_url(self):
        return reverse_lazy('place:place_add_description')

    def get_form_kwargs(self):
        kwargs = super(PlaceAddView, self).get_form_kwargs()
        kwargs['request'] = self.request
        return kwargs


class PlaceAddDescriptionView(PlaceAddBaseView, CreateView):
    template_name = 'place/place_description.html'
    form_class = PlaceDescriptionForm
    success_url = reverse_lazy('place:place_add_contact_details')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddDescriptionView, self).get_form_kwargs()
        kwargs['request'] = self.request

        self.current_created_place = self.get_current_created_place()

        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs


class PlaceAddContactDetailsView(PlaceAddBaseView, CreateView):
    template_name = 'place/place_contact_details.html'
    form_class = PlaceContactDetailsForm
    success_url = reverse_lazy('place:place_add_amenities')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddContactDetailsView, self).get_form_kwargs()
        kwargs['request'] = self.request
        self.current_created_place = self.get_current_created_place()

        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs


class PlaceAddAmenitiesView(CreateView):
    template_name = 'place/place_amenities.html'
    form_class = PlaceAmenitiesForm
    success_url = reverse_lazy('place:place_add_location')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddAmenitiesView, self).get_form_kwargs()
        kwargs['request'] = self.request
        current_created_place_pickle = self.request.session.get('current_created_place')
        if current_created_place_pickle:
            try:
                current_created_place = pickle.loads(current_created_place_pickle)
                kwargs['instance'] = current_created_place.place
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
        current_created_place_pickle = self.request.session.get('current_created_place')
        if current_created_place_pickle:
            try:
                current_created_place = pickle.loads(current_created_place_pickle)
                kwargs['instance'] = current_created_place.place
            except pickle.PickleError:
                pass
        return kwargs


class PlaceAddMeetingRoomsView(PlaceAddBaseView, FormView):
    template_name = 'place/place_add_meeting_rooms.html'
    form_class = PlaceAddMeetingRoomsForm
    formset_class = inlineformset_factory(
        Place,
        MeetingRoom,
        extra=1,
        can_delete=False,
        form=PlaceAddMeetingRoomInlineForm)
    success_url = reverse_lazy('place:place_add_opening_hours')
    request = None

    def get_formset(self, **kwargs):
        return self.formset_class(self.request.POST or None, self.request.FILES or None, **kwargs)

    def get_form_kwargs(self):
        kwargs = super(PlaceAddMeetingRoomsView, self).get_form_kwargs()
        kwargs['request'] = self.request
        self.current_created_place = self.get_current_created_place()

        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
            kwargs['initial'] = {
                'meeting_room_number': len(self.current_created_place.meeting_rooms)
            }
        return kwargs

    def get_context_data(self, **kwargs):
        ctx = super(PlaceAddMeetingRoomsView, self).get_context_data(**kwargs)
        self.current_created_place = self.get_current_created_place()

        if not self.current_created_place:
            return ctx
        formset_initial_data = []
        for meeting_room in self.current_created_place.meeting_rooms:
            formset_initial_data.append({
                'room_info': meeting_room.room_info,
                'mr_capacity': meeting_room.mr_capacity
            })

        self.formset_class.extra = len(formset_initial_data)+1
        ctx['formset'] = self.get_formset(initial=formset_initial_data)

        return ctx

    def form_valid(self, form):
        formset = self.get_formset()

        if form.is_valid() and formset.is_valid():
            obj = form.save(commit=False)
            formset = self.get_formset(instance=obj)
            meeting_room_objs = formset.save(commit=False)
            current_created_place_pickle = self.request.session.get('current_created_place')
            if current_created_place_pickle:
                try:
                    current_created_place = pickle.loads(current_created_place_pickle)
                    current_created_place.meeting_rooms = meeting_room_objs
                    self.request.session['current_created_place'] = pickle.dumps(current_created_place)
                    self.request.session.save()
                except pickle.PickleError:
                    pass
        else:
            return super(PlaceAddMeetingRoomsView, self).form_invalid(form)
        return super(PlaceAddMeetingRoomsView, self).form_valid(form)


class PlaceAddOpeningHoursView(PlaceAddBaseView, CreateView):
    template_name = 'place/place_add_opening_hours.html'
    form_class = PlaceAddOpeningHoursForm
    success_url = reverse_lazy('place:place_add_size')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddOpeningHoursView, self).get_form_kwargs()
        kwargs['request'] = self.request

        self.current_created_place = self.get_current_created_place()
        print(self.current_created_place.place)
        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs


class PlaceAddSizeView(PlaceAddBaseView, CreateView):
    template_name = 'place/place_add_size.html'
    form_class = PlaceAddSizeForm
    success_url = reverse_lazy('place:place_add_photos')
    request = None

    def get_form_kwargs(self):
        kwargs = super(PlaceAddSizeView, self).get_form_kwargs()
        kwargs['request'] = self.request

        self.current_created_place = self.get_current_created_place()

        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs


class PlaceAddPhotosView(TemplateView):
    template_name = 'place/place_add_photos.html'
    # form_class = PlaceAddSizeForm
    # request = None
    # success_url = reverse_lazy('place:place_add_payment_methods')
    #
    # def get_form_kwargs(self):
    #     kwargs = super(PlaceAddPhotosView, self).get_form_kwargs()
    #     kwargs['request'] = self.request
    #
    #     self.current_created_place = self.get_current_created_place()
    #
    #     if self.current_created_place:
    #         print(self.current_created_place.place.desks)
    #         kwargs['instance'] = self.current_created_place.place
    #     return kwargs
    #
    # def form_invalid(self, form):
    #     print(form.errors)
    #     return super(PlaceAddPhotosView, self).form_invalid(form)


#TODO remove this
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

            w, h = get_image_dimensions(photo.file)
            d = {"status": "success", "url": photo.file.url, "width": w, "height": h}
        else:
            d = {"name": photo.file.url, "ext": "jpg", "msg": "scs"}
        return JsonResponse(d)


@method_decorator(csrf_exempt, name='dispatch')
class PhotoCrop(View):

    def post(self, request, *args, **kwargs):
        # TODO here should be crop process
        return JsonResponse({
            "status": "success",
            "url": request.POST.get("imgUrl")
        })


class PlaceAddPaymentMethodsView(PlaceAddBaseView, CreateView):
    template_name = 'place/place_add_payment_methods.html'
    form_class = PlaceAddPaymentMethodsForm
    success_url = reverse_lazy('place:place_add_desc_price')
    request = None

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['request'] = self.request
        self.current_created_place = self.get_current_created_place()
        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs


class PlaceAddMembershipDescPriceView(PlaceAddBaseView, FormView):
    template_name = 'place/place_add_desk_price.html'
    form_class = PlaceAddMembershipDescPriceForm
    success_url = reverse_lazy('place:place_add_desc_price')
    hot_desks_formset_class = inlineformset_factory(
        Place,
        MembershipDeskPrice,
        extra=3,
        can_delete=False,
        form=PlaceAddMembershipHotDeskPriceInlineForm)
    request = None

    def get_hot_desks_formset(self, **kwargs):
        return self.hot_desks_formset_class(self.request.POST or None, self.request.FILES or None, **kwargs)

    def get_form_kwargs(self):
        kwargs = super(PlaceAddMembershipDescPriceView, self).get_form_kwargs()
        kwargs['request'] = self.request
        self.current_created_place = self.get_current_created_place()

        if self.current_created_place:
            kwargs['instance'] = self.current_created_place.place
        return kwargs

    def get_context_data(self, **kwargs):
        ctx = super(PlaceAddMembershipDescPriceView, self).get_context_data(**kwargs)
        self.current_created_place = self.get_current_created_place()

        if not self.current_created_place:
            return ctx
        hot_desks_formset_initial_data = []

        for hot_desks_membership_price in self.current_created_place.hot_desks_membership_prices:
            hot_desks_formset_initial_data.append({
                'duration': hot_desks_membership_price.duration,
                'seating_price': hot_desks_membership_price.seating_price,
                'member_accs': hot_desks_membership_price.member_accs
            })

        self.hot_desks_formset_class.extra = len(hot_desks_formset_initial_data)+3
        ctx['hot_desks_formset'] = self.get_hot_desks_formset(initial=hot_desks_formset_initial_data)
        return ctx

    def form_valid(self, form):
        hot_desks_formset = self.get_hot_desks_formset()

        if form.is_valid() and hot_desks_formset.is_valid():
            obj = form.save(commit=False)

            hot_desks_formset = self.get_hot_desks_formset(instance=obj)
            hot_desks_membership_price_objs = hot_desks_formset.save(commit=False)

            current_created_place_pickle = self.request.session.get('current_created_place')
            if current_created_place_pickle:
                try:
                    current_created_place = pickle.loads(current_created_place_pickle)
                    current_created_place.hot_desks_membership_prices = hot_desks_membership_price_objs
                    self.request.session['current_created_place'] = pickle.dumps(current_created_place)
                    self.request.session.save()
                except pickle.PickleError:
                    pass
        else:
            return super(PlaceAddMembershipDescPriceView, self).form_invalid(form)
        return super(PlaceAddMembershipDescPriceView, self).form_valid(form)
