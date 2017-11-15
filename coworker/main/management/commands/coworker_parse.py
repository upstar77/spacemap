import requests
from urllib.parse import urlparse, parse_qs
from bs4 import BeautifulSoup
import re

from .base_parse import BaseParse
from .utils import parse_table
from .config import logger
from django.conf import settings


class CoworkerParse(BaseParse):


    def parse_main_info(self):
        coworking_name= self.text(self.main_soup.select_one(".kohub_space_headings h2"))
        is_verified= self.text(self.main_soup.select_one(".verified_icon_rs"))
        p_description= self.text(self.main_soup.select_one("#p_description"))
        joined_time= self.text(self.main_soup.select_one(".date_joined_rs"))
        bg_image = None
        try:
            bg_image = re.search(r"url\('(.*?)\?", self.main_soup.select_one(".banner_space_outr_mob")["style"]).group(1)
            re.search(r"url\('(.*?)\?")
        #     'background-image:url(\\'https://coworker.imgix.net/pictures/C709/edit/beijing-coworking.jpeg?mark=/template/img/wm_icon.png&markscale=2&markalign=center,middle\\');'
        except Exception as e:
            pass

        #location
        address= self.text(self.main_soup.select_one(".muchroom_mail"))
        google_map_url = self.main_soup.select_one(".spaces_map_outer iframe")["src"]
        lat, lng = None, None

        location_info = self.main_soup.select('.breadcrumb_outer li p')

        contenent= self.text(location_info[1])
        country= self.text(location_info[2])
        city= self.text(location_info[3])

        try:
            lat, lng = parse_qs(urlparse(google_map_url).query)["q"][0].split(",")
        except Exception as e:
            logger.exception(e)

        return {
            "space_name": coworking_name,
            "is_verified": is_verified,
            "cs_description": p_description,
            "joined_time": joined_time,
            "address": address,
            "google_map_url": google_map_url,
            "lat": lat,
            "lng": lng,
            "contenent": contenent,
            "country": country,
            "city": city,
            "bg_image": bg_image,
        }


    def parse_amenities(self):
        amenities = []
        for amenity in self.main_soup.select(".amenities li"):
            amenities.append(amenity.text)

        return {
            "amenities": amenities,
        }

    def parse_photos(self):
        images = []
        for img in self.main_soup.select("#photos img"):
            images.append(img["src"])
        return {
            "images": images
        }

    def parse_membership_fees(self):
        res = {}

        membership_fees = self.main_soup.select_one(".tab-content")
        tabs_ids = ["hot_desk", "dedicated_desk", "private_office"]
        for tab_id in tabs_ids:
            table = self.main_soup.select_one("#%s table" % tab_id)
            data = parse_table(table)
            res[tab_id] = data

        return res

    def parse_reviews(self):
        #reviews
        res = []
        for review_container in self.main_soup.select_one("#reviews > div"):
            # user_img =
            # user_name =
            #
            #
            # res.append(
            #     {
            #         "user_img": review_container.select_one("img")["src"],
            #         "user_name": review_container.select_one(".reivew_new_outer > span").text,
            #         title= self.text(review_container.select_one(".reviews_right-text-outer-main h4")),
            #         desctiption= self.text(review_container.select_one(".reviews_txt-new-bottom01 p"))
            #     }
            # )
            pass
        return {

        }
    def working_time(self):
        #working time
        # self.main_soup.select_one(".member_access_head").text
        #member_access_head
        member_access_content = self.main_soup.select_one(".member_access_content")
        # member_access_content.select_one("h4")
        html_data = member_access_content.contents #need to save this is html
        opening_hours= self.text(member_access_content.select_one("h5"))#mon-fri


if __name__ == "__main__":
    logger.info("parser")
    cow = CoworkerParse("https://www.coworker.com/united-states/colorado/montrose/proximity-space")

    res = cow.run()
    #
    print(res)
