from datetime import datetime

from pytz import timezone

from django.db import models
from django.conf import settings
from django.db.models.query import QuerySet

from django.utils.translation import ugettext_lazy as _


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


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    start_time = models.DateTimeField(db_index=True)
    end_time = models.DateTimeField()
    url = models.URLField(blank=True)
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)
    country_code = models.CharField(max_length=2, blank=True)
    continent_code = models.CharField(max_length=2, null=True)

    objects = EventManager()

    class Meta:
        ordering = ('start_time',)

    def __unicode__(self):
        return self.title

    @property
    def day_of_month(self):
        return self.start_time.strftime('%d')

    @property
    def month_abbr(self):
        """Return the abbreviated month name with the abbr html tag."""
        # for l10n, the abbreviated month strings include the tag
        return u'<abbr>{0:%b}</abbr>'.format(self.start_time)
