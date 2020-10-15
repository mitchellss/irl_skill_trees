from .models import SkillTree
from .serializers import SkillTreeSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class SkillTreeViewset(viewsets.ModelViewSet):

    serializer_class = SkillTreeSerializer

    def get_queryset(self):
        queryset = SkillTree.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name=name)
        return queryset