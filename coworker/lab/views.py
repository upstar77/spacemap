from django.shortcuts import render
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView, FormView
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView, CreateView, FormView
from django.views import View
from .models import Entry
# Create your views here.
# aricles


class ArticleListView(View):
    template_name = "lab/lab_index.html"

    def get(self, request, *args, **kwargs):
        ctx = {}
        ctx['articles'] = Entry.objects.all()
        return render(request, self.template_name, ctx)

    def post(self, request, *args, **kwargs):
        #TODO figure out why and where called post method
        return self.get(request, *args, **kwargs)



class EntryDetail(DetailView):
    template_name = "lab/entry_detail.html"
    model = Entry
    context_object_name = "article"
# class ArticleListView(Views):
#     model = Entry
#     context_object_name = "articles"
#     template_name = "lab/lab_index.html"
#
