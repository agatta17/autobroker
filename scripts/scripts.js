const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
burger.onclick = function() {
  menu.classList.add('visible');
};
 close.onclick = function() {
  menu.classList.remove('visible');
};

for (let node of document.getElementsByClassName('slider__circle-left')) {
  node.addEventListener('click', sliderLeft);
  node.addEventListener('click', circleActive);
}

for (let node of document.getElementsByClassName('slider__circle-right')) {
  node.addEventListener('click', sliderRight);
  node.addEventListener('click', circleActive);
}

let left = 0;
const bar = document.getElementById('bar');
const card = document.getElementById('card');

function sliderLeft() {
	left = left-card.offsetWidth-20;
	if (left<-card.offsetWidth*2-40) {
		left = 0;
	}
	bar.style.transform = 'translateX(' + left + 'px)';
}

function sliderRight() {
	left = left+card.offsetWidth+20;
	if (left>card.offsetWidth) {
		left = -card.offsetWidth*2-40;
	}
	bar.style.transform = 'translateX(' + left + 'px)';
}

function circleActive() {
	for (let node of document.getElementsByClassName('slider__circle_active')) {
	  node.classList.remove('slider__circle_active');
  }
	this.classList.add('slider__circle_active');
}

sliderLeft();