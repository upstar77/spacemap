import os
import json

from django.core.management.base import BaseCommand, CommandError
from coworker.cities.models import City


class Command(BaseCommand):
    help = 'Export cities from json to database'

    def add_arguments(self, parser):
        parser.add_argument('--json-file', dest='json-file', type=str)

    def handle(self, *args, **options):
        print(options['json-file'])
        with open(options['json-file'], encoding='utf-8') as json_file:
            cities = json.load(json_file)["city"]
            for city in cities:
                print(len(city['zipcode']))
                print(len(city['citycode']))
                obj = City.objects.create(
                    id=city['id'],
                    name=city['name'],
                    short_name=city['shortname'],
                    level_type=city['leveltype'],
                    city_code=city['citycode'],
                    lng=city['lng'],
                    lat=city['lat'],
                    pinyin=city['pinyin'],
                    zip_code=city['zipcode'],
                    parent=City.objects.filter(id=city['parentid']).first(),
                    status=city['status'])
                obj.save()
            self.stdout.write(self.style.SUCCESS('Successfully added %s cities' % len(cities)))
