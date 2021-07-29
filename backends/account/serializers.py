from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email','first_name', 'last_name', 'password')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", 'first_name', 'last_name', 'email',)

        extra_kwargs = {'password': {'write_only': True, 'required': True}}
        depth=1

    # @property
    # def profile(self):
    #     return self.profile_set.all()
