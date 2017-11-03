from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^search/$', view=views.SearchList.as_view(), name='search'),
    url(r'^(?P<event>[\w-]+)/$', view=views.EventDetailView.as_view(), name='event'),
]
