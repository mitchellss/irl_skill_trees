from rest_framework import serializers
from .models import SkillTree

class SkillTreeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = SkillTree
        fields = ('id', 'tree_name', 'tree_desc')