import sys
import csv

import re
from bs4 import BeautifulSoup
import requests


def get_sitemap(url):
    get_url = requests.get(url)

    if get_url.status_code == 200:
        return get_url.text
    else:
        print('Unable to fetch sitemap: %s.' % url)


def process_sitemap(s):
    soup = BeautifulSoup(s)
    result = []

    for loc in soup.findAll('loc'):
        result.append(loc.text)

    return result


def is_sub_sitemap(s):
    if s.endswith('.xml') and 'sitemap' in s:
        return True
    else:
        return False


def parse_sitemap(s):
    sitemap = process_sitemap(s)
    result = []

    while sitemap:
        candidate = sitemap.pop()

        if is_sub_sitemap(candidate):
            sub_sitemap = get_sitemap(candidate)
            for i in process_sitemap(sub_sitemap):
                sitemap.append(i)
        else:
            result.append(candidate)

    return result


def save_to_csv(file_path, urls):
    writer = csv.writer(open(file_path, 'w'))
    writer.writerow(["ID", "URL", "PARSED"])
    for id, url in enumerate(urls):
        writer.writerow([id+1, url, 0])



def filter_places(url):
    DOMAIN_NAME = "https://www.coworker.com"
    pattern = r'%s/(?P<country>[\w-]+)/(?P<city>[\w-]+)/(?P<place>[\w-]+)' % DOMAIN_NAME
    m = re.search(pattern, url)
    # if "poltava" in url.lower():
        # re.search(r'(?P<country>[\w-]+)/(?P<city>[\w-]+)/(?P<place>[\w-]+)$', url)
        # print()
    if m and "review-" not in url and "/lab/" not in url:
        return True


def fetch_only_spaces(path_to_file):
    URL_POSITION = 1
    places = []
    with open(path_to_file) as f:
        spamreader = csv.reader(f)
        only_urls = [row[URL_POSITION] for row in spamreader if "review-" not in row[URL_POSITION]]
        skip_list = []
        for url in only_urls:
            for u in only_urls:
                if not filter_places(url) or not filter_places(u):
                    continue
                if url in u and len(url) < len(u):
                    skip_list.append(url)
                    continue

        for url in only_urls:
            if filter_places(url) and url not in skip_list:
                places.append(url)
    print(len(places))
    return places


if __name__ == '__main__':
    # sitemap_url = sys.argv[1]
    # main(sitemap_url)
    # get_sitemap(sitemap_url)
    # fetch_only_spaces(sys.argv[1])
    save_to_csv("/Users/admin/projects/coworker/coworker/main/management/commands/resources/places.csv", fetch_only_spaces("/Users/admin/projects/coworker/coworker/main/management/commands/resources/urls_all.csv"))
    print("Done")
