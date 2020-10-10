from rest_framework import serializers
from .models import Progress

class ProgressSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Progress
        fields = ('id', 'node', 'tree')