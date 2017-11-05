from django.test import TestCase

class BaseTest(TestCase):
    def test_create_user(self):
        from django.contrib.gis.geoip2 import GeoIP2
        GeoIP2("127.0.0.1")
