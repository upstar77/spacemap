# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-07 18:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0007_event_investors'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='title',
            new_name='name',
        ),
    ]
