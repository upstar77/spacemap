# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-23 20:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_auto_20170923_1020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(blank=True, choices=[('so', 'Startup Owners'), ('sm', 'Space Owners')], default=1, max_length=2),
            preserve_default=False,
        ),
    ]