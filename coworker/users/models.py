from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django.utils.functional import cached_property


@python_2_unicode_compatible
class User(AbstractUser):

    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    avatar = models.ImageField(_(u"User image"), upload_to='profile_pictures', blank=True, null=True)
    birth_day = models.DateField(_("Birth day"), null=True, blank=True)
    aboutme = models.TextField(_("About me"), null=True, blank=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})

    @cached_property
    def avatar_url(self):
        if self.avatar:
            return self.avatar.url

    def full_name(self):
        return "{} {}".format(self.first_name.capitalize(), self.last_name.capitalize())
