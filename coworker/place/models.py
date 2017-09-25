import json
import os

from django.contrib.auth import get_user_model
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.postgres.fields import JSONField
from .fields import generate_time_range
from coworker.cities.models import City, CityOrigin

# Create your models here.
#MAX_MEETING_ROOM_NUMBER = 500
MAX_DESC_COUNT = 500
PRIVATE_OFFICES = 500

MEETING_ROOM_CAPACITY_RANGE = (2, 50)

USER_TYPE_CHOICES = (
    ('ot', _('官方团队')),
    ('cm', _('新会员')),
    ('pm', _('老会员')),
)


PRIVATE_OFFICE_CHOISES = ((0, "Number of private offices"))

TOTAL_CAPACITY_KEY = "%s {}".format(_("members"))
TOTAL_CAPACITY = [(i, TOTAL_CAPACITY_KEY % i) for i in range(1, 500)] + \
                 [(i, TOTAL_CAPACITY_KEY % i) for i in range(500, 1500, 100)]

PEOPLE_KEY = "%s {}".format(_("people"))

MAX_PEOPLE_CAPACITY_RANGE = [(i, PEOPLE_KEY % i) for i in range(1, 10)] + \
                 [(i, PEOPLE_KEY % i) for i in range(500, 1500, 100)]


SIZE_OF_YOUR_COWORKING_SPACE_CHOISES = (
    (0, _("Size of your coworking space")),
    (1, _("Less than 500 sq ft")),
    (2, _("500 - 1000 sq ft")),
    (3, _("1000 - 2000 sq ft")),
    (4, _("2000 - 3000 sq ft")),
    (5, _("3000 - 5000 sq ft")),
    (6, _("5000 - 10,000 sq ft")),
    (7, _("10,000 - 20,000 sq ft")),
    (8, _("20,000 - 30,000 sq ft")),
    (9, _("30,000 - 40,000 sq ft")),
    (10, _("40,000 - 50,000 sq ft")),
    (11, _("50000 - 60000 sq ft")),
    (12, _("60,000 - 70,000 sq ft")),
    (13, _("70000 - 80000 sq ft")),
    (14, _("80,000 - 90,000 sq ft")),
    (15, _("90,000 - 100,000 sq ft")),
    (16, _("More than 100,000 sq ft"))
)

OPENING_HOURS_KEY = "OH"
MEMBER_ACCS_CHOISE = (
    (OPENING_HOURS_KEY, "Same as opening hours"),
    ("24H", "24 hours")
)


class Location(models.Model):
    # location_name = models.CharField(max_length=250)

    address = models.CharField(max_length=250, blank=True)
    address_sec = models.CharField(max_length=250, blank=True)
    postal_code = models.CharField(max_length=250, blank=True)
    area = models.CharField(max_length=400, blank=True)
    lat = models.CharField(max_length=250, blank=True)
    lng = models.CharField(max_length=250, blank=True)

    class Meta:
        abstract = True


class AmenitiesManager(models.Manager):

    def common(self):
        return self.filter(is_additional=False)

    def addition(self):
        return self.filter(is_additional=True)


class Amenities(models.Model):
    name = models.CharField(max_length=250)
    is_additional = models.BooleanField(default=False)

    objects = AmenitiesManager()

    def __str__(self):
        return "Amenities<Name: %(name)s, Additional: %(is_additional)s>" % {'name': self.name, 'is_additional': self.is_additional}


class ContactInfo(models.Model):
    ls_email = models.EmailField()
    tel = models.CharField(_("Tel"), blank=True, null=True, max_length=300)
    website_url = models.CharField(_("Website"), blank=True, null=True, max_length=300)
    facebook = models.CharField(max_length=300, blank=True, null=True)
    twitter = models.CharField(max_length=300, blank=True, null=True)
    instagram = models.CharField(max_length=300, blank=True, null=True)

    notification_email = models.EmailField()

    class Meta:
        abstract = True


