from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.Index.as_view(),
        name='index'
    ),
    url(
        regex=r'^search$',
        view=views.SearchList.as_view(),
        name='search'
    )
]
