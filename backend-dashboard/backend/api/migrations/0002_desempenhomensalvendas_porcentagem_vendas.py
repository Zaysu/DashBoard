# Generated by Django 4.2.4 on 2023-11-18 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='desempenhomensalvendas',
            name='porcentagem_vendas',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]
