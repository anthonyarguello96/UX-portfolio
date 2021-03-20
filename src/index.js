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
