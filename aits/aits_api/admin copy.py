from django.contrib import admin
from .models_old import *

# Register your models here.
admin.site.register([
    roles,
    users,
    issues,
    notifications,
    departments,
])
#superuser name: postgres
#password: postgres