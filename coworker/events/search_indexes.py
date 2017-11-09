# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function, unicode_literals)

from elasticsearch_dsl import (
    DocType,
    Date,
    Keyword,
    Text,
    Boolean,
    Integer
)


class EventIndex(DocType):
    """
    BlogIndex.init(using=es_client)
    """
    pk = Integer()
    name = Text()
    start_time = Date()
    description = Text()

    class Meta:
        index = 'event'
