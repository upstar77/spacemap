from django import template
register = template.Library()

@register.filter
def pdb(element):
    from django.conf import settings
    if settings.DEBUG:
        import pdb
        pdb.set_trace()
    return element
