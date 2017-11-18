from django.shortcuts import render
from django.http import JsonResponse

from django.views.generic.edit import CreateView
from .models import Tweet
from coworker.social.forms import TweetForm


def tweet_create(request):
    form = TweetForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.user = request.user
        instance.save()

    return JsonResponse({"status": True})

# class TweetCreate(CreateView):
#     model = Tweet
#     fields = '__all__'
#
#     def get_initial(self):
#         self.initial.update({'user': self.request.user})
#         return self.initial
#
#     def form_valid(self, form):
#         form.instance.user = self.request.user
#         return super().form_valid(form)
