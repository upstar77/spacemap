from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    url(r'^$', view=views.Index.as_view(), name='index'),
    url(r'^search/$', view=views.SearchView.as_view(), name='search'),
    url(r'^about/$', TemplateView.as_view(template_name='pages/about.html'), name='about'),
    url(r'^cities/$', TemplateView.as_view(template_name='pages/cities.html'), name='cities'),
    url(r'^team/$', TemplateView.as_view(template_name='pages/team.html'), name='team'),
    url(r'^contact/$', TemplateView.as_view(template_name='pages/contact.html'), name='contact'),
    url(r'^reviews/$', TemplateView.as_view(template_name='pages/reviews.html'), name='reviews'),
    url(r'^terms/$', TemplateView.as_view(template_name='pages/terms.html'), name='terms'),
    url(r'^privacy-policy/$', TemplateView.as_view(template_name='pages/privacy-policy.html'), name='privacy-policy'),
    url(r'^help/$', TemplateView.as_view(template_name='pages/help.html'), name='help'),
]
