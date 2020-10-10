from .models import SkillTree
from .serializers import SkillTreeSerializer
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets

class SkillTreeViewset(viewsets.ModelViewSet):

    queryset = SkillTree.objects.all()
    serializer_class = SkillTreeSerializer