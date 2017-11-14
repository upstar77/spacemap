from django.apps import AppConfig


class EventsConfig(AppConfig):
    name = 'coworker.events'
    def ready(self):
        import events.signals  # noqa
