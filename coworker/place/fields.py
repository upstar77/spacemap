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

# https://docs.djangoproject.com/en/dev/ref/forms/validation/#cleaning-and-validating-fields-that-depend-on-each-other
from django import forms
from django.core.validators import validate_email

class MultiEmailField(forms.Field):
    def to_python(self, value):
        """Normalize data to a list of strings."""
        # Return an empty list if no input was given.
        if not value:
            return []
        return value.split(',')

    def validate(self, value):
        """Check if value consists only of valid emails."""
        # Use the parent's handling of required fields, etc.
        super().validate(value)
        for email in value:
            validate_email(email)
