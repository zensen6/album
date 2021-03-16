const homeimgcontainer = document.querySelector('.homeimgcontainer');
const homecontainer = document.querySelector('.homecontainer');
const dotbox = document.querySelector('.dotbox');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

var albumname = [ 'Modern Times Epilogue', 'Modern Times', '스무살의 재수학원' ];
var albumimage = [
	'media/albums/스크린샷_2021-03-16_오전_1.07.08.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.51.png',
	'media/albums/스크린샷_2021-03-16_오전_1.06.04.png'
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

function sliding(n) {
	index = (index + n < 0 ? albumimage.length - 1 : index + n) % albumimage.length;
	var img = document.createElement('img');
	img.src = albumimage[index];
	img.style.width = '300px';
	img.style.height = '300px';
	img.classList.add('fade');
	homeimgcontainer.appendChild(img);
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
