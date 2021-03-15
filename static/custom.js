// Play Music
function playMusic(songId) {
	$('audio').each(function(index, audio) {
		audio.pause();
		$('.playButton').html('<i class="fa fa-play"></i> Play');
		$('.pauseButton').hide();
		$('.playButton').show();
	});
	var audio = document.getElementById('song' + songId);
	audio.play();
	$('#pauseButton' + songId).show();
	$('#playButton' + songId).hide();
}
// Pause Music
function pauseMusic(songId) {
	$('audio').each(function(index, audio) {
		audio.pause();
		$('.playButton').html('<i class="fa fa-play"></i> Play');
		$('.playButton').show();
	});
	var audio = document.getElementById('song' + songId);
	audio.pause();
	$('#pauseButton' + songId).hide();
	$('#playButton' + songId).show();
}
