from django.db import models
from skilltree.models import SkillTree

class Node(models.Model):
    tree = models.ForeignKey(SkillTree, on_delete=models.CASCADE)
    url = models.URLField(default='#')
    title = models.CharField(max_length=50)
    desc = models.CharField(max_length=1000)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.title} ({self.id})"