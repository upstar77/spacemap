import json
import os

from django.contrib.auth import get_user_model
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.translation import pgettext_lazy
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.postgres.fields import JSONField
from coworker.core.base_model import BaseLocation
from .fields import generate_time_range
from coworker.cities.models import City
from coworker.search import index

# Create your models here.
#MAX_MEETING_ROOM_NUMBER = 500
MAX_DESC_COUNT = 500
PRIVATE_OFFICES = 500

MEETING_ROOM_CAPACITY_RANGE = (2, 50)

USER_TYPE_CHOICES = (
    ('ot', _('Official team')),
    ('cm', _('New member')),
    ('pm', _('Old member')),
)


PRIVATE_OFFICE_CHOISES = ((0, "Number of private offices"))

TOTAL_CAPACITY_KEY = "%s {}".format(_("成员"))
TOTAL_CAPACITY = [(i, TOTAL_CAPACITY_KEY % i) for i in range(1, 500)] + \
                 [(i, TOTAL_CAPACITY_KEY % i) for i in range(500, 1500, 100)]

PEOPLE_KEY = "%s {}".format(_("种族"))

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

MEMBERSHIP_DESK_PRICE_DURATION_CHOICES = (
    ("1h", _("1 hour")),
    ("1d", _("1 hour")),
    ("1w", _("1 week")),
    ("1m", _("1 month")),
    ("3m", _("3 months")),
    ("6m", _("6 months")),
    ("1y", _("1 year"))
)

MEMBERSHIP_DESK_PRICE_ACCS_CHOICES = (
    (OPENING_HOURS_KEY, "Reception Hours"),
    ("24H", "24 hours")
)

MEMBERSHIP_PRIVATE_OFFICE_PRICE_NUMBER_OF_PEOPLE_CHOICES = (
    (0, _("0")),
    (1, _("1")),
)

MEMBERSHIP_PRIVATE_OFFICE_PRICE_NUMBER_OF_THIS_OFFICE_TYPE_CHOICES = (
    (0, _("0")),
    (1, _("1")),
)

MEMBERSHIP_OFFICE_PRICE_DURATION_CHOICES = (
    ("1m", _("1 month")),
    ("3m", _("3 months")),
    ("6m", _("6 months")),
    ("1y", _("1 year")),
    ("18m", _("18 months")),
    ("2y", _("2 years"))
)

MEMBERSHIP_OFFICE_PRICE_ACCS_CHOICES = (
    (OPENING_HOURS_KEY, "Reception Hours"),
    ("24H", "24 hours")
)


class Location(BaseLocation, models.Model):
    address_sec = models.CharField(max_length=250, blank=True)
    postal_code = models.CharField(max_length=250, blank=True)
    #TODO: Why do we need this field ?
    area = models.CharField(max_length=400, blank=True)

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
    ls_email = models.EmailField(blank=True)
    tel = models.CharField(_("Tel"), blank=True, null=True, max_length=300)
    website_url = models.CharField(_("Website"), blank=True, null=True, max_length=300)
    facebook = models.CharField(max_length=300, blank=True, null=True)
    twitter = models.CharField(max_length=300, blank=True, null=True)
    instagram = models.CharField(max_length=300, blank=True, null=True)

    notification_email = models.EmailField(blank=True)

    class Meta:
        abstract = True


class OpeningHours(models.Model):
    monday_from = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)
    monday_to = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)

    tuesday_from = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)
    tuesday_to = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)

    wednesday_from = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)
    wednesday_to = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)

    thursday_from = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)
    thursday_to = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)

    friday_from = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)
    friday_to = models.CharField(max_length=4, choices=generate_time_range(), blank=True, null=True)

    saturday_from = models.CharField(max_length=4, choices=generate_time_range(), default='-1')
    saturday_to = models.CharField(max_length=4, choices=generate_time_range(), default='-1')

    sunday_from = models.CharField(max_length=4, choices=generate_time_range(), default='-1')
    sunday_to = models.CharField(max_length=4, choices=generate_time_range(), default='-1')

    member_accs = models.CharField(max_length=3, choices=MEMBER_ACCS_CHOISE, default=OPENING_HOURS_KEY)

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


class MembershipDeskPrice(models.Model):
    duration = models.CharField(max_length=4, choices=MEMBERSHIP_DESK_PRICE_DURATION_CHOICES)
    seating_price = models.IntegerField()
    hot_desk = models.BooleanField(default=False)
    member_accs = models.CharField(max_length=3, choices=MEMBERSHIP_DESK_PRICE_ACCS_CHOICES, default=OPENING_HOURS_KEY)
    place = models.ForeignKey('Place')

    class Meta:
        verbose_name = _('Membership Desk Price')
        verbose_name_plural = _('Membership Desk Prices')


class MembershipPrivateOffice(models.Model):
    office_name = models.CharField(_("Name of private office"), max_length=250)
    number_of_people = models.PositiveIntegerField(choices=MEMBERSHIP_PRIVATE_OFFICE_PRICE_NUMBER_OF_PEOPLE_CHOICES, default=0)
    wboard = models.BooleanField(_("Does the office have a whiteboard"))
    qty = models.PositiveIntegerField(choices=MEMBERSHIP_PRIVATE_OFFICE_PRICE_NUMBER_OF_THIS_OFFICE_TYPE_CHOICES, default=0)
    place = models.ForeignKey('Place')

    class Meta:
        verbose_name = _('Private office')
        verbose_name_plural = _('Private offices')


