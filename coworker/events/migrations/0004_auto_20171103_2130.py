# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-03 21:30
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_event_slug'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='latitude',
            new_name='lat',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='longitude',
            new_name='lng',
        ),
    ]