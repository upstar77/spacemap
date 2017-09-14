from django import forms
from datetime import datetime
from django.utils.translation import ugettext_lazy as _


def generate_time_range():
    HOURS_CHOISE = []
    for hr in range(0, 24):
        for min in range(0, 60, 30):
            HOURS_CHOISE.append(("%s_%s" % (hr, min), datetime(2012, 1, 1, hr, min, 0).strftime("%I:%M %p")))
    return HOURS_CHOISE


class JsonHoursChoiceField(forms.ChoiceField):
    def __init__(self, *args, addition=False, **kwargs):
        super().__init__(*args, **kwargs)
        self.choices = generate_time_range()
        if addition:
            self.choices.insert(_("24 Hours"))
            self.choices.insert(_("Closed"))
