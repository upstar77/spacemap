# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-18 21:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0009_auto_20171118_2134'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='user_type',
        ),
    ]
