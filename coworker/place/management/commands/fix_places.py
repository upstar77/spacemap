import csv
import os
from django.core.management.base import BaseCommand
from coworker.place.models import Place
from coworker.users.models import User
import string

import random

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


class Command(BaseCommand):
    help = 'Fix place without user'

    # def add_arguments(self, parser):
    #     parser.add_argument('--json-file', dest='json-file', type=str)

    def handle(self, *args, **options):
        for place in Place.objects.all():
            if place.user_set.all().count() < 1:
                user = User.objects.create_user(id_generator(16))
                user.user_type = User.SPACES
                user.place = place
                user.save()
