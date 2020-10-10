from .models import Node
from .serializers import NodeSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class NodeViewset(viewsets.GenericViewSet):

    queryset = Node.objects.all()
    serializer_class = NodeSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)