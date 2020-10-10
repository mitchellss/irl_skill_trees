from django.db import models

class SkillTree(models.Model):
    tree_name = models.CharField(max_length=100)

    def __str__(self):
        return self.tree_name

class SkillNode(models.Model):
    tree = models.ForeignKey(SkillTree, on_delete=models.CASCADE)
    node_id = models.CharField(max_length=100)
    link_id = models.CharField(max_length=100)
    node_url = models.URLField(default='#')
    description_title = models.CharField(max_length=100)
    description = models.TextField()
    disabled = models.BooleanField()

    

