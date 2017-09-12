from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    url(r'^(?P<country>[\w-]+)/$', view=views.Place.as_view(), name='country'),
    url(r'^(?P<country>[\w-]+)/(?P<city>[\w-]+)/$', view=views.Place.as_view(), name='city'),
    url(r'^(?P<country>[\w-]+)/(?P<city>[\w-]+)/(?P<place>[\w-]+)/$', view=views.Place.as_view(), name='place'),
    # url(r'^(?P<city>[\w-]+)/(?P<place>.*)/$', view=views.Place.as_view(), name='place'),
]
