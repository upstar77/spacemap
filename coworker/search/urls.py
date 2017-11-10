from django.conf.urls import url

from . import views


urlpatterns = [
    # url(
    #     regex=r'^api/list$',
    #     view=views.EventSearchView.as_view(),
    #     name='search-api'
    # ),
    url(
        regex=r'^api/list$',
        view=views.PlaceSearchView.as_view(),
        name='place'
    ),
]
