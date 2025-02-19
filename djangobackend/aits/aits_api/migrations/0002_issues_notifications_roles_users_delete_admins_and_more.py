# Generated by Django 5.1.6 on 2025-02-19 22:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aits_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='issues',
            fields=[
                ('issueID', models.IntegerField(primary_key=True, serialize=False)),
                ('issue', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('In Progress', 'In Progress'), ('Resolved', 'Resolved')], max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assigned_to', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='notifications',
            fields=[
                ('notificationID', models.IntegerField(primary_key=True, serialize=False)),
                ('message', models.CharField(max_length=100)),
                ('issueID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aits_api.issues')),
            ],
        ),
        migrations.CreateModel(
            name='roles',
            fields=[
                ('role', models.CharField(max_length=100)),
                ('roleID', models.IntegerField(primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='users',
            fields=[
                ('userID', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('roleID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aits_api.roles')),
            ],
        ),
        migrations.DeleteModel(
            name='admins',
        ),
        migrations.DeleteModel(
            name='lecturer',
        ),
        migrations.DeleteModel(
            name='students',
        ),
        migrations.AddField(
            model_name='notifications',
            name='userID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aits_api.users'),
        ),
        migrations.AddField(
            model_name='issues',
            name='userID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aits_api.users'),
        ),
    ]
