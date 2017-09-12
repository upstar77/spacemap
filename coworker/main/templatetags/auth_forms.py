from django import template
# from allauth.account.forms import SignupForm
from coworker.main.forms import SignupForm
from coworker.main.forms import LoginForm


register = template.Library()


@register.inclusion_tag("elements/sign-up.html", takes_context=True)
def sign_up_form(context, *args, **kwargs):
    request = context["request"]

    form = SignupForm()
    return {
        "request": request,
        "form": form,
    }


@register.inclusion_tag("elements/login.html", takes_context=True)
def login_form(context, *args, **kwargs):
    request = context["request"]
    return {
        "request": request,
        "form": LoginForm(),
    }
