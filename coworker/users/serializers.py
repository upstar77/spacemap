from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    industries = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'birth_day',
            'aboutme',
            'business_summarize',
            'registration',
            'business_name',
            'tags',
            'industries',
        )

    def get_tags(self, obj):
        return obj.get_tags()

    def get_industries(self, obj):
        return obj.get_industries()