class MeetingRoom(models.Model):
    room_info = models.CharField(max_length=250)
    mr_capacity = models.PositiveIntegerField(
        choices=[(i, PEOPLE_KEY % i) for i in range(*MEETING_ROOM_CAPACITY_RANGE)],
        validators=[
            MinValueValidator(MEETING_ROOM_CAPACITY_RANGE[0]),
            MaxValueValidator(MEETING_ROOM_CAPACITY_RANGE[1]),
        ]
    )
    place = models.ForeignKey('Place')

    class Meta:
        verbose_name = _('Meeting Room')
        verbose_name_plural = _('Meeting Rooms')


class Photos(models.Model):
    image = models.FileField(upload_to="user/photos", null=False, blank=False)
    place = models.ForeignKey('Place', null=True, blank=True)
    user = models.ForeignKey('users.User', blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    is_header_image = models.BooleanField(default=False)

    def __str__(self):
        return self.image.name


class MemberPayment(models.Model):
    currency = models.CharField(max_length=250)
    opay = models.BooleanField(default=True, help_text=_("Can members pay online?"))
    accs = models.BooleanField(default=True, help_text=_("Do you accept credit cards?"))
    apps = models.BooleanField(default=True, help_text=_("Can members pay with PayPal?"))
    deposit = models.CharField(max_length=250, help_text=_("eg. none, 1 month, etc"))

    class Meta:
        abstract = True


class PlaceManager(models.Manager):

    def by_country(self, country_slug):
        return self.filter(city_origin__country__slug__icontains=country_slug)

    def by_city(self, slug):
        return self.filter(city_origin=slug)


class Place(MemberPayment, ContactInfo, Location):
    space_name = models.CharField(_("创客云图场地的名称"), max_length=250)
    slug = models.SlugField()

    city = models.ForeignKey(City, null=True)
    user_type = models.CharField(max_length=2, choices=USER_TYPE_CHOICES, default=USER_TYPE_CHOICES[0][0])
    cs_description = models.TextField(_("Description"))

    rent_nm = models.BooleanField(default=False, help_text="Do you allow non-members to rent your meeting rooms?")
    hire_nm = models.BooleanField(
        default=False, help_text="Do you allow non-members to hire your coworking space for bigger events?")

    max_people_capacity = models.PositiveIntegerField(
        choices=MAX_PEOPLE_CAPACITY_RANGE,
        default=50
    )

    #page 6
    hours = JSONField()
    sat_open = models.CharField(max_length=4, choices=generate_time_range(), blank=True)
    sun_close = models.CharField(max_length=4, choices=generate_time_range(), blank=True)
    member_accs = models.CharField(max_length=2, choices=MEMBER_ACCS_CHOISE, default=OPENING_HOURS_KEY)
    #size 7
    desks = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(MAX_DESC_COUNT)])

    private_office = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(PRIVATE_OFFICES)])
    total_capacity = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=TOTAL_CAPACITY)
    size_of_your_coworking_space = models.PositiveIntegerField(choices=SIZE_OF_YOUR_COWORKING_SPACE_CHOISES, default=0)

    amenities = models.ManyToManyField(Amenities, blank=True, related_name="amenities")

    #8 photos
    # cover_img =

    #dummpy city location!!!
    city_origin = models.ForeignKey(CityOrigin, blank=True, null=True)

    objects = PlaceManager()

    class Meta:
        verbose_name = _('Place')
        verbose_name_plural = _('Places')

    def __str__(self):
        return "Place<Space name: %(space_name)s, City: %(city)s>" % {'space_name': self.space_name, 'city': self.city}

    @property
    def name(self):
        return self.space_name

    def get_absolute_url(self):
        return reverse('place:place', kwargs={
            'country': self.city_origin.country.slug,
            'city': self.city_origin.slug,
            'place': self.slug
        })

    def get_photos(self):
        return Photos.objects.filter(place=self)

    def get_main_photo(self):
        try:
            return Photos.objects.filter(place=self, is_header_image=True).first().image.url
        except Exception as e:
            return

    def get_address(self):
        return "{address} {city} {country}".format(
            address=self.address, city=self.city_origin.name, country=self.city_origin.country)

    def get_title(self):
        return "{}, {}".format(self.space_name, self.city_origin.name)
