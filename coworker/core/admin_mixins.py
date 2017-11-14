from location_field.forms import plain
from django import forms


class PointsModelMixin(forms.ModelForm):

    points = plain.PlainLocationField(based_fields=['location'], zoom=7)

    class Meta:
        model = Event
        exclude = ['lng', 'lat']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['points'].initial = "%s,%s" % (self.instance.lat, self.instance.lng)

    def save(self, commit=True):
        obj = super().save(commit=False)
        try:
            obj.lat, obj.lng = self.cleaned_data["points"].split(',')
        except ValueError:
            pass
        if commit:
            obj.save()
        return obj
