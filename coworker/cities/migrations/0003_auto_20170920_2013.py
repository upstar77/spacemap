# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-20 20:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0002_auto_20170920_2004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cities.City'),
        ),
    ]
