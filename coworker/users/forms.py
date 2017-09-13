from django import forms
from django.contrib.auth import get_user_model
from django.forms import extras
from django.utils.translation import ugettext_lazy as _


class ProfileForm(forms.ModelForm):
    birth_day = forms.DateField(
        label=_('Birth day'),
        widget=extras.SelectDateWidget(years=range(2014, 1900, -1))
    )

    class Meta:
        model = get_user_model()
        fields = ['birth_day', 'birth_day', 'aboutme', 'avatar']

    def clean(self):
        super(ProfileForm, self).clean()
        return

    def save(self, *args, **kwargs):
        return super(ProfileForm, self).save(*args, **kwargs)
