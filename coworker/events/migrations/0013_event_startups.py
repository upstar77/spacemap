# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-07 20:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0012_startup'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='startups',
            field=models.ManyToManyField(blank=True, to='events.Startup'),
        ),
    ]
