from skilltree.viewsets import SkillTreeViewset
from node.viewsets import NodeViewset
from progress.viewsets import ProgressViewset
from customuser.viewsets import UserViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('skilltree', SkillTreeViewset, basename='skilltree')
router.register('node', NodeViewset, basename='node')
router.register('user', UserViewset, basename='user')
router.register('progress', ProgressViewset, basename='progress')