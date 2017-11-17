from ajax_select import register, LookupChannel
from coworker.cities.models import City
from coworker.search.backends import get_search_backend

@register('city')
class CityLookup(LookupChannel):

    model = City

    def get_query(self, q, request):
        backend = get_search_backend('default')
        results = backend.search(q, model_or_queryset=self.model.objects.all())
        return results

    def format_item_display(self, item):
        return u"<span class='tag'>%s</span>" % item.__str__()

