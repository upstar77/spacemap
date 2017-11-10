# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)

from config.es_client import es_client
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver

from .serializers import Event, ElasticEventSerializer


@receiver(pre_save, sender=Event, dispatch_uid="update_record")
def update_es_record(sender, instance, **kwargs):
    obj = ElasticEventSerializer(instance)
    obj.save(using=es_client)


@receiver(post_delete, sender=Event, dispatch_uid="delete_record")
def delete_es_record(sender, instance, *args, **kwargs):
    obj = ElasticEventSerializer(instance)
    obj.delete(using=es_client, ignore=404)
