from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django.utils.functional import cached_property
from django.contrib.staticfiles.templatetags.staticfiles import static



class UserTags(models.Model):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.name


class Indastry(models.Model):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class User(AbstractUser):

    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    profile_image = models.ImageField(_(u"User image"), upload_to='profile_pictures', blank=True, null=True)
    birth_day = models.DateField(_("Birth day"), null=True, blank=True)
    aboutme = models.TextField(_("About me"), null=True, blank=True)
    business_name = models.TextField(_("Business name"), null=True, blank=True)
    registration = models.DateField(_("Registration"), null=True, blank=True)
    business_summarize = models.TextField(_("Business summarize "), null=True, blank=True)
    industries = models.ManyToManyField(Indastry, blank=True, related_name="user")
    tags = models.ManyToManyField(UserTags, blank=True, related_name="user")

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})

    def get_tags(self):
        return ", ".join(list(self.tags.values_list("name",  flat=True)))

    def get_industries(self):
        return ", ".join(list(self.industries.values_list("name",  flat=True)))

    @cached_property
    def profile_image_url(self):
        if self.profile_image:
            return self.profile_image.url
        else:
            return static('img/no-user-image.gif')

    def full_name(self):
        return "{} {}".format(self.first_name.capitalize(), self.last_name.capitalize())

