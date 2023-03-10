# Generated by Django 4.1.4 on 2023-01-01 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('findin', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100)),
                ('birthday', models.DateField(max_length=20)),
                ('useraddress', models.CharField(max_length=200)),
                ('phonenumber', models.CharField(max_length=10)),
            ],
        ),
    ]
