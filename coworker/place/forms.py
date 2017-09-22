import re
import pickle

from django.core import serializers
from django import forms
from .models import Place, Amenities, Photos
from django.forms import extras
from django.utils.translation import ugettext_lazy as _
from .fields import JsonHoursChoiceField
from coworker.cities.models import City


class PlaceFirstForm(forms.ModelForm):
    city = forms.ModelChoiceField(
        queryset=City.objects.filter(level_type__in=[City.CITY, City.PROVINCE]),
        empty_label=None
    )

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ["space_name", "city", "user_type"]

    def save(self, commit=False):
        obj = super(PlaceFirstForm, self).save(commit=False)
        self.request.session['current_created_place'] = pickle.dumps(obj)
        self.request.session.save()
        return obj


class PlaceDescriptionForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ["space_name", "cs_description"]

    def save(self, commit=False):
        obj = super(PlaceDescriptionForm, self).save(commit=False)
        self.request.session['current_created_place'] = pickle.dumps(obj)
        self.request.session.save()
        return obj


class PlaceContactDetailsForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ['ls_email', 'tel', 'website_url', 'facebook', 'twitter', 'instagram', 'notification_email']

    def save(self, commit=False):
        obj = super(PlaceContactDetailsForm, self).save(commit=False)
        obj.id = 999
        self.request.session['current_created_place'] = pickle.dumps(obj)
        self.request.session.save()
        return obj


class PlaceAmenitiesForm(forms.ModelForm):
    common_amenities = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple,
        queryset=Amenities.objects.common())
    additional_amenities = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple,
        queryset=Amenities.objects.addition())

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)
        self.fields['common_amenities'].choices = [
            (e.pk, e.name) for e in Amenities.objects.common().only('pk', 'name')]
        self.fields['additional_amenities'].choices = [
            (e.pk, e.name) for e in Amenities.objects.addition().only('pk', 'name')]
        if kwargs.get('instance'):
            self.fields['common_amenities'].initial = [
                e.pk for e in kwargs['instance'].amenities.common().only('pk')]
            self.fields['additional_amenities'].initial = [
                e.pk for e in kwargs['instance'].amenities.addition().only('pk')]

    def clean_common_amenities(self):

        print(self.cleaned_data)

    def clean(self):
        cleaned_data = super(PlaceAmenitiesForm, self).clean()
        print(cleaned_data)
        print(self.data)
    #     common_amenities = self.cleaned_data['common_amenities']
    #     additional_amenities = self.cleaned_data['additional_amenities']
    #     amenities = common_amenities+additional_amenities
    #
    #     if len(amenities) < 1:
    #         raise forms.ValidationError(_(u'Select at least one amenities'))

    def save(self, commit=False):
        obj = super(PlaceAmenitiesForm, self).save(commit=False)
        self.request.session['current_created_place'] = pickle.dumps(obj)
        self.request.session.save()
        return obj

    class Meta:
        model = Place
        fields = ['amenities', 'common_amenities', 'additional_amenities']


class JsonMixinValidate:
    def get_arrays_fields(self, data):
        d = {}
        for k, v in data.items():
            if "[" in k and "]" in k:
                parsed = self.parse_arr(k)
                item = d.setdefault(parsed["name"], {})
                item2 = item.setdefault(parsed["index"], {})
                if parsed.get("type"):
                    item2[parsed["type"]] = v
                else:
                    item2 = v
        return d

    def parse_arr(self, s):
        m = re.search(r"(?P<name>\w*)\[(?P<index>\d+?)\]\[(?P<type>.*)\]", s)

        if not m:
            m = re.search(r"(?P<name>\w*)\[(?P<index>\d+?)\]", s)
            if not m:
                import pdb; pdb.set_trace()
        return m.groupdict()





class PlaceForm(JsonMixinValidate, forms.ModelForm):
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
        d2 = self.get_arrays_fields(self.data)
        # self.cleaned_data["sat_open"]
        return d2

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)



    # def clean(self):
    #     super(PlaceForm, self).clean()
    #     return

    # def save(self, *args, **kwargs):
    #     return super(ProfileForm, self).save(*args, **kwargs)


class PlacePhotoForm(forms.ModelForm):
    class Meta:
        model = Photos
        fields = ['file', 'is_header_image']

    def clean(self):
        if self.data.get("xview"):
            del self.errors['file']
            self.cleaned_data['file'] = self.files['img']
            self.cleaned_data["is_header_image"] = True

    # def clean(self):
    #     if self.data.get("xview"):
    #         self.file = self.files
    #         self.cleaned_data["is_header_image"] = True


