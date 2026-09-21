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


class Attendance(models.Model):
    STATUS_CHOICES = (
        ('Present', 'Present'),
        ('Absent', 'Absent'),
        ('Late', 'Late'),
    )
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='attendances')
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Present')
    remarks = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.student.username} - {self.date} [{self.status}]"


class LogbookEntry(models.Model):
    STATUS_CHOICES = (
        ('Up to date', 'Up to date'),
        ('Missing entries', 'Missing entries'),
        ('Pending Review', 'Pending Review'),
    )
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='logbooks')
    week_number = models.IntegerField()
    tasks_performed = models.TextField()
    challenges = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending Review')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Week {self.week_number} - {self.student.username} ({self.status})"