const homeimgcontainer = document.querySelector('.homeimgcontainer');
const body = document.querySelector('body');
const dotbox = document.querySelector('.dotbox');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const header = document.querySelector('.header');

var albumname = [ 'Modern Times Epilogue', 'Modern Times', '스무살의 재수학원' ];
var albumimage = [
	'media/albums/스크린샷_2021-03-16_오전_1.07.08.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.51.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.04.png'
];

var background = [
	'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
	'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,232,253,1) 50%, rgba(69,148,252,1) 100%)',
	'linear-gradient(90deg, rgba(63,180,58,1) 0%, rgba(253,252,29,1) 50%, rgba(252,187,69,1) 100%)'
];

var dotarray = [ 0, 1, 2 ];

var index = 0;
var img_ = document.createElement('img');
img_.src = albumimage[index];
img_.style.width = '300px';
img_.style.height = '300px';
console.log(img_);
console.log(homeimgcontainer.childNodes.length);

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
	console.log(dotbox.children);
	dotbox.children[previndex].backgroundColor = 'white';
	dotbox.children[index].backgroundColor = 'gray';
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
