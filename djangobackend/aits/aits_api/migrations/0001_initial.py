# Generated by Django 5.1.7 on 2025-03-30 12:54

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('deptID', models.AutoField(primary_key=True, serialize=False)),
                ('deptName', models.CharField(max_length=100)),
                ('college', models.CharField(choices=[('COCIS', 'College of Computing and Information Sciences'), ('CEDAT', 'College of Engineering, Design, Art and Technology')], max_length=10)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('unique_number', models.CharField(max_length=20, unique=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('role', models.CharField(choices=[('S', 'Student'), ('L', 'Lecturer'), ('A', 'Admin'), ('R', 'Registrar')], default='S', max_length=1)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('issueID', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(choices=[('MM', 'Missing Marks'), ('MC', 'Missing Coursework'), ('WM', 'Wrong Marks'), ('MP', 'Paper Missed')], max_length=2)),
                ('description', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('CREATED', 'CREATED'), ('PENDING', 'PENDING'), ('OPEN', 'OPEN'), ('RESOLVED', 'RESOLVED'), ('CLOSED', 'CLOSED')], default='CREATED', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assigned_to', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='assigned_issues', to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aits_api.department')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='issues', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('notID', models.AutoField(primary_key=True, serialize=False)),
                ('message', models.CharField(max_length=255)),
                ('state', models.CharField(choices=[('READ', 'READ'), ('UNREAD', 'UNREAD')], default='UNREAD', max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('issue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to='aits_api.issue')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
