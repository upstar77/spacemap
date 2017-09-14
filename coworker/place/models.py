import json

import os
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
MAX_MEETING_ROOM_NUMBER = 500
MAX_DESC_COUNT = 500
PRIVATE_OFFICES = 500

MEETING_ROOM_CAPACITY_RANGE = (2, 50)

USER_TYPE_CHOICES = (
    ('ot', _('Official Team')),
    ('cm', _('Current Member')),
    ('pm', _('Past Member')),
)

PRIVATE_OFFICE_CHOISES = ((0, "Number of private offices"))

TOTAL_CAPACITY_KEY = "%s {}".format(_("members"))
TOTAL_CAPACITY = [(i, TOTAL_CAPACITY_KEY % i) for i in range(1, 500)] + \
                 [(i, TOTAL_CAPACITY_KEY % i) for i in range(500, 1500, 100)]


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



class Location(models.Model):
    # location_name = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    address_sec = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=250)
    area = models.CharField(max_length=400)
    cityLat = models.CharField(max_length=250)
    cityLng = models.CharField(max_length=250)



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
        return self.name


class ContactInfo(models.Model):
    ls_email = models.EmailField()
    tel = models.CharField(_("Tel"), blank=True, null=True)
    website_url = models.CharField(_("Website"), blank=True, null=True, max_length=300)

    #social media
    facebook = models.CharField(max_length=300, blank=True, null=True)
    twitter = models.CharField(max_length=300, blank=True, null=True)
    instagram = models.CharField(max_length=300, blank=True, null=True)

    notification_email = models.EmailField()

    class Meta:
        abstract = True


class MeetingRoom(models.Model):
    room_info = models.CharField(max_length=250)
    mr_capacity = models.PositiveIntegerField(
        choices=[(i, "%s %s" % (i, _("people"))) for i in range(*MEETING_ROOM_CAPACITY_RANGE)],
        validators=[
            MinValueValidator(MEETING_ROOM_CAPACITY_RANGE[0]),
            MaxValueValidator(MEETING_ROOM_CAPACITY_RANGE[1]),
        ]
    )


# class OpeningHours(models.Model):
#     pass

class Photos(models.Model):
    pass


class Member_Payment(models.Model):
    currency = models.CharField(max_length=250)
    opay = models.BooleanField(default=True, help_text=_("Can members pay online?"))
    accs = models.BooleanField(default=True, help_text=_("Do you accept credit cards?"))
    apps = models.BooleanField(default=True, help_text=_("Can members pay with PayPal?"))
    deposit = models.CharField(max_length=250, help_text=_("eg. none, 1 month, etc"))

#TODO remove this, and use some service
def get_countries():
    import coworker
    path_to_file = os.path.join(
        os.path.join(os.path.dirname(os.path.dirname(coworker.__file__))), "resources/countries.json")
    countries = json.loads(open(path_to_file).read())["countries"]
    return ((country, country) for country in countries)


class Place(models.Model):
    space_name = models.CharField(_("Name of your Coworking Space"), max_length=250)
    country = models.CharField(_("Country"), max_length=2500, choices=get_countries())
    #TODO state
    # state = models.CharField(_("State"), max_length=2500, choices=get_countries())
    city = models.CharField(_("City"), max_length=250)
    user_type = models.CharField(max_length=2, choices=USER_TYPE_CHOICES, default=USER_TYPE_CHOICES[0][0])
    cs_description = models.TextField(_("Description"))
    cs_extra_description = models.TextField(_("Description"))


    #page 5
    meeting_room_number = models.PositiveIntegerField(
        choices=[(i, i) for i in range(MAX_MEETING_ROOM_NUMBER)],
    )
    rent_nm = models.BooleanField(default=False, help_text="Do you allow non-members to rent your meeting rooms?")
    hire_nm = models.BooleanField(
        default=False, help_text="Do you allow non-members to hire your coworking space for bigger events?")


    #size 7
    desk = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(MAX_DESC_COUNT)])

    private_office = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=[(i, i) for i in range(PRIVATE_OFFICES)])
    total_capacity = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], choices=TOTAL_CAPACITY)
    size_of_your_coworking_space = models.PositiveIntegerField(choices=SIZE_OF_YOUR_COWORKING_SPACE_CHOISES, default=0)

    amenities = models.ManyToManyField(Amenities, blank=True, related_name="amenities")

    #8 photos
    # cover_img =

    class Meta:
        verbose_name = _('Place')
        verbose_name_plural = _('Places')


    def __str__(self):
        return self.space_name

