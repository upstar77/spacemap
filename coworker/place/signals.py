# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)


from config.es_client import es_client
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from .models import Place
# from .serializers import Event, ElasticEventSerializer
from coworker.search import index as search_index


@receiver(pre_save, sender=Place, dispatch_uid="update_record")
def update_es_record(sender, instance, **kwargs):
    search_index.insert_or_update_object(instance)


