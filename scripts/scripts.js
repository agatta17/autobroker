 const burger = document.getElementById('burger');
 const menu = document.getElementById('menu');
 const close = document.getElementById('close');
burger.onclick = function() {
  menu.classList.add('visible');
};
 close.onclick = function() {
  menu.classList.remove('visible');
};