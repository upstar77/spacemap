import datetime

from django.db import models
from django.db.models import Q
from django.urls import reverse
from django.conf import settings
from django.utils.encoding import python_2_unicode_compatible, smart_text
from django.utils.translation import pgettext_lazy
from django_prices.models import PriceField
from django.contrib.postgres.fields import HStoreField
from mptt.managers import TreeManager
from mptt.models import MPTTModel
from django.utils.text import slugify


@python_2_unicode_compatible
class Category(MPTTModel):
    name = models.CharField(
        pgettext_lazy('Category field', 'name'), max_length=128)
    slug = models.SlugField(
        pgettext_lazy('Category field', 'slug'), max_length=50)
    description = models.TextField(
        pgettext_lazy('Category field', 'description'), blank=True)
    parent = models.ForeignKey(
        'self', null=True, blank=True, related_name='children',
        verbose_name=pgettext_lazy('Category field', 'parent'))
    hidden = models.BooleanField(
        pgettext_lazy('Category field', 'hidden'), default=False)

    objects = models.Manager()
    tree = TreeManager()

    class Meta:
        verbose_name = pgettext_lazy('Category model', 'category')
        verbose_name_plural = pgettext_lazy('Category model', 'categories')
        app_label = 'services'

    def __str__(self):
        return self.name

    def get_absolute_url(self, ancestors=None):
        return reverse('service:category',
                       kwargs={'path': self.get_full_path(ancestors),
                               'category_id': self.id})

    def get_full_path(self, ancestors=None):
        if not self.parent_id:
            return self.slug
        if not ancestors:
            ancestors = self.get_ancestors()
        nodes = [node for node in ancestors] + [self]
        return '/'.join([node.slug for node in nodes])

    def set_hidden_descendants(self, hidden):
        self.get_descendants().update(hidden=hidden)



@python_2_unicode_compatible
class ServiceAttribute(models.Model):
    slug = models.SlugField(
        pgettext_lazy('service attribute field', 'internal name'),
        max_length=50, unique=True)
    name = models.CharField(
        pgettext_lazy('service attribute field', 'display name'),
        max_length=100)

    class Meta:
        ordering = ('slug', )
        verbose_name = pgettext_lazy('service attribute model', 'service attribute')
        verbose_name_plural = pgettext_lazy('service attribute model', 'service attributes')

    def __str__(self):
        return self.name

    def get_formfield_name(self):
        return slugify('attribute-%s' % self.slug)

    def has_values(self):
        return self.values.exists()


@python_2_unicode_compatible
class ServiceClass(models.Model):
    name = models.CharField(
        pgettext_lazy('Service class field', 'name'), max_length=128)
    has_variants = models.BooleanField(
        pgettext_lazy('Service class field', 'has variants'), default=True)
    service_attributes = models.ManyToManyField(
        'ServiceAttribute', related_name='service_class', blank=True,
        verbose_name=pgettext_lazy('Service class field',
                                   'service attributes'))
    variant_attributes = models.ManyToManyField(
        'ServiceAttribute', related_name='service_variants_class', blank=True,
        verbose_name=pgettext_lazy('Service class field', 'variant attributes'))
    is_shipping_required = models.BooleanField(
        pgettext_lazy('Service class field', 'is shipping required'),
        default=False)

    class Meta:
        verbose_name = pgettext_lazy(
            'Service class model', 'Service class')
        verbose_name_plural = pgettext_lazy(
            'Service class model', 'Service classes')
        app_label = 'services'

    def __str__(self):
        return self.name

    def __repr__(self):
        class_ = type(self)
        return '<%s.%s(pk=%r, name=%r)>' % (
            class_.__module__, class_.__name__, self.pk, self.name)



class ServiceManager(models.Manager):

    def get_available_servicess(self):
        today = datetime.date.today()
        return self.get_queryset().filter(
            Q(available_on__lte=today) | Q(available_on__isnull=True))


@python_2_unicode_compatible
class Service(models.Model):
    service_class = models.ForeignKey(
        ServiceClass, related_name='services',
        verbose_name=pgettext_lazy('Service field', 'services class'))
    name = models.CharField(
        pgettext_lazy('Service field', 'name'), max_length=128)
    description = models.TextField(
        verbose_name=pgettext_lazy('Service field', 'description'))
    categories = models.ManyToManyField(
        Category, verbose_name=pgettext_lazy('Service field', 'categories'),
        related_name='servicess')
    price = PriceField(
        pgettext_lazy('Service field', 'price'),
        currency=settings.DEFAULT_CURRENCY, max_digits=12, decimal_places=2)
    available_on = models.DateField(
        pgettext_lazy('Service field', 'available on'), blank=True, null=True)
    attributes = HStoreField(pgettext_lazy('Service field', 'attributes'),
                             default={})
    updated_at = models.DateTimeField(
        pgettext_lazy('Service field', 'updated at'), auto_now=True, null=True)
    is_featured = models.BooleanField(
        pgettext_lazy('Service field', 'is featured'), default=False)

    objects = ServiceManager()

    class Meta:
        app_label = 'services'
        verbose_name = pgettext_lazy('Service model', 'service')
        verbose_name_plural = pgettext_lazy('Service model', 'services')

    def __iter__(self):
        if not hasattr(self, '__variants'):
            setattr(self, '__variants', self.variants.all())
        return iter(getattr(self, '__variants'))

    def __repr__(self):
        class_ = type(self)
        return '<%s.%s(pk=%r, name=%r)>' % (
            class_.__module__, class_.__name__, self.pk, self.name)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('services:details', kwargs={'slug': self.get_slug(),
                                                  'services_id': self.id})

    def get_slug(self):
        return slugify(smart_text(self.name))

    def is_in_stock(self):
        return any(variant.is_in_stock() for variant in self)

    def get_first_category(self):
        for category in self.categories.all():
            if not category.hidden:
                return category
        return None

    def is_available(self):
        today = datetime.date.today()
        return self.available_on is None or self.available_on <= today

    def get_first_image(self):
        first_image = self.images.first()

        if first_image:
            return first_image.image
        return None

    def get_attribute(self, pk):
        return self.attributes.get(smart_text(pk))

    def set_attribute(self, pk, value_pk):
        self.attributes[smart_text(pk)] = smart_text(value_pk)

