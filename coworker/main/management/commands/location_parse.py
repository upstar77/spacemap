from bs4 import BeautifulSoup

from .base_parse import BaseParse
from .config import logger
from .browser import Browser
from .utils import parse_table
import re

class LocationParse(BaseParse):

    def parse_main_info(self):
        res = {}

        res["name"] = self.main_soup.select_one("h2 span").text
        res["description"] = self.main_soup.select_one(".currentTab p").text

        location_info = self.main_soup.select('.breadcrumb_outer li p')

        try:
            contenent = location_info[1].text
            country = location_info[2].text
            city = location_info[3].text
        except Exception as e:
            try:
                contenent = location_info[1].text
                country = location_info[2].text
                city = location_info[2].text
            except Exception as e:
                pass
        res["contenent"] = contenent
        res["country"] = country
        res["city"] = city

        try:
            res["bg_image"] = re.search(r"url\('(.*?)\?", self.main_soup.select_one(".city_main_outr")["style"]).group(1)
            re.search(r"url\('(.*?)\?")
        #     'background-image:url(\\'https://coworker.imgix.net/pictures/C709/edit/beijing-coworking.jpeg?mark=/template/img/wm_icon.png&markscale=2&markalign=center,middle\\');'
        except Exception as e:
            pass

        try:
            res["short_name"] = self.main_soup.select_one(".flag")["class"][1]
        except Exception as e:
            pass
        return res

