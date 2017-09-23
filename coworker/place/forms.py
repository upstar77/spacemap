import re
import pickle

from django.core import serializers
from django import forms
from .models import Place, MeetingRoom, Amenities, Photos
from django.forms import extras
from django.utils.translation import ugettext_lazy as _
from .fields import JsonHoursChoiceField
from coworker.cities.models import City


class CurrentCreatedPlace:
    place = None
    amenities = []
    meeting_rooms = []
    step = 0


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
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
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
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        current_created_place.step = 1
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
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
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAmenitiesForm(forms.ModelForm):
    common_amenities = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple,
        queryset=Amenities.objects.common(), required=False)
    additional_amenities = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple,
        queryset=Amenities.objects.addition(), required=False)

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)
        self.fields['common_amenities'].choices = [
            (e.pk, e.name) for e in Amenities.objects.common().only('pk', 'name')]
        self.fields['additional_amenities'].choices = [
            (e.pk, e.name) for e in Amenities.objects.addition().only('pk', 'name')]
        self.fields['amenities'].required = False
        if kwargs.get('instance'):
            self.fields['common_amenities'].initial = [
                e.pk for e in kwargs['instance'].amenities.common().only('pk')]
            self.fields['additional_amenities'].initial = [
                e.pk for e in kwargs['instance'].amenities.addition().only('pk')]

    def clean_amenities(self):
        pass

    def clean(self):
        cleaned_data = super(PlaceAmenitiesForm, self).clean()

        common_amenities = self.cleaned_data.get('common_amenities', [])
        additional_amenities = self.cleaned_data.get('additional_amenities', [])
        print(common_amenities)
        cleaned_data['amenities'] = common_amenities | additional_amenities

        if len(cleaned_data['amenities']) < 1:
            raise forms.ValidationError(_(u'Select at least one amenities'))
        self.cleaned_data = cleaned_data

    def save(self, commit=False):
        obj = super(PlaceAmenitiesForm, self).save(commit=False)
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        current_created_place.amenities = self.cleaned_data['amenities']
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj

    class Meta:
        model = Place
        fields = ['amenities',]


class PlaceAddLocationForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ['address',
                  'address_sec',
                  'postal_code',
                  'lng',
                  'lat'
                  ]
        widgets = {
            'lng': forms.HiddenInput(),
            'lat': forms.HiddenInput(),
        }

    def save(self, commit=False):
        obj = super(PlaceAddLocationForm, self).save(commit=False)
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddMeetingRoomsForm(forms.ModelForm):
    meeting_room_number = forms.ChoiceField(
        label=_('会议室编号'),
        required=False,
        choices=[(i, i) for i in range(500)])
    rent_nm = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])
    hire_nm = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ['rent_nm', 'hire_nm']

    def save(self, commit=False):
        obj = super(PlaceAddMeetingRoomsForm, self).save(commit=False)
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddMeetingRoomInlineForm(forms.ModelForm):

    class Meta:
        model = MeetingRoom
        fields = ['room_info', 'mr_capacity']


class PlaceAddSizeForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ["desks", "private_office", "total_capacity", "size_of_your_coworking_space"]

    def save(self, commit=False):
        obj = super(PlaceAddSizeForm, self).save(commit=False)
        current_created_place = CurrentCreatedPlace()
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj



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


