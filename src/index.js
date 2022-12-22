import './style.css';
import Background from './header-background.jpg';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const pageContent = document.querySelector('#content');

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', renderHome);
menu.addEventListener('click', renderMenu);
contact.addEventListener('click', renderContact);

renderHome();
