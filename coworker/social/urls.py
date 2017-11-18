from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    url(r'^create/$', view=views.tweet_create, name='create'),
]
