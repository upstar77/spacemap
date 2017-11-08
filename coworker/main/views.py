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


