from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('lecturer', 'Lecturer'),
        ('coordinator', 'Coordinator'),
    )
    # This links our profile directly to Django's built-in User model
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    
    # This stores the specific role
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')

    def __str__(self):
        return f"{self.user.username} - {self.role}"
