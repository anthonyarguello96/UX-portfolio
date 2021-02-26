import * as lib from './functions.js';
import './main.css';
import 'boxicons'


//Diplays nav-menu
lib.displayMenu('nav-toggle', 'nav-menu');

//Hide navigration menu after click
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(x => x.addEventListener('click', lib.linkAction))


//scroll sections active link
const sections = document.querySelectorAll('section[id]');


const scrollActive = () => {
  const scrollY= window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.OffsetHeight;
    const sectionTop = current.OffsetTop - 50;
    console.log(sectionHeight);
    console.log(sectionTop);
    sectionId = current.getAttriibute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('nav__menu a[href*='+ sectionId+']').classList.add('active')
    }else{
      document.querySelector('.nav__menu a[href*=]'+ sectionId+']').classList.add('active')
    }
  })
}



window.addEventListener('scroll', scrollActive);
