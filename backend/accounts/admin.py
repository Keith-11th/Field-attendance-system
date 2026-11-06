from django.contrib import admin

from .models import Attendance, LogbookEntry, UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'supervisor')
    list_filter = ('role',)


admin.site.register(Attendance)
admin.site.register(LogbookEntry)