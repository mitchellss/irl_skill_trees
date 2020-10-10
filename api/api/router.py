from skilltree.viewsets import SkillTreeViewset
from node.viewsets import NodeViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('skilltree', SkillTreeViewset, basename='skilltree')
router.register('node', NodeViewset, basename='node')