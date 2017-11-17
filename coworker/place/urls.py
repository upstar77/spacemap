from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    url(r'^card/api/(?P<pk>\d+)/$', view=views.PlaceDetailApiView.as_view(), name='detail_card'),
    url(r'^map/api/$', view=views.PlaceMapApiView.as_view(), name='map_api'),


    #url(r'^list-space/success/$', view=views.PlaceAddSuccess.as_view(), name='list-space-success'),


    #photo edit urls


    url(r'^search/autocomplete/$', views.autocomplete),

    url(r'^search/$', view=views.SearchList.as_view(), name='search'),
    url(r'^search/(?P<country>[\w-]+)/', view=views.SearchList.as_view(), name='search-country'), #HERE REMOVED $


    url(r'^(?P<country>[\w-]+)/$', view=views.PlaceCountryList.as_view(), name='country'),
    url(r'^(?P<country>[\w-]+)/(?P<city>[\w-]+)/$', view=views.PlaceCityList.as_view(), name='city'),
    url(r'^(?P<country>[\w-]+)/(?P<city>[\w-]+)/(?P<place>[\w-]+)/$',
        view=views.PlaceView.as_view(), name='place'),
    # url(r'^(?P<city>[\w-]+)/(?P<place>.*)/$', view=views.Place.as_view(), name='place'),


]
