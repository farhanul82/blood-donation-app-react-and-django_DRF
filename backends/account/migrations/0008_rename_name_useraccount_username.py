# Generated by Django 3.2 on 2021-04-24 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_useraccount_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='name',
            new_name='username',
        ),
    ]