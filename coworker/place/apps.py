from django.apps import AppConfig


class PlaceConfig(AppConfig):
    name = 'coworker.place'

    def ready(self):
        import coworker.place.signals  # noqa
