from skilltrees.models import SkillTree, SkillNode
from skilltrees.serializers import SkillTreeSerializer, SkillNodeSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class SkillTreeViewset(viewsets.ModelViewSet):
    queryset = SkillTree.objects.all()
    serializer_class = SkillTreeSerializer

class SkillNodeViewset(viewsets.ModelViewSet):
    queryset = SkillNode.objects.all()
    serializer_class = SkillNodeSerializer