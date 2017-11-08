# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-08 12:58
from __future__ import unicode_literals

import django.contrib.postgres.fields.hstore
from django.db import migrations, models
import django.db.models.deletion
import django_prices.models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0005_auto_20171108_1253'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='name')),
                ('description', models.TextField(verbose_name='description')),
                ('price', django_prices.models.PriceField(currency='USD', decimal_places=2, max_digits=12, verbose_name='price')),
                ('available_on', models.DateField(blank=True, null=True, verbose_name='available on')),
                ('attributes', django.contrib.postgres.fields.hstore.HStoreField(default={}, verbose_name='attributes')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='updated at')),
                ('is_featured', models.BooleanField(default=False, verbose_name='is featured')),
                ('categories', models.ManyToManyField(related_name='servicess', to='services.Category', verbose_name='categories')),
                ('service_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='services.ServiceClass', verbose_name='services class')),
            ],
            options={
                'verbose_name': 'service',
                'verbose_name_plural': 'services',
            },
        ),
    ]