from django.contrib import admin
from .models import Album, Song
from django.utils.html import mark_safe
# Register your models here.

@admin.register(Album)
class CustomAlbumAdmin(admin.ModelAdmin):
    pass

@admin.register(Song)
class CustomSongAdmin(admin.ModelAdmin):
    pass
