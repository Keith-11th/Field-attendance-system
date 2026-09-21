from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AttendanceViewSet, LogbookEntryViewSet

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'attendance', AttendanceViewSet, basename='attendance')
router.register(r'logbooks', LogbookEntryViewSet, basename='logbook')

urlpatterns = [
    # Include all router-generated URLs under the api/ accounts path
    path('', include(router.urls)),
]