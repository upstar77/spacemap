import requests
from bs4 import BeautifulSoup

import re
from config import logger
from utils import parse_table
from browser import Browser


class CoworkerParse:
    def __init__(self, url, browser=None):
        if not browser:
            browser = Browser()
        self.browser = browser
        self.endpoint = url
        self.items = []

    def save(self, name, value):
        self.items[name] = value

    def run(self):
        """
          Call methods which has parse_ prefix
          Position is important !!!
        """
        res = self.browser.get(self.endpoint)

        if res.status_code != 200:
            logger.info("")

        self.main_soup = BeautifulSoup(res.text, "html.parser")

        methods = [getattr(self, m) for m in dir(self) if m.startswith("parse_")]
        for method in methods:
            try:
                method()
            except Exception as e:
                logger.exception(e)

        return self.items

    def parse_main_info(self):
        coworking_name = self.main_soup.select_one(".kohub_space_headings h2").text
        is_verified = self.main_soup.select_one(".verified_icon_rs").text
        p_description = self.main_soup.select_one("#p_description").text
        joined_time = self.main_soup.select_one(".date_joined_rs").text


        #location
        address = self.main_soup.select_one(".muchroom_mail").text
        google_map_url = self.main_soup.select_one(".spaces_map_outer iframe")["src"]

        return {
            "coworking_name": coworking_name,
            "is_verified": is_verified,
            "p_description": p_description,
            "joined_time": joined_time,
            "address": address,
            "google_map_url": google_map_url,
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
            res["tab_id"] = data

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
            #         title = review_container.select_one(".reviews_right-text-outer-main h4").text,
            #         desctiption = review_container.select_one(".reviews_txt-new-bottom01 p").text
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
        opening_hours = member_access_content.select_one("h5").text#mon-fri


if __name__ == "__main__":
    cow = CoworkerParse("https://www.coworker.com/united-states/colorado/montrose/proximity-space")
    cow.test()
