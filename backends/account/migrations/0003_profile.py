# Generated by Django 3.2 on 2021-04-17 19:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_useraccount_is_admin'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profession', models.CharField(default=' ', max_length=50)),
                ('country', models.CharField(default=' ', max_length=50)),
                ('city', models.CharField(default=' ', max_length=50)),
                ('area', models.CharField(default=' ', max_length=50)),
                ('image', models.ImageField(default='', upload_to='profilepic/images')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
