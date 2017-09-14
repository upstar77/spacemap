from datetime import datetime

from django import template
from django.utils.translation import ugettext_lazy as _

register = template.Library()

@register.filter(name='split')
def split(value, separator):
    return value.split(separator)

def generate_time_range():
    HOURS_CHOISE = []
    for hr in range(0, 24):
        for min in range(0, 60, 30):
            HOURS_CHOISE.append(("%s_%s" % (hr, min), datetime(2012, 1, 1, hr, min, 0).strftime("%I:%M %p")))
    return HOURS_CHOISE


@register.inclusion_tag("elements/hours_select.html")
def hours_select(id, _type):
    return {
        "options": generate_time_range(),
        "type": _type,
        "id": id,
    }
