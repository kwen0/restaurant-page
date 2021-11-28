import {loadContent} from './initialpage.js'
import {buttons} from './index.js'

export default function loadContact() {
    const leftSide = document.querySelector(".left")
    const rightSide = document.querySelector(".right")
    leftSide.remove();
    rightSide.remove();

    const content = document.querySelector(".content")

    let contact = document.createElement('div')
    contact.classList.add('contact')
    let contactInfo = document.createElement('div')
    contactInfo.innerHTML = 
    "for reservations: <br /> \
    (123)-456-7891 <br /> \
    <br />for large party and special event requests: <br />\
    hello@softeeh.com <br /> \
    <br />We can't wait to wine and dine you."
    contact.appendChild(contactInfo)

    content.appendChild(contact)
    let backBtn = document.createElement("p")
    backBtn.textContent = "home"
    backBtn.classList.add("backBtn")
    contact.appendChild(backBtn)
    backBtn.addEventListener('click', () => {content.remove(), loadContent(), buttons()})
    
}