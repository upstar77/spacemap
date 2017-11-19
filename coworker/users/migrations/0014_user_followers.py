# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-18 23:13
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_user_place'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='followers',
            field=models.ManyToManyField(related_name='follow', to=settings.AUTH_USER_MODEL),
        ),
    ]
