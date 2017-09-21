import json

from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.http import HttpResponse


class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)

    def ajax_response(self, request, response, redirect_to=None, form=None,
                      data=None):
        resp = {}
        status = response.status_code

        if redirect_to:
            status = 200
            resp['location'] = redirect_to
        if form:
            resp['form'] = self.ajax_response_form(form)
            if hasattr(response, 'render'):
                response.render()
            resp['html'] = response.content.decode('utf8')
            if data is not None:
                resp['data'] = data
        return HttpResponse(json.dumps(resp),
                            status=status,
                            content_type='application/json')


class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def is_open_for_signup(self, request, sociallogin):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)
