from django.shortcuts import render
from django.http import JsonResponse
import json
from django.forms.models import model_to_dict
from .models import *
from django.db.models import Count


def index(request):
    selection = request.GET.get('q');
    if selection is not None:
        print(selection)
        album = Album.objects.get(name=selection)
        print(album.song_set.all())
        return render(request, 'index.html', context = {'album':album, 'album_image':album.image, 'songs':album.song_set.all()})
    print(selection)
    song = Song.objects.get(pk=3)
    #print(song, song.pk)
    #print(song.album.image)
    return render(request, 'index.html', context = {'album':song.album, 'album_image':song.album.image, 'songs':album.song_set.all()})


def home(request):
    album = Album.objects.all()
    return render(request, 'home.html', context={'albums':album})