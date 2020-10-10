from django.db import models

class SkillTree(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)

    def __str__(self):
        return self.name
