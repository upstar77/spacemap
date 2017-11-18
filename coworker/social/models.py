from django.db import models
from django.utils import timezone

from coworker.users.models import User


class Tweet(models.Model):
    user = models.ForeignKey(User, related_name='tweets')
    created = models.DateTimeField(default=timezone.now)
    body = models.TextField()


