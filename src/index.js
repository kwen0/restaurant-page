import {loadHeader, loadContent, loadFooter} from './initialpage';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

loadHeader();
loadContent();
loadFooter();

export function buttons() {
    const menuBtn = document.querySelector(".menuBtn")
    const reserveBtn = document.querySelector(".reserveBtn")

    menuBtn.addEventListener('click', () => loadMenu());
    reserveBtn.addEventListener('click', () => loadContact());
}

buttons();
