# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-07 18:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0034_auto_20171105_1122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='place.Category'),
            preserve_default=False,
        ),
    ]
