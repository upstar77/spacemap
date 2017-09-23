from django_select2.forms import ModelSelect2TagWidget

from .models import UserTags, Indastry


class BaseSelect2TagWidget(ModelSelect2TagWidget):
    search_fields = ["name__icontains"]
    def value_from_datadict(self, data, files, name):
        values = super().value_from_datadict(data, files, name)
        ids = []
        for value in values:
            try:
                pk = int(value)
            except ValueError:
                pk = UserTags.objects.create(name=value).pk
            ids.append(pk)
        return ids


class TagSelec2(BaseSelect2TagWidget):
    queryset = UserTags.objects.all()


class IndastrySelect2(BaseSelect2TagWidget):
    queryset = Indastry.objects.all()
