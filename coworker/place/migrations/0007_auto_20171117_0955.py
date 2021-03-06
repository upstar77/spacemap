# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-17 09:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0006_auto_20171117_0951'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='amenities',
        ),
        migrations.RemoveField(
            model_name='place',
            name='book_tour',
        ),
        migrations.RemoveField(
            model_name='place',
            name='desks',
        ),
        migrations.RemoveField(
            model_name='place',
            name='enable_reservation',
        ),
        migrations.RemoveField(
            model_name='place',
            name='free_day_pass',
        ),
        migrations.RemoveField(
            model_name='place',
            name='hire_nm',
        ),
        migrations.RemoveField(
            model_name='place',
            name='max_people_capacity',
        ),
        migrations.RemoveField(
            model_name='place',
            name='private_office',
        ),
        migrations.RemoveField(
            model_name='place',
            name='rent_nm',
        ),
        migrations.RemoveField(
            model_name='place',
            name='size_of_your_coworking_space',
        ),
        migrations.RemoveField(
            model_name='place',
            name='total_capacity',
        ),
    ]
