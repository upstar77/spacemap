# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-03 21:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0032_auto_20171103_1854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='place.Category'),
            preserve_default=False,
        ),
    ]
