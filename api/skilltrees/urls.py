
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/', include('reguser.urls')),
    path('api-token-auth/', views.obtain_auth_token, name='api-token-auth'),
    path('login/', LoginView.as_view(template_name='authenticated_api/templates/registration/login.html'), name='login'),
]