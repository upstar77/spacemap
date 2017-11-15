import csv
import os

from django.contrib.gis.geos import fromstr
from django.core.management.base import BaseCommand
from .coworker_parse import CoworkerParse
from .location_parse import LocationParse
from coworker.place.models import Place, Photos
from coworker.cities.models import City, Country
from urllib.parse import urlparse, parse_qs
import requests
from django.core.files import File  # you need this somewhere
import urllib.request
from django.core import files
from io import BytesIO
import requests
from django.conf import settings



class Command(BaseCommand):
    help = 'Export cities from json to database'

    # def add_arguments(self, parser):
    #     parser.add_argument('--json-file', dest='json-file', type=str)

    def handle(self, *args, **options):
        with open(os.path.join(str(settings.ROOT_DIR), "coworker/main/management/commands/resources/cine.txt")) as urls_file:
            # reader = csv.reader(urls_file, delimiter=' ', quotechar='|')
            for row in urls_file.read().splitlines():
                self.parse_place(row)
                # print(row)
                # self.parse_location(row)


    def fetch_img(self, obj, image_url):

        url = image_url
        resp = requests.get(url)
        if resp.status_code != requests.codes.ok:
            pass
        fp = BytesIO()
        fp.write(resp.content)
        file_name = url.split("/")[-1]  # There's probably a better way of doing this but this is just a quick example
        obj.image.save(file_name, files.File(fp))


    def parse_location(self, url):
        # url = "https://www.coworker.com/china"
        # url = "https://www.coworker.com/china/beijing"
        # url = "https://www.coworker.com/spain/"
        cow = LocationParse(url)
        # cow = LocationParse("https://www.coworker.com/china/beijing")
        # cow = LocationParse("https://www.coworker.com/hong-kong")
        res = cow.run()
        print(res)

        url_path_parts = urlparse(url).path.strip("/").split("/")

        if len(url_path_parts) == 1:
            contenent = Contenent.objects.get_or_create(name=res["contenent"])
            country = Country.objects.get_or_create(name=res["country"], contenent=contenent[0], defaults={
                "desctiption": res["description"],

            })
            self.fetch_img(country[0], res["bg_image"])
            # city = CityOrigin.objects.get_or_create(name=res["city"], country=country[0])

        else:

            contenent = Contenent.objects.get(name=res["contenent"])
            country = Country.objects.get(name=res["country"])

            city = CityOrigin.objects.get_or_create(name=res["name"], country=country, defaults={
                 "slug": url_path_parts[1],
                "description": res["description"],
                "short_name": res["short_name"][-2:]
            })

            self.fetch_img(city[0], res["bg_image"])


    def parse_place(self, url):
        cow = CoworkerParse(url)
        res = cow.run()
        # res = {'amenities': ['Library', 'Podcasting Room ', 'Skype Room', 'Free Coffee / Tea', 'Free Drinking Water', 'Kitchen', '24hr member access', 'Free parking on premise', 'Wheelchair Accessibility', 'Events and / or workshops', 'Lounge / Chill-out Area', 'Computers (Macs)', 'Computers (PCs)', 'Dual / Single Monitors', 'Photocopier', 'Printer', 'Scanner', 'Sound Recording Equipment', 'Video Recording Equipment', 'Ergonomic Chairs', 'Standing Desks', 'Table Football / Foosball'], 'space_name': 'Proximity Space', 'is_verified': 'Verified', 'cs_description': 'A membership based coworking environment with a communal setting, Proximity Space offers diverse professional independents from freelancers to techies a dynamic space to work, connect and create in.\n\nDrop in with the Proximity Space daily rates or commit to a monthly membership for additional access perks. General amenities made available include blazing fast internet, complimentary coffee, kitchen usage, bookable conference rooms, shared office supplies and equipment plus surrounding amenities in a Downtown location.\n\nCreate valuable connections through engaging in collaborative opportunities with the Proximity Space community. There’s substantial growth as you exchange and learn new skills, expertise as well as resources.\n', 'joined_time': 'Joined July 2016', 'address': ' Address 210 E Main St, Montrose, United States', 'google_map_url': 'https://maps.google.com/maps?q=38.4780749,-107.878127&z=14&output=embed&iwloc=1', 'lat': '38.4780749', 'lng': '-107.878127', 'contenent': 'North America', 'country': 'United States', 'city': 'Montrose', 'hot_desk': [['1', '1 Day', 'USD 20.00', '-', 'Enquire'], ['1', '1 Week', 'USD 50.00', '-', 'Enquire'], ['1', '1 Month', 'USD 149.00', '-', 'Enquire']], 'dedicated_desk': [['Proximity Space has not added details about their Dedicated desks yet']], 'private_office': [['Proximity Space has not added details about their Private Office yet']], 'images': ['https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/1.jpeg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/2.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/3.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/4.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/5.jpeg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/6.jpeg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/7.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/8.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/9.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/10.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/11.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://coworker.imgix.net/photos/united-states/colorado/montrose/proximity-space/12.jpg?w=600&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle']}
        url_path_parts = urlparse(url).path.strip("/").split("/")
        # contenent = Contenent.objects.get(name=res["contenent"])
        country = Country.objects.get(name=res["country"])
        city = City.objects.get(name=res["city"], country=country)
        place = Place.objects.create(
            space_name=res["space_name"],
            cs_description=res["cs_description"],
            address=res["address"],
            lat_lng=fromstr("POINT(%s %s)" % (res["lng"], res["lat"])),
            desks=1,
            private_office=1,
            total_capacity=1,
            city=city,
            slug=url_path_parts[-1],
        )


        for img in res["images"]:
            img_obj = Photos.objects.create(place=place, is_header_image=False)

            self.fetch_img(img_obj, img)

        if res["bg_image"]:
            img_obj = Photos.objects.create(place=place, is_header_image=True)
            self.fetch_img(img_obj, res["bg_image"])
