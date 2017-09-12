from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'pages/index.html'


class SearchList(TemplateView):
    template_name = 'pages/search_list.html'



class ListSpace(TemplateView):
    template_name = 'pages/list_space.html'


