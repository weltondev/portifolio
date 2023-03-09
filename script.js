const linksMenu = document.querySelectorAll('.menu a[href^="#"]');

// function distanceFromTop(element) {
//   const id = element.getAttribute("href");
//   return document.querySelector(id).offsetTop;
// }

// function scrollToSection(event) {
//   event.preventDefault();
//   const element = event.target;
//   const id = element.getAttribute('href');
//   const section = document.querySelector(id);
//   console.log(section);
// }

// linksMenu.forEach((link)=>{
//   link.addEventListener('click', scrollToSection)
// })
setInterval(()=> {
  let dom = document.querySelector('.home-texto-autor');
  dom.classList.toggle('animate__animated');
  dom.classList.toggle('animate__backInLeft')
}, 5000);