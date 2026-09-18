from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['role']

class RegisterSerializer(serializers.ModelSerializer):
    # We include 'role' here so the frontend can send whether they are a student, lecturer, etc.
    role = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']

    def create(self, validated_data):
        # Extract the role from the data, leaving only user fields
        role = validated_data.pop('role', 'student')
        
        # Create the base Django user and securely hash their password
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        
        # Automatically create their linked UserProfile with the specified role
        UserProfile.objects.create(user=user, role=role)
        
        return user