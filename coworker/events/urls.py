from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^search/$', view=views.SearchList.as_view(), name='search'),
    url(r'^autocomplete/$', view=views.AutocompleteEvent.as_view(), name='autocomplete'),
    # url(r'^search/?$', views.MySearchView.as_view(), name='search'),
    url(r'^(?P<event>[\w-]+)/$', view=views.EventDetailView.as_view(), name='event'),
    url(
        regex=r'^api/list$',
        view=views.EventSearchView.as_view(),
        name='search-api'
    ),
]
