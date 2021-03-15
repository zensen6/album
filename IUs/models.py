from django.db import models

class Album(models.Model):
    name=models.CharField(max_length=100)
    image=models.ImageField(upload_to='albums/',null=True)
    add_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

class Song(models.Model):
    album=models.ForeignKey(Album,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=100)
    song_src=models.FileField(upload_to='songs/',null=True)
    duration=models.DurationField()
    add_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title