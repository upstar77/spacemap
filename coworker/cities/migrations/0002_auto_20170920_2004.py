# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-20 20:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='city',
            old_name='parentId',
            new_name='parent',
        ),
    ]
