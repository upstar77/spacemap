from django import forms

from .models import Place, Amenities
from django.forms import extras
from django.utils.translation import ugettext_lazy as _

# forms.ModelMultipleChoiceField


class PlaceForm(forms.ModelForm):
    amenities_common = forms.ModelMultipleChoiceField(
        queryset=Amenities.objects.common(), required=False, widget=forms.CheckboxSelectMultiple)

    amenities_addition = forms.ModelMultipleChoiceField(
        queryset=Amenities.objects.addition(), required=False, widget=forms.CheckboxSelectMultiple)
    class Meta:
        model = Place
        fields = '__all__'

    # def clean(self):
    #     super(PlaceForm, self).clean()
    #     return

    # def save(self, *args, **kwargs):
    #     return super(ProfileForm, self).save(*args, **kwargs)
