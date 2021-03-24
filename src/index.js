import * as lib from './functions.js';
import './main.css';
import 'boxicons'
const parallax = document.getElementsByClassName('skills__img');
const spread = [...parallax];



//Diplays nav-menu
lib.displayMenu('nav-toggle', 'nav-menu');

//Hide navigration menu after click
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(x => x.addEventListener('click', lib.linkAction))


//scroll sections active link
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

//GOTTA MOVE THIS TO THE FUCNTIONS FILE
function scrollActive(){
  //GET VIEPORT VERTICAL POSITION
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    let sectionId= current.getAttribute('id')

    // console.log(sectionId);

    if(scrollY>sectionTop && scrollY <= sectionTop +sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
    // console.log(sectionTop);
  })
}


//Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})


//scroll home
sr.reveal('.home__title',{})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin: 'right', delay: 400})


//scroll about
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession',{delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__question', {delay: 600})
sr.reveal('.about__social-icon',{delay: 700, interval: 200})


//skills scroll
sr.reveal('.subtitle', {})
sr.reveal('.skills__name', {distance: '40px', delay:50, interval: 100 })
sr.reveal('.skills__img', {delay: 400})
sr.reveal('.skills__main-title', {delay: 500})
sr.reveal('.skills__text', {delay: 600})


//education scroll
sr.reveal('.education__box', {delay: 700, interval: 200})


//scroll portfolio
sr.reveal('.portfolio__img', {interval: 200})


//scroll contact
sr.reveal('.contact__subtitle', {})
sr.reveal('contact__subtitle', {interval: 200})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})
