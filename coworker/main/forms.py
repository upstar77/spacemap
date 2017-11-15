from django.contrib.auth import get_user_model
from django import forms
from allauth.account.utils import user_username, user_email
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email


class SignupForm(forms.ModelForm):
    class Meta:
        model = get_user_model()
        fields = ['first_name', 'last_name', 'password', 'email']
        widgets = {
            'password': forms.PasswordInput
         }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def clean(self):
        super(SignupForm, self).clean()

        dummy_user = get_user_model()

        user_username(dummy_user, self.cleaned_data.get("username"))
        user_email(dummy_user, self.cleaned_data.get("email"))
        password = self.cleaned_data.get('password')
        self.cleaned_data['password1'] = password
        if password:
            try:
                from allauth.account.adapter import get_adapter
                get_adapter().clean_password(
                    password,
                    user=dummy_user)
            except forms.ValidationError as e:
                self.add_error('password', e)
        return self.cleaned_data

    def save(self, request, **kwargs):
        adapter = get_adapter(request)
        user = adapter.new_user(request)
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        return user


class LoginForm(forms.ModelForm):
    class Meta:
        model = get_user_model()
        fields = ['first_name', 'last_name', 'password', 'email']
