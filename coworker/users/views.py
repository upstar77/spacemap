from django.core.urlresolvers import reverse
from django.http import Http404
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse

from coworker.core.mixins import AjaxableResponseMixin
from coworker.users.forms import ProfileForm
from .models import User


class UserFromRequest:
    def get_object(self, queryset=None):
        return self.request.user


class UserProfileView(LoginRequiredMixin, DetailView):
    template_name = 'users/profile.html'
    model = User
    # These next two lines tell the view to index lookups by username
    slug_field = 'username'
    slug_url_kwarg = 'username'

    def get_object(self, queryset=None):
        return self.request.user


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse('users:detail',
                       kwargs={'username': self.request.user.username})


class UserUpdateView(AjaxableResponseMixin, LoginRequiredMixin, UpdateView):
    template_name = 'users/profile.html'
    form_class = ProfileForm

    def get_object(self, *args, **kwargs):
        return self.request.user

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        return ctx

    def form_valid(self, form):
        # We make sure to call the parent's form_valid() method because
        # it might do some processing (in the case of CreateView, it will
        # call form.save() for example).
        response = super(UserUpdateView, self).form_valid(form)
        if self.request.is_ajax():
            data = {
                'birthday': self.object.birth_day.strftime("%b %d, %Y"),
            }
            return JsonResponse(data)
        else:
            return response

class UserListView(LoginRequiredMixin, ListView):
    model = User
    # These next two lines tell the view to index lookups by username
    slug_field = 'username'
    slug_url_kwarg = 'username'


class ReviewsList(LoginRequiredMixin, TemplateView):
    template_name = ''


class UpdateProfileImage(UserFromRequest, UpdateView):
    model = User
    fields = ['profile_image']

    def get_success_url(self):
        return reverse('users:profile')

    def get(self, *args, **kwargs):
        raise Http404
