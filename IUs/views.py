from django.shortcuts import render
from django.http import JsonResponse
import json
from django.forms.models import model_to_dict
from .models import *
from django.db.models import Count


def index(request, pk):
    song = Song.objects.get(pk=pk)
    print(song, song.pk)
    print(song.album.image)
    return render(request, 'index.html', context = {'song':song, 'album_image':song.album.image})
