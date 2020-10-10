from rest_framework import serializers
from .models import Node

class NodeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Node
        fields = ('id', 'tree', 'url', 'title', 'desc', 'parent')