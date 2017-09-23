from django.core.urlresolvers import reverse
from django.http import Http404
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView
from .mixins import LoginRequiredMixin
from django.http import JsonResponse

from coworker.core.mixins import AjaxableResponseMixin
from coworker.users.forms import ProfileForm
from .serializers import UserSerializer
from .models import User



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

    def get_success_url(self):
        return reverse('users:profile')

    def get_form_kwargs(self):
        ctx = super(UserUpdateView, self).get_form_kwargs()
        ctx["request"] = self.request
        return ctx

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        return ctx

    def form_invalid(self, form):
        return super(UserUpdateView, self).form_invalid(form)

    def form_valid(self, form):
        if self.request.is_ajax():
            obj = form.save()
            data = {
                'obj': UserSerializer(obj).data,
            }
            return JsonResponse(data)
        return super().form_valid(form)

class UserListView(LoginRequiredMixin, ListView):
    model = User
    # These next two lines tell the view to index lookups by username
    slug_field = 'username'
    slug_url_kwarg = 'username'


class ReviewsList(LoginRequiredMixin, TemplateView):
    template_name = ''




class UpdateProfileImage(LoginRequiredMixin, UpdateView):
    model = User
    fields = ['profile_image']

    def get_success_url(self):
        return reverse('users:profile')

    def get(self, *args, **kwargs):
        raise Http404
