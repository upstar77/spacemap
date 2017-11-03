from django.views.generic import TemplateView
from coworker.place.models import Place


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
        ctx.update(d)
        return ctx




