from .models import Progress
from .serializers import ProgressSerializer
from rest_framework import viewsets

class ProgressViewset(viewsets.GenericViewSet):

    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
