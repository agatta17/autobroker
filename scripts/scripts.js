const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
burger.onclick = function() {
  menu.classList.add('visible');
};
 close.onclick = function() {
  menu.classList.remove('visible');
};

for (let node of document.getElementsByClassName('slider__circle')) {
  node.addEventListener('click', circleActive);
}

const bar = document.getElementById('bar');
const card = document.getElementById('card');
const circleFirst = document.getElementById('circleFirst');
const circleSecond = document.getElementById('circleSecond');
const circleThird = document.getElementById('circleThird');

circleFirst.onclick = function() {
	bar.style.transform = 'translateX(' + 0 + 'px)';
}

circleSecond.onclick = openCircleSecond;

circleThird.onclick = function() {
	bar.style.transform = 'translateX(' + (-2*card.offsetWidth-20) + 'px)';
}

function circleActive() {
	for (let node of document.getElementsByClassName('slider__circle_active')) {
	  node.classList.remove('slider__circle_active');
  }
	this.classList.add('slider__circle_active');
}

function openCircleSecond() {
	bar.style.transform = 'translateX(' + (-card.offsetWidth-20) + 'px)';
}

openCircleSecond();