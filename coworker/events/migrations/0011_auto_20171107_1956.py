# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-07 19:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0010_auto_20171107_1828'),
    ]

    operations = [
        migrations.AddField(
            model_name='investor',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='investor',
            name='position',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
