from datetime import datetime

from django import template
from django.utils.translation import ugettext_lazy as _
from coworker.cities.models import Country, CityOrigin, Contenent

register = template.Library()


@register.inclusion_tag("place/breadcrumbs.html")
def breadcrumbs(obj):
    #TODO make that universtal
    return {
        "obj": obj,
    }