class MembershipOfficePrice(models.Model):
    duration = models.CharField(max_length=4, choices=MEMBERSHIP_OFFICE_PRICE_DURATION_CHOICES)
    seating_price = models.IntegerField()
    member_accs = models.CharField(max_length=3, choices=MEMBERSHIP_OFFICE_PRICE_ACCS_CHOICES, default=OPENING_HOURS_KEY)
    office = models.ForeignKey('MembershipPrivateOffice')

    class Meta:
        verbose_name = _('Membership Office Price')
        verbose_name_plural = _('Membership Office Prices')


class Photos(models.Model):
    image = models.FileField(upload_to="user/photos", null=False, blank=False)
    place = models.ForeignKey('Place', null=True, blank=True)
    user = models.ForeignKey('users.User', blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    is_header_image = models.BooleanField(default=False)

    def __str__(self):
        return self.image.name


class MemberPayment(models.Model):
    # currency = models.CharField(max_length=250)
    opay = models.BooleanField(_("Can members pay online?"), default=True)
    accs = models.BooleanField(_("Do you accept credit cards?"), default=True)
    apps = models.BooleanField(_("Can members pay with PayPal?"), default=True)
    deposit = models.CharField(_("eg. none, 1 month, etc"), max_length=250, blank=True)

    class Meta:
        abstract = True


class Category(models.Model):
    name = models.CharField(
        pgettext_lazy('Category field', 'name'), max_length=128)
    slug = models.SlugField(
        pgettext_lazy('Category field', 'slug'), max_length=50)
    description = models.TextField(
        pgettext_lazy('Category field', 'description'), blank=True)
    hidden = models.BooleanField(
        pgettext_lazy('Category field', 'hidden'), default=False)

    class Meta:
        verbose_name = pgettext_lazy('Category model', 'category')
        verbose_name_plural = pgettext_lazy('Category model', 'categories')

    def __str__(self):
        return self.name

    # def get_absolute_url(self, ancestors=None):
    #     return reverse('product:category',
    #                    kwargs={'path': self.get_full_path(ancestors),
    #                            'category_id': self.id})




class PlaceManager(models.Manager):

    def by_country(self, country_slug):
        return self.filter(city__country__slug__icontains=country_slug)

    def by_city(self, slug):
        return self.filter(city=slug)



class Place(MemberPayment, ContactInfo, Location, OpeningHours, index.Indexed):
    space_name = models.CharField(_("Name of the site SpacesMap"), max_length=250)
    slug = models.SlugField()

    city = models.ForeignKey(City, null=True)
    user_type = models.CharField(max_length=2, choices=USER_TYPE_CHOICES, default=USER_TYPE_CHOICES[0][0])
    cs_description = models.TextField(_("Description"))

    rent_nm = models.BooleanField(_('Allow non members to rent my conference room?'), default=False)
    hire_nm = models.BooleanField(_('Allow non members to organize big events at my maker cloud site?'), default=False)

    max_people_capacity = models.PositiveIntegerField(
        choices=MAX_PEOPLE_CAPACITY_RANGE,
        default=50
    )

    desks = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(MAX_DESC_COUNT)])

    private_office = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(PRIVATE_OFFICES)])
    total_capacity = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=TOTAL_CAPACITY)
    size_of_your_coworking_space = models.PositiveIntegerField(choices=SIZE_OF_YOUR_COWORKING_SPACE_CHOISES, default=0)

    amenities = models.ManyToManyField(Amenities, blank=True, related_name="amenities")

    book_tour = models.BooleanField(_("Book A Tour"), default=True, help_text=_("Choose the days and times that visitors can book a tour."))
    free_day_pass = models.BooleanField(_("Get a Free Day Pass"), default=True, help_text=_("Choose the days that visitors can book a free day pass, and the hours they have access."))
    enable_reservation = models.BooleanField(_("Enable reservations"), default=True, help_text=_("This will allow people to select the membership type they want and start date. You'll receive their reservation request via email so you can follow up with them to confirm and arrange payment."))

    user = models.ForeignKey('users.User', blank=True, null=True)
    #dummpy city location!!!
    # city = models.ForeignKey(CityOrigin, blank=True, null=True)

    category = models.ForeignKey(Category, null=True)
    objects = PlaceManager()

    class Meta:
        verbose_name = _('Place')
        verbose_name_plural = _('Places')

    search_fields = [
        index.SearchField('space_name', partial_match=True),
        index.SearchField('cs_description'),
    ]

    def __str__(self):
        return "Place<Space name: %(space_name)s, City: %(city)s>" % {'space_name': self.space_name, 'city': self.city}

    @property
    def name(self):
        return self.space_name

    def get_absolute_url(self):
        try:
            return reverse('place:place', kwargs={
                'country': self.city.country.slug,
                'city': self.city.slug,
                'place': self.slug
            })
        except Exception as e:
            pass

    def get_photos(self):
        return Photos.objects.filter(place=self)

    def get_main_photo(self):
        try:
            return Photos.objects.filter(place=self, is_header_image=True).first().image.url
        except Exception as e:
            return

    def get_address(self):
        return "{address} {city} {country}".format(
            address=self.address, city=self.city.name, country=self.city.country)

    def get_title(self):
        return "{}, {}".format(self.space_name, self.city.name)

    @property
    def autocomplete_value(self):
        return "{}, {}, {}".format(self.space_name, self.city.country.name, self.city.name)
