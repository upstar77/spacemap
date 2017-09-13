from django import forms

from .models import Place
from django.forms import extras
from django.utils.translation import ugettext_lazy as _


class PlaceForm(forms.ModelForm):

    class Meta:
        model = Place
        fields = '__all__'

    def clean(self):
        super(PlaceForm, self).clean()
        return

    # def save(self, *args, **kwargs):
    #     return super(ProfileForm, self).save(*args, **kwargs)
