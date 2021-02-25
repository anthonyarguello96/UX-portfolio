import * as lib from './functions.js';
import './main.css';
import 'boxicons'


//Diplays nav-menu
lib.displayMenu('nav-toggle', 'nav-menu');

//Hide navigration menu after click
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(x => x.addEventListener('click', lib.linkAction))
