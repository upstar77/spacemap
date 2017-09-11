from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'main/index.html'


class SearchList(TemplateView):
    template_name = 'main/search_list.html'
