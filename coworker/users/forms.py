from django import forms
from django.contrib.auth import get_user_model
from django.forms import extras
from django.utils.translation import ugettext_lazy as _
from .widgets import IndastrySelect2, TagSelec2


class ProfileForm(forms.ModelForm):
    birth_day = forms.DateField(
        label=_('Birth day'),
        widget=extras.SelectDateWidget(years=range(2014, 1900, -1)),
        required=False
    )
    registration = forms.DateField(
        label=_('Registration'),
        widget=extras.SelectDateWidget(years=range(2014, 1900, -1)),
        required=False
    )

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)
        tags_filed = self.fields['tags']
        self.fields['tags'].widget.attrs["value"] = ",".join([item.name for item in tags_filed.queryset])
        self.fields['user_type'].empty_label = None

    class Meta:
        widgets = {
            'tags': TagSelec2,
            'industries': IndastrySelect2,
        }
        model = get_user_model()
        fields = [
            'user_type',
            'birth_day',
            'aboutme',
            'business_summarize',
            'registration',
            'business_name',
            'tags',
            'industries',
        ]

    def save(self, *args, **kwargs):
        return super(ProfileForm, self).save(*args, **kwargs)
