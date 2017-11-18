from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # url(regex=r'^$', view=views.UserListView.as_view(), name='list'),
    # url(regex=r'^~redirect/$', view=views.UserRedirectView.as_view(), name='redirect'),
    # url(regex=r'^(?P<username>[\w.@+-]+)/$', view=views.UserDetailView.as_view(), name='detail'),

    #url(regex=r'^~update/$', view=views.UserUpdateView.as_view(), name='update'),
    url(regex=r'^usertype/$', view=views.UserUpdateView.as_view(), name='user_type'),

    url(regex=r'^update_aboutme/$', view=views.UserUpdateView.as_view(), name='update_aboutme'),

    # url(regex=r'^myreviews/$', view=views.UserUpdateView.as_view(), name='myreviews'),
    url(regex=r'^editprofile/$', view=views.UserUpdateView.as_view(), name='editprofile'),
    url(regex=r'^editprofile/$', view=views.UserUpdateView.as_view(), name='editprofile'),

    # url(r'^$', view=views.UserProfileView.as_view(), name='profile'),
    url(r'^$', view=views.UserUpdateView.as_view(), name='profile'),

    url(r'^myreviews/$', view=TemplateView.as_view(template_name='pages/reviews.html'), name='myreviews'),

    url(r'^get_spaces/$', view=TemplateView.as_view(template_name='pages/reviews.html'), name='get_spaces'),
    url(r'^photo/$', view=views.UpdateProfileImage.as_view(), name='photo'),

    url(r'^registration/$', views.registration, name='registration'),
]
