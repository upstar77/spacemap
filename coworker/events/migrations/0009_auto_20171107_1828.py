# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-07 18:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0008_auto_20171107_1825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='investors',
            field=models.ManyToManyField(null=True, to='events.Investor'),
        ),
    ]