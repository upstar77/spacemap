# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import datetime
from email.utils import formatdate
import time
import logging
from django.conf import settings
from django.contrib.gis import geoip2
from django.core.exceptions import MiddlewareNotUsed
from django.contrib.gis.geoip2 import GeoIP2
from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from django.utils import translation


logger = logging.getLogger(__name__)



def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class DetectChineUser(MiddlewareMixin):
    def process_request(self, request):
        try:
            client_ip = get_client_ip(request)
            client_ip = "91.219.223.199"
            # client_ip = "163.177.112.32"
            g = GeoIP2()
            g_client = g.country(client_ip)
            request.is_chine = False
            if g_client.get("country_code", "") == "CN":
                request.is_chine = True
        except Exception as e:
            logger.exception(e)


class DomainLocaleMiddleware(MiddlewareMixin):
    """
    Set language regarding of domain
    """
    def process_request(self, request):
        if 'HTTP_ACCEPT_LANGUAGE' in request.META:
            # Totally ignore the browser settings...
            del request.META['HTTP_ACCEPT_LANGUAGE']

        current_domain = request.META['HTTP_HOST']
        lang_code = settings.LANGUAGES_DOMAINS.get(current_domain)

        if lang_code:
            translation.activate(lang_code)
            request.LANGUAGE_CODE = lang_code
