from datetime import datetime

from django.urls import reverse
from django_prices.forms import PriceField
from pytz import timezone

from django.db import models
from django.conf import settings
from django.db.models.query import QuerySet

from django.utils.translation import ugettext_lazy as _, pgettext_lazy


def utcnow():
    if settings.USE_TZ:
        # We have to be sure to use a tz-aware datetime because otherwise
        # it will be converted using django.utils.timezone.make_aware, which
        # will throw an error during DST change, because Zen.
        # https://code.djangoproject.com/ticket/22598
        return timezone('UTC').localize(datetime.utcnow())

    return datetime.utcnow()


class EventQuerySet(QuerySet):
    def future(self):
        return self.filter(start_time__gt=utcnow()).order_by('start_time')

    def past(self):
        return self.filter(end_time__lte=utcnow()).order_by('end_time')

    def current_and_future(self):
        return self.filter(end_time__gt=utcnow()).order_by('start_time')


class EventManager(models.Manager):
    def get_queryset(self):
        return EventQuerySet(self.model, using=self._db)

    def future(self):
        return self.get_queryset().future()

    def past(self):
        return self.get_queryset().past()

    def current_and_future(self):
        return self.get_queryset().current_and_future()


class Person(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=200)
    position = models.CharField(max_length=300)
    description = models.TextField()


class TicketInfo(models.Model):
    sales_end = models.DateTimeField(db_index=True)
    price = PriceField(
        pgettext_lazy('Shipping method country field', 'price'), max_digits=12, decimal_places=2)



class Investor(models.Model):
    name = models.CharField(max_length=200)
    picture = models.FileField(upload_to="investor/photos")
    position = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name


class Startup(models.Model):
    name = models.CharField(max_length=200)
    image = models.FileField(upload_to="startup/photos")
    url = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    start_time = models.DateTimeField(db_index=True)
    end_time = models.DateTimeField()
    url = models.URLField(blank=True)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    country_code = models.CharField(max_length=2, blank=True)
    continent_code = models.CharField(max_length=2, null=True)
    place = models.ForeignKey('place.Place', blank=True, null=True)
    slug = models.SlugField()
    image = models.FileField(upload_to="events/photos", null=False, blank=False)
    investors = models.ManyToManyField(Investor, blank=True)
    startups = models.ManyToManyField(Startup, blank=True)
    objects = EventManager()

    class Meta:
        ordering = ('start_time',)

    def __str__(self):
        return self.name

    @property
    def day_of_month(self):
        return self.start_time.strftime('%d')

    @property
    def month_abbr(self):
        """Return the abbreviated month name with the abbr html tag."""
        # for l10n, the abbreviated month strings include the tag
        return u'<abbr>{0:%b}</abbr>'.format(self.start_time)


    def get_absolute_url(self):
        return reverse('events:event', kwargs={
            'event': self.slug,
        })

    def get_main_photo(self):
        return self.image.url

    def get_title(self):
        return self.name

    def indexing(self):
        from .search_indexes import EventIndex
        from config.es_client import es_client
        # EventIndex.init(using=es_client)
        obj = EventIndex(
          meta={'id': self.id},
          name=self.name,
          start_time=self.start_time,
          description=self.description,
        )
        obj.save(using=es_client)
        return obj.to_dict(include_meta=True)
