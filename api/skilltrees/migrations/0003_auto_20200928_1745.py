# Generated by Django 3.0.6 on 2020-09-28 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('skilltrees', '0002_auto_20200928_1729'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skilltree',
            old_name='description_title',
            new_name='tree_name',
        ),
        migrations.RemoveField(
            model_name='skilltree',
            name='description',
        ),
        migrations.RemoveField(
            model_name='skilltree',
            name='disabled',
        ),
        migrations.RemoveField(
            model_name='skilltree',
            name='link_id',
        ),
        migrations.RemoveField(
            model_name='skilltree',
            name='node_id',
        ),
        migrations.RemoveField(
            model_name='skilltree',
            name='node_url',
        ),
        migrations.AlterField(
            model_name='skilltree',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='SkillNode',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('node_id', models.CharField(max_length=100)),
                ('link_id', models.CharField(max_length=100)),
                ('node_url', models.URLField(default='#')),
                ('description_title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('disabled', models.BooleanField()),
                ('tree', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='skilltrees.SkillTree')),
            ],
        ),
    ]
