from django.core.urlresolvers import reverse
from django.http import Http404
from django.shortcuts import render, redirect
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView

from coworker.place.models import Place
from coworker.place.forms import PlaceModelForm
from .mixins import LoginRequiredMixin
from django.http import JsonResponse

from coworker.core.mixins import AjaxableResponseMixin
from coworker.users.forms import ProfileForm, UserRegisterForm
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
        return reverse("main:search")
        # return reverse('users:detail', kwargs={'username': self.request.user.username})


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
        ctx["places"] = Place.objects.filter(user=self.request.user)
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


def registration(request):
    user_form = UserRegisterForm(request.POST or None, instance=request.user)
    place_form = PlaceModelForm(request.POST or None, instance=request.user)
    if user_form.is_valid():
        user_form.save()

    if place_form.is_valid():
        place_form.save()
        return redirect('main:search')

    return render(request, 'users/registration.html', {
        "user_form": user_form,
        "place_form": place_form,
    })
