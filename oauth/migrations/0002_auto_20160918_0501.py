# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-18 05:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('oauth', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='user',
        ),
        migrations.AddField(
            model_name='customuser',
            name='user_name',
            field=models.CharField(default='', max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='calendar_cred',
            field=models.CharField(default='', max_length=1000, unique=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='spotify_cred',
            field=models.CharField(default='', max_length=1000, unique=True),
        ),
    ]