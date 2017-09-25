from bs4 import BeautifulSoup

from .config import logger
from .browser import Browser
from .utils import parse_table
from urllib.parse import urlparse, parse_qs



class BaseParse:

    def __init__(self, url, browser=None):
        if not browser:
            browser = Browser()
        self.browser = browser
        self.endpoint = url
        self.items = {}

    def save(self, name, value):
        self.items[name] = value

    def run(self):
        """
          Call methods which has parse_ prefix
          Position is important !!!
        """
        res = self.browser.get(self.endpoint)

        if res.status_code != 200:
            logger.info("%s", self.endpoint)

        self.main_soup = BeautifulSoup(res.text, "html.parser")

        methods = [getattr(self, m) for m in dir(self) if m.startswith("parse_")]

        for method in methods:
            try:
                res = method()
                if isinstance(res, dict):
                    self.items.update(res)
            except Exception as e:
                print("error")
                logger.exception(e)

        return self.items


    def text(self, obj):
        try:
            return obj.text
        except Exception as e:
            pass
