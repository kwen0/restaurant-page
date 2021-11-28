import {loadContent} from './initialpage.js'
import {buttons} from './index.js'

export default function loadMenu() {
    const leftSide = document.querySelector(".left")
    const rightSide = document.querySelector(".right")
    leftSide.remove();
    rightSide.remove();

    const content = document.querySelector(".content")

    let menu = document.createElement("div")
    menu.classList.add('menu')
    let menuTitle = document.createElement('div')
    menuTitle.textContent = "menu"
    menuTitle.classList.add("menuTitle")
    let musubi = document.createElement('div')
    musubi.classList.add("menuTitle")
    musubi.innerHTML = "musubi"
    let musubiItems = document.createElement('div')
    musubiItems.innerHTML = "popular Hawaiian snack made with \
    rice and ingredients wrapped in a sheet of nori \
    seaweed<br />\
    $7 ea<br />\
    <br /> SPAM - <i>classic</i><br /> \
    spicy SPAM - <i>pickled jalapeno, soy mayo</i><br /> \
    pork jowl - <i>scallion and ginger puree</i><br /> \
    spicy tuna tataki - <i>yuzu kosho, chili, sesame oil</i><br /> \
    Japanese scallop - <i>nori mayo, lemon</i><br /> \
    galbi - <i>braised short rib, kimchi</i><br /> \
    shiitake mushroom (v) - <i>kombu, ginger</i><br /> \
    salmon tartare - <i>tobiko mayo</i>"
    let apps = document.createElement('div')
    apps.textContent = "apps & sides"
    apps.classList.add("menuTitle")
    let appsItems = document.createElement('div')
    appsItems.innerHTML = "shrimp chips - <i>made with dried scallop, \
    shrimp, lobster stock</i> $8 <br /> \
    cuttlefish skewers - <i>shiitake mushroom, Thai basil pesto</i> $12<br /> \
    tuna belly misoyaki - <i>miso marinade, pickles</i> $14<br /> \
    coconut shrimp - <i>blue shrimps, mango-chili dip</i> $12<br /> \
    sauteed bok choy - <i>mushroom soy</i> $8<br /> \
    kimchi - <i>traditional napa cabbage</i> $6"
    let mains = document.createElement('div')
    mains.textContent = "mains"
    mains.classList.add("menuTitle")
    let mainItems = document.createElement('div')
    mainItems.innerHTML = 
    "grilled chicken teriyaki bowl - <i>asian greens, sesame, rice</i> $15 <br /> \
    kimchi fried rice - <i>SPAM, fried egg, rice</i> $15<br /> \
    mushroom risotto - <i>parmigiano-reggiano</i> $24<br /> \
    lamb ravioli - <i>cumin, szechaun and black pepper</i> $22 <br /> \
    garlic shrimp tagliatelle - <i>garlic and butter, Manila clams, aonori</i> $24" 
    let desserts = document.createElement('div')
    desserts.textContent = "desserts"
    desserts.classList.add("menuTitle")
    let dessertItems = document.createElement('div')
    dessertItems.innerHTML = 
    "chocolate macademia nut brownie $9<br /> \
    chocolate haupia sundae $5<br /> \
    black sesame cheesecake $9<br /> \
    bruleed hawaiian pineapple $10<br /> \
    scoop of ice cream - <i> coconut, passionfruit, or pineapple</i> $5"
    let backBtn = document.createElement("p")
    backBtn.textContent = "back"
    backBtn.classList.add("backBtn")
    backBtn.addEventListener('click', () => {content.remove(), loadContent(), buttons()})

    menu.appendChild(menuTitle)
    menu.appendChild(musubi)
    menu.appendChild(musubiItems)
    menu.appendChild(apps)
    menu.appendChild(appsItems)
    menu.appendChild(mains)
    menu.appendChild(mainItems)
    menu.appendChild(desserts)
    menu.appendChild(dessertItems)
    menu.appendChild(backBtn)

    content.appendChild(menu)
}
