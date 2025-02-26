# Generated by Django 5.1.6 on 2025-02-26 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aits_api', '0005_alter_issues_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issues',
            name='status',
            field=models.CharField(choices=[('Resolved', 'Resolved'), ('Pending', 'Pending'), ('In Progress', 'In Progress')], max_length=100),
        ),
    ]
