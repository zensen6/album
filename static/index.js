const homeimgcontainer = document.querySelector('.homeimgcontainer');
const body = document.querySelector('body');
const dotbox = document.querySelector('.dotbox');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const header = document.querySelector('.header');

console.log(12);

var albumname = [ 'Modern Times Epilogue', 'Modern Times', '스무살의 재수학원' ];
var albumimage = [
	'media/albums/스크린샷_2021-03-16_오전_1.07.08.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.51.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.04.png'
];

var background = [
	'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(199,199,199,1) 51%, rgba(157,196,255,1) 68%, rgba(217,183,255,1) 80%, rgba(214,151,255,1) 95%, rgba(255,255,255,1) 100%)',
	'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(242,223,193,1) 51%, rgba(255,209,139,1) 68%, rgba(244,153,19,1) 80%, rgba(250,158,21,1) 95%, rgba(236,184,107,1) 100%)',
	'linear-gradient(150deg, rgba(254,255,136,1) 0%, rgba(255,255,255,1) 20%, rgba(196,251,114,1) 51%, rgba(74,255,186,1) 68%, rgba(67,255,132,1) 80%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)'
];

var dotarray = [ 0, 1, 2 ];

var index = 0;
var img_ = document.createElement('img');
img_.src = albumimage[index];
img_.style.width = '300px';
img_.style.height = '300px';
body.style.background = background[0];
for (var i = 0; i < dotarray.length; i++) {
	dotarray[i] = document.createElement('div');
	dotarray[i].classList.add('dot');
	dotbox.appendChild(dotarray[i]);
}

homeimgcontainer.appendChild(img_);

function changebackground() {
	body.style.background = background[index];
}

function colordot(previndex, index) {
	const dots = document.querySelectorAll('.dot');
	console.log(dots[previndex]);
	dots[previndex].style.backgroundColor = 'white';
	console.log('ASda' + dots[previndex]);
	dots[index].style.backgroundColor = 'gainsboro';
}

header.style.background =
	'linear-gradient(0deg, rgba(149,149,149,1) 3%, rgba(153,153,153,1) 3%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)';

function sliding(n) {
	var previndex = index;
	index = (index + n < 0 ? albumimage.length - 1 : index + n) % albumimage.length;
	var img = document.createElement('img');
	img.src = albumimage[index];
	img.style.width = '300px';
	img.style.height = '300px';
	img.classList.add('fade');
	homeimgcontainer.appendChild(img);
	changebackground();
	colordot(previndex, index);
	header.style.background =
		'linear-gradient(0deg, rgba(149,149,149,1) 3%, rgba(153,153,153,1) 3%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)';
}

homeimgcontainer.addEventListener('click', function(e) {
	e.preventDefault();
	homeimgcontainer.removeChild(e.target);
	sliding(1);
});

nextBtn.addEventListener('click', function(e) {
	e.preventDefault();
	var img = document.querySelector('img');
	img.parentNode.removeChild(img);
	sliding(1);
});

prevBtn.addEventListener('click', function(e) {
	e.preventDefault();
	var img = document.querySelector('img');
	img.parentNode.removeChild(img);
	sliding(-1);
});
