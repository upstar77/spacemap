"""Apps for Zinnia"""
from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class LabConfig(AppConfig):
    """
    Config for Zinnia application.
    """
    name = 'coworker.lab'
    label = 'lab'
    verbose_name = _('Weblog')

    # def ready(self):
    #     from django_comments.moderation import moderator
    #
    #     from coworker.lab.signals import connect_entry_signals
    #     from coworker.lab.signals import connect_discussion_signals
    #     from coworker.lab.moderator import EntryCommentModerator
    #
    #     entry_klass = self.get_model('Entry')
    #     # Register the comment moderator on Entry
    #     moderator.register(entry_klass, EntryCommentModerator)
    #     # Connect the signals
    #     connect_entry_signals()
    #     connect_discussion_signals()
