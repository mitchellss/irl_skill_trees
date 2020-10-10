from rest_framework import serializers
from skilltrees.models import SkillTree, SkillNode

class SkillTreeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = SkillTree
        fields = ('id', 'tree_name')

class SkillNodeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = SkillNode
        fields = ('id', 'tree', 'node_id', 'link_id', 'node_url', 'description_title', 'description', 'disabled')