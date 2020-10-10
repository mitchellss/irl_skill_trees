from skilltrees.viewsets import SkillTreeViewset, SkillNodeViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('skilltrees', SkillTreeViewset, basename='skilltree')
router.register('nodes', SkillNodeViewset, basename="node")