from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    url(r'^$', view=views.Index.as_view(), name='index'),
    url(r'^about/$', TemplateView.as_view(template_name='pages/about.html'), name='about'),
    url(r'^cities/$', TemplateView.as_view(template_name='pages/cities.html'), name='cities'),
    url(r'^reviews/$', TemplateView.as_view(template_name='pages/reviews.html'), name='reviews'),
    url(r'^search/$', view=views.SearchList.as_view(), name='search'),
    url(r'^list-space/$', view=views.ListSpace.as_view(), name='list-space')
]
