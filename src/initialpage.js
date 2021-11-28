import photo from './photo.png';

export function loadHeader() {
    let header = document.createElement('div')
    header.classList.add("header")
    header.textContent = "softeeh"
    document.body.appendChild(header)
}

export function loadContent() {
    let content = document.createElement('div')
    content.classList.add("content")    
    
    let leftSide = document.createElement('div')
    leftSide.classList.add("left")
    const mainPic = new Image();
    mainPic.src = photo;
    leftSide.appendChild(mainPic);

    let rightSide = document.createElement('div')
    rightSide.classList.add("right")
    let para1 = document.createElement('p')
    let para2 = document.createElement('p')
    let para3 = document.createElement('p')
    para1.textContent = 
    "softeeh is a modern Hawaiian restaurant \
    located at 100 Cloud Blvd in the West Village \
    of New York City."
    
    para2.textContent = "The menu was curated by \
    New York native Chef Softie, and is complemented \
    by an award-winning French wine list and a selection of \
    unique cocktails."
    
    para3.textContent = "Our goal is to create an \
    environment where you can enjoy creatively \
    crafted food and delectable wine and spirits \
    in a warm, nostalgic atmosphere."

    let menuBtn = document.createElement('button')
    menuBtn.textContent = "menu"
    menuBtn.classList.add("menuBtn")
    let reserveBtn = document.createElement('button')
    reserveBtn.textContent = "reserve"
    reserveBtn.classList.add("reserveBtn")

    rightSide.appendChild(para1)
    rightSide.appendChild(para2)
    rightSide.appendChild(para3)
    rightSide.appendChild(menuBtn)
    rightSide.appendChild(reserveBtn)
    content.appendChild(leftSide);
    content.appendChild(rightSide)
    let footer = document.querySelector(".footer")
    document.body.insertBefore(content, footer)
}

export function loadFooter() {
    let footer = document.createElement('div');
    footer.classList.add("footer");
    
    let hours = document.createElement('div')
    let hoursTitle = document.createElement('div')
    hoursTitle.classList.add("title");
    hoursTitle.textContent = "hours";
    
    let dinnerHours = document.createElement('div');
    dinnerHours.innerHTML = "dinner <br /> \
    monday - closed <br /> \
    tuesday - closed <br /> \
    wednesday - 5:00 pm - 9:30 pm <br /> \
    thursday - 5:00 pm - 9:30 pm <br /> \
    friday - 5:00 pm - 11:00 pm <br /> \
    saturday - 5:00 pm - 11:00 pm <br /> \
    sunday - 5:00pm - 10:30 pm"
    let brunchHours = document.createElement('div');
    brunchHours.innerHTML = "<br \> brunch <br /> \
    saturday - 11:30 am - 2:30 pm <br /> \
    sunday - 11:30 am - 2:30 pm"
    hours.appendChild(hoursTitle);
    hours.appendChild(dinnerHours);
    hours.appendChild(brunchHours);
    footer.appendChild(hours);
    
    let address = document.createElement('div')
    let addressTitle = document.createElement('div')
    addressTitle.classList.add("title")
    addressTitle.textContent = "address"
    let addressContent = document.createElement('div');
    addressContent.innerHTML = "100 cloud blvd, new york, ny 10014 <br /> \
    b/t main st and park ave"
    address.appendChild(addressTitle)
    address.appendChild(addressContent)
    footer.appendChild(address)

    document.body.appendChild(footer);
}