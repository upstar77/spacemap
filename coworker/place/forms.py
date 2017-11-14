import re
import pickle

from django.core import serializers
from django import forms
from .models import Place, MeetingRoom, Amenities, Photos, MembershipDeskPrice
from django.forms import extras
from django.utils.translation import ugettext_lazy as _
from .fields import JsonHoursChoiceField, generate_time_range
from coworker.cities.models import City


YES_NO_CHOICES = (
    (True, _('allow')),
    (False, _('Not allow'))
)


class CurrentCreatedPlace:
    place = None
    amenities = []
    meeting_rooms = []
    hot_desks_membership_prices = []
    photos = []
    step = 0


class PlaceFirstForm(forms.ModelForm):
    city = forms.ModelChoiceField(
        queryset=City.objects.all(),
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
        obj.id = 999999999
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
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
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
        current_created_place = pickle.loads(self.request.session['current_created_place'])
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
        current_created_place = pickle.loads(self.request.session['current_created_place'])
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
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddMeetingRoomsForm(forms.ModelForm):
    meeting_room_number = forms.ChoiceField(
        label=_('Conference room number'),
        required=False,
        choices=[(i, i) for i in range(500)])

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ['rent_nm', 'hire_nm']
        widgets = {
            'rent_nm': forms.RadioSelect(choices=YES_NO_CHOICES),
            'hire_nm': forms.RadioSelect(choices=YES_NO_CHOICES),
        }

    def save(self, commit=False):
        obj = super(PlaceAddMeetingRoomsForm, self).save(commit=False)
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddMeetingRoomInlineForm(forms.ModelForm):

    class Meta:
        model = MeetingRoom
        fields = ['room_info', 'mr_capacity']


class PlaceAddOpeningHoursForm(forms.ModelForm):
    monday_friday_from = forms.ChoiceField(label=_('Monday - Friday'), choices=generate_time_range(empty_label='-----'))
    monday_friday_to = forms.ChoiceField(label=_('To'), choices=generate_time_range(empty_label='-----'))
    friday_combine_hours = forms.BooleanField(required=False, label=_('Other time periods'), initial=True)
    different_hours = forms.BooleanField(required=False, label=_('Other time periods'), initial=False)

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = ["monday_from",
                  "monday_to",
                  "tuesday_from",
                  "tuesday_to",
                  "wednesday_from",
                  "wednesday_to",
                  "thursday_from",
                  "thursday_to",
                  "friday_from",
                  "friday_to",
                  "saturday_from",
                  "saturday_to",
                  "sunday_from",
                  "sunday_to",
                  "member_accs"]

    def clean(self):
        friday_combine_hours = self.cleaned_data.get('friday_combine_hours', False)
        day_of_weeks_fields = [
            "monday_from",
            "monday_to",
            "tuesday_from",
            "tuesday_to",
            "wednesday_from",
            "wednesday_to",
            "thursday_from",
            "thursday_to",
            "friday_from",
            "friday_to"]

        if friday_combine_hours:
            for day_of_week in day_of_weeks_fields:
                if self.errors.get(day_of_week):
                    del self.errors[day_of_week]
        else:
            del self.errors['monday_friday_from']
            del self.errors['monday_friday_to']

        return self.cleaned_data

    def save(self, commit=False):
        obj = super(PlaceAddOpeningHoursForm, self).save(commit=False)
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


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
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddPaymentMethodsForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)
        self.fields['opay'].widget = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])
        self.fields['accs'].widget = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])
        self.fields['apps'].widget = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])

    class Meta:
        model = Place
        fields = ["opay", "accs", "apps", "deposit"]

    def save(self, commit=False):
        obj = super(PlaceAddPaymentMethodsForm, self).save(commit=False)
        current_created_place = pickle.loads(self.request.session['current_created_place'])
        current_created_place.place = obj
        self.request.session['current_created_place'] = pickle.dumps(current_created_place)
        self.request.session.save()
        return obj


class PlaceAddMembershipDescPriceForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)

    class Meta:
        model = Place
        fields = []


class PlaceAddMembershipHotDeskPriceInlineForm(forms.ModelForm):
    hot_desks = forms.BooleanField(widget=forms.HiddenInput(), initial=True)

    class Meta:
        model = MembershipDeskPrice
        fields = ['duration', 'seating_price', 'member_accs']


class PlaceAddMarketingForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        if "request" in kwargs:
            self.request = kwargs.pop("request")
        super().__init__(*args, **kwargs)
        self.fields['enable_reservation'].widget = forms.RadioSelect(choices=[(True, 'Yes'), (False, 'No')])

    class Meta:
        model = Place
        fields = ["book_tour", "free_day_pass", "enable_reservation"]

    def save(self, commit=False):
        obj = super(PlaceAddMarketingForm, self).save(commit=False)
        current_created_place = pickle.loads(self.request.session['current_created_place'])
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
        fields = ["image", 'is_header_image']

    def clean(self):
        if self.data.get("xview"):
            del self.errors['image']
            self.cleaned_data["image"] = self.files['img']
            self.cleaned_data["is_header_image"] = True

        try:
            if self.files.get("file"):
                self.cleaned_data["image"] = self.files['file']
                del self.errors['image']
        except Exception as e:
            pass


