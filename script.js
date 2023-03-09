const btnMenu = document.querySelector('#btn-mobile');

function toggleMenu() {
  nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

setInterval(()=> {
  let dom = document.querySelector('.home-texto-autor');
  dom.classList.toggle('animate__animated');
  dom.classList.toggle('animate__backInLeft')
}, 5000);