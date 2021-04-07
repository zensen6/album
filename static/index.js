const homeimgcontainer = document.querySelector('.homeimgcontainer');
const body = document.querySelector('body');
const dotbox = document.querySelector('.dotbox');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
//const header = document.querySelector('.header');
console.log(123123);
var albumname = [ 'Modern Times Epilogue', 'Modern Times', '스무살의 봄', 'eight', 'bbibbi' ];
var albumimage = [
	'media/albums/1.png',
	'media/albums/2.png',
	'media/albums/3.png',
	'media/albums/5.jpeg',
	'media/albums/4.png'
];

var background = [
	'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(199,199,199,1) 51%, rgba(157,196,255,1) 68%, rgba(217,183,255,1) 80%, rgba(214,151,255,1) 95%, rgba(255,255,255,1) 100%)',
	'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(242,223,193,1) 51%, rgba(255,209,139,1) 68%, rgba(244,153,19,1) 80%, rgba(250,158,21,1) 95%, rgba(236,184,107,1) 100%)',
	'linear-gradient(150deg, rgba(254,255,136,1) 0%, rgba(255,255,255,1) 20%, rgba(196,251,114,1) 51%, rgba(74,255,186,1) 68%, rgba(67,255,132,1) 80%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)',
	'linear-gradient(150deg, rgba(255,186,61,1) 0%, rgba(255,224,53,1) 20%, rgba(255,247,136,1) 51%, rgba(170,212,255,1) 68%, rgba(56,182,255,1) 80%, rgba(12,174,255,1) 95%, rgba(46,220,255,1) 100%)',
	'linear-gradient(150deg, rgba(255,137,61,1) 0%, rgba(255,200,53,1) 13%, rgba(248,233,79,1) 24%, rgba(199,136,255,1) 51%, rgba(255,170,240,1) 68%, rgba(255,56,222,1) 80%, rgba(255,12,186,1) 95%, rgba(181,46,255,1) 100%)'
];

var dotarray = [ 0, 1, 2, 3, 4 ];
var link = [
	'/index?q=Modern Times',
	'/index?q=Modern Times Epilogue',
	'/index?q=스무살의 봄',
	'/index?q=bbibbi',
	'/index?q=eight'
];
var index = 0;
var click = false;
var starta = document.createElement('a');
starta.href = link[0];
var img_ = document.createElement('img');
img_.src = albumimage[index];
img_.style.width = '300px';
img_.style.height = '300px';

img_.addEventListener('click', function(e) {
	location.href = link[index];
});

body.style.background = background[0];
for (var i = 0; i < dotarray.length; i++) {
	dotarray[i] = document.createElement('div');
	dotarray[i].classList.add('dot');
	dotbox.appendChild(dotarray[i]);
}

starta.appendChild(img_);
homeimgcontainer.appendChild(starta);

//

function makedisk() {
	var timer = setTimeout(function() {
		var disk = document.createElement('div');
		var diskimg = document.createElement('img');
		diskimg.src = '/media/pictures/disk.png';
		diskimg.style.width = '250px';
		diskimg.style.height = '250px';
		diskimg.style.borderRadius = '50%';
		diskimg.classList.add('diskcontainer');
		disk.appendChild(diskimg);
		homeimgcontainer.appendChild(disk);
		diskExist = true;
	}, 1200);
	return timer;
}
prevBtn.disabled = true;
nextBtn.disabled = true;
setTimeout(function() {
	prevBtn.disabled = false;
	nextBtn.disabled = false;
}, 2500);
var timer;
timer = makedisk();

//
function changebackground() {
	body.style.background = background[index];
}

function colordot(previndex, index) {
	const dots = document.querySelectorAll('.dot');
	dots[previndex].style.backgroundColor = 'white';
	dots[index].style.backgroundColor = 'gainsboro';
}

function sliding(n) {
	timer = makedisk();
	var previndex = index;
	index = (index + n < 0 ? albumimage.length - 1 : index + n) % albumimage.length;
	var img = document.createElement('img');
	img.src = albumimage[index];
	img.style.width = '300px';
	img.style.height = '300px';
	img.classList.add('fade');
	img.href = link[index];
	img.addEventListener('click', function(e) {
		location.href = link[index];
	});
	//
	var a = document.createElement('a');
	a.href = link[index];
	a.appendChild(img);
	homeimgcontainer.appendChild(a);

	changebackground();
	colordot(previndex, index);
}

homeimgcontainer.addEventListener('click', function(e) {
	e.preventDefault();
	//homeimgcontainer.removeChild(e.target);
	//sliding(1);
});

nextBtn.addEventListener('click', function(e) {
	e.preventDefault();
	var a = document.querySelector('a');
	a.parentNode.removeChild(a);

	var diskcontainer = document.querySelector('.diskcontainer');
	diskcontainer.parentNode.removeChild(diskcontainer);

	sliding(1);
});

prevBtn.addEventListener('click', function(e) {
	e.preventDefault();
	var a = document.querySelector('a');
	a.parentNode.removeChild(a);

	var diskcontainer = document.querySelector('.diskcontainer');
	diskcontainer.parentNode.removeChild(diskcontainer);

	sliding(-1);
});

function Btnclick() {
	console.log(11111);
	prevBtn.disabled = true;
	nextBtn.disabled = true;
	setTimeout(function() {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}, 2500);
}
