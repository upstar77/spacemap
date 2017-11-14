from django.conf.urls import url

from . import views


urlpatterns = [
    # url(
    #     regex=r'^api/list$',
    #     view=views.EventSearchView.as_view(),
    #     name='search-api'
    # ),
    url(
        regex=r'^api/autocomplete/(?P<app>[\w-]+)/(?P<model>[\w-]+)',
        view=views.Autocomplete.as_view(),
        name='place'
    ),
]
