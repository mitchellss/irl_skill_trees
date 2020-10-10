from django.db import models
from node.models import Node
from customuser.models import User

class Progress(models.Model):
    node = models.ForeignKey(Node, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user} - {self.node}"