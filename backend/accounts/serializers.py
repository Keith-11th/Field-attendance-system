from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Attendance, LogbookEntry

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']

    def create(self, validated_data):
        role = validated_data.pop('role', 'student')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        # Automatically create the UserProfile with the specified role
        UserProfile.objects.create(user=user, role=role)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'role']


class AttendanceSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)

    class Meta:
        model = Attendance
        fields = ['id', 'student', 'student_name', 'date', 'status', 'remarks']
        read_only_fields = ['date']


class LogbookEntrySerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)

    class Meta:
        model = LogbookEntry
        fields = ['id', 'student', 'student_name', 'week_number', 'tasks_performed', 'challenges', 'status', 'created_at']
        read_only_fields = ['created_at']