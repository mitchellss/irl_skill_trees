from skilltree.viewsets import SkillTreeViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('skilltree', SkillTreeViewset, basename='skilltree')