from django.db import models

class SkillTree(models.Model):
    tree_name = models.CharField(max_length=50)
    tree_desc = models.CharField(max_length=200)

    def __str__(self):
        return self.tree_name
