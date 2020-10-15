from .models import Node
from skilltree.models import SkillTree
from .serializers import NodeSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class NodeViewset(viewsets.ModelViewSet):

    serializer_class = NodeSerializer

    def get_queryset(self):
        queryset = Node.objects.all()
        tree_id = self.request.query_params.get('tree', None)
        if tree_id is not None:
            if SkillTree.objects.filter(id=tree_id).exists():
                tree = SkillTree.objects.get(id=tree_id)
                queryset = queryset.filter(tree=tree)
        return queryset