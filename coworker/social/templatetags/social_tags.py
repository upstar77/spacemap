from django import template
# from allauth.account.forms import SignupForm
from coworker.social.forms import TweetForm
from coworker.place.models import Place
from coworker.users.models import User

register = template.Library()


@register.inclusion_tag('social/tweet_form.html', takes_context=True)
def tweet_form(context, *args, **kwargs):
    request = context["request"]
    form = TweetForm()
    user_place = None
    if request.user.is_authenticated():
        user_place = Place.objects.filter(user=request.user).first()
    return {
        # "request": request,
        "user_place": user_place,
        "form": form,
    }



