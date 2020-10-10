from .models import SkillTree
from .serializers import SkillTreeSerializer
from rest_framework import viewsets

class SkillTreeViewset(viewsets.ModelViewSet):

    queryset = SkillTree.objects.all()
    serializer_class = SkillTreeSerializer