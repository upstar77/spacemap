from django import forms

from .models import Place, Amenities
from django.forms import extras
from django.utils.translation import ugettext_lazy as _
from .fields import JsonHoursChoiceField


class PlaceFirstForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ["space_name", "country", "city", "user_type"]

    def save(self, commit=False):
        data = self.cleaned_data
        obj = super(PlaceFirstForm, self).save(commit=False)
        self.request.session['firs_form_data'] = data
        self.request.session.save()
        return obj

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)

class PlaceForm(forms.ModelForm):
    amenities_common = forms.ModelMultipleChoiceField(
        queryset=Amenities.objects.common(), required=False, widget=forms.CheckboxSelectMultiple)

    amenities_addition = forms.ModelMultipleChoiceField(
        queryset=Amenities.objects.addition(), required=False, widget=forms.CheckboxSelectMultiple)
    # hours = JsonHoursChoiceField()

    class Meta:
        model = Place
        fields = '__all__'
        # widgets = {
        #     'web_description': forms.widgets.Textarea(attrs={'cols': 40, 'rows': 5}),
        # }

    def clean(self):
        data = self
        for k, v in data.items():
            if "[" in k and "]" in k:
                v.index("[") - 1
                "hours[6][open]"[5-1]
        self.data["hours"]
        super().clean()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)



    # def clean(self):
    #     super(PlaceForm, self).clean()
    #     return

    # def save(self, *args, **kwargs):
    #     return super(ProfileForm, self).save(*args, **kwargs)
