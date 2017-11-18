import logging
import pickle

from django.shortcuts import render, redirect, get_object_or_404
from django.utils.text import slugify
from rest_framework import views
from rest_framework.response import Response

from coworker.search.backends import get_search_backend
from django.urls import reverse_lazy
from django.http import JsonResponse, Http404
from django.forms.models import inlineformset_factory
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View, TemplateView, CreateView, FormView
from django.core.files.images import get_image_dimensions

from coworker.place.serializers import PlaceMapApiSerializer
from .models import MembershipDeskPrice, Photos
from .models import Place, MeetingRoom
from coworker.cities.models import City
from coworker.cities.models import Country
from .forms import *
log = logging.getLogger('debug')


class PlaceCountryList(View):
    template_name = 'place/country.html'


    def get_popular_cities(self, country):
        return City.objects.filter(country=country)


    def get(self, request, *args, **kwargs):
        country = self.kwargs["country"]
        country = get_object_or_404(Country, slug__icontains=country)
        return render(request, self.template_name, {
            'country': country,
            'popular_cities': self.get_popular_cities(country),
            'top_places': Place.objects.by_country(country),
        })


class PlaceCityList(View):
    template_name = 'place/city.html'


    def get_popular_places(self, city):
        return Place.objects.all()


    def get(self, request, *args, **kwargs):
        country = self.kwargs["country"]
        city = self.kwargs["city"]
        city = get_object_or_404(City, country__slug__icontains=country, slug=city)
        return render(request, self.template_name, {
            'city': city,
            'top_places': Place.objects.by_city(city),
        })


@method_decorator(csrf_exempt, name='dispatch')
class SearchList(View):
    template_name = 'pages/search_list.html'

    def get(self, request, *args, **kwargs):
        country = self.kwargs.get("country")
        ctx = {}
        if country:
            places = Place.objects.by_country(country)
        else:
            places = Place.objects.all()

        filter = request.GET.get("q") or request.POST.get('h_location')
        if filter:
            places = places.filter(space_name__search=filter)

        if not places:
            places = Place.objects.all()

        ctx = {
            'object_list': places,
            'filter': filter
        }
        return render(request, self.template_name, ctx)

    def post(self, request, *args, **kwargs):
        #TODO figure out why and where called post method
        return self.get(request, *args, **kwargs)


from coworker.social.models import Tweet


class PlaceView(View):
    template_name = 'responsive/place.html'

    def get(self, request, *args, **kwargs):
        place_slug = self.kwargs["place"]
        place = Place.objects.filter(slug=place_slug).first()
        if not place:
            raise Http404
        tweets = Tweet.objects.filter(user=request.user)
        return render(request, self.template_name, {
            'place': place,
            'tweets': tweets
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

    def save_place(self):
        self.current_created_place = self.get_current_created_place()
        place = self.current_created_place.place
        place.id = None
        place.save()

        amenities = self.current_created_place.amenities
        meeting_rooms = self.current_created_place.meeting_rooms
        hot_desks_membership_prices = self.current_created_place.hot_desks_membership_prices
        photos = self.current_created_place.photos
        for amenities_obj in amenities:
            place.amenities.add(amenities_obj)
        place.save()
        for meeting_room in meeting_rooms:
            meeting_room.place = place
            meeting_room.save()
        for hot_desks_membership_price in hot_desks_membership_prices:
            hot_desks_membership_price.place = place
            hot_desks_membership_price.save()

        for photo_id in photos:
            try:
                Photos.objects.filter(id=photo_id).update(place=place)
            except Exception as e:
                print(e)
        # try:
        #     self.request.session["photos_ids"].clear()
        #     place.user = self.request.user
        # except Exception as e:
        #     print(e)

        try:
            del self.request.session['current_created_place']
        except KeyError:
            pass

        try:
            place.city_origin = City.objects.order_by("?").first()
            place.slug = slugify(place.name)
        except Exception as e:
            print(e)
        place.save()

        # try:
        #     place = Place.objects.get(id=999999999)
        #     print(place)
        #     place.delete()
        # except Place.DoesNotExist:
        #     pass






def autocomplete(request):
    model_or_queryset = Place.objects.all()
    backend = get_search_backend('default')
    query = request.GET["q"]
    results = backend.search(query, model_or_queryset=model_or_queryset)
    r = {"res": []}
    for x in results:
        r["res"].append((x.space_name, x.cs_description))
    return JsonResponse(r)





class PlaceDetailApiView(View):
    template_name = 'responsive/popup_template.html'

    def get(self, request, *args, **kwargs):
        place = get_object_or_404(Place, id=kwargs["pk"])
        return render(request, self.template_name, {"object": place})


class PlaceMapApiView(views.APIView):
    search_key = "q"
    search_backend = 'default'

    def get(self, request, *args, **kwargs):
        q = request.GET.get(self.search_key)
        backend = get_search_backend(self.search_backend)
        places = Place.objects.all()
        if q and q != "None":
            places = backend.search(q, model_or_queryset=places)
        return Response(PlaceMapApiSerializer(places, many=True).data)
