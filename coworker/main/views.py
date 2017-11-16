from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views import View
from django.views.generic import TemplateView
from coworker.place.models import Place, Category
from coworker.services.models import Category as ServiceCategory, Service


class Index(TemplateView):
    template_name = 'pages/index.html'

    def get_context_data(self, **kwargs):
        places_tmp = Place.objects.order_by('?').all()[:8]
        d = {}
        for i, p in enumerate(places_tmp):
            d["place_%s" % (i+1)] = p
        ctx = {
            "places": Place.objects.order_by('?').all()[:10],
        }
        ctx['place_category'] = list(Category.objects.values_list('name', flat=True))
        ctx['service_categories'] = list(ServiceCategory.objects.values_list('name', flat=True))
        # event_category = Category.objects.all()
        # search_category = Category.objects.all()
        ctx.update(d)
        return ctx

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return HttpResponseRedirect(reverse('main:search'))
        return super().get(request, *args, **kwargs)


from coworker.search.backends import get_search_backend


class SearchView(View):
    template_name = 'pages/inner_main.html'
    # template_name = 'pages/map_tab.html'
    search_key = "q"
    search_backend = 'default'

    def get(self, request, *args, **kwargs):
        ctx = {}
        q = request.GET.get(self.search_key)
        ctx['q'] = q if q != 'None' else ''
        if request.GET.get("f", "map") == "map":
            self.template_name = 'pages/map_tab.html'
        else:
            backend = get_search_backend(self.search_backend)
            places = Place.objects.all()
            if q:
                places = backend.search(q, model_or_queryset=places)
            else:
                places = Place.objects.order_by("?")[:10]
            ctx["object_list"] = places
        return render(request, self.template_name, ctx)
