'use strict';

//reference elements
const headingElement = document.querySelector('h1');
console.log(headingElement);

//modify elements
headingElement.textContent = "I'm different text!"

const puppyImage = document.querySelector('#puppySection img');
// puppyImage.src = "img/husky.jpg";
// puppyImage.alt = "a grown up puppy";

headingElement.classList.add('bg-dark', 'text-light');
headingElement.classList.toggle('p-3');
//headingElement.style.backgroundImage = "img/my-background-123123123.jpg";

//making new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = "I'm a new paragraph! Yay!";
console.log(newParagraph);

const contentBox = document.querySelector('#contentBox');
contentBox.appendChild(newParagraph);

const linkArray = [
    {url: 'https://info340.github.io/', title: 'Course Textbook'}, 
    {url: 'https://ischool.uw.edu/', title: 'iSchool'}, 
    {url: 'https://www.google.com/search?q=puppies&tbm=isch', title: 'Puppies'}
];

//convert from {} to <a>
function renderLinkObject(linkObject) {
    const aElem = document.createElement('a');
    aElem.href = linkObject.url;
    aElem.textContent = linkObject.title;
    return aElem;
}

function renderNav(linkArray){
    const newNav = document.createElement('nav');

    const anchorArray = linkArray.map(renderLinkObject)
    console.log(anchorArray);

    for(const anchor of anchorArray){
        newNav.appendChild(anchor);
    }
    
    document.querySelector('header').appendChild(newNav);
}



renderNav(linkArray);

const facePic = document.querySelector('#face-pic');
facePic.addEventListener('mouseenter', function(event){
    facePic.src = "img/surprised.png";
})
facePic.addEventListener('mouseleave', function(event){
    facePic.src = "img/happy.png";
})


//whats the current situation
const STATE = {
    dogIsAdult: false,
    cookieCount: 3,
}

function renderPuppy(){
    if(STATE.dogIsAdult){
        puppyImage.src = "img/husky.jpg"
    } else {
        puppyImage.src = "img/puppy.jpg"
    }
}

const headerButton = document.querySelector('#header-button');

headerButton.addEventListener('click', function(event){
    console.log(event); //who you clicked on

    //modify the data
    STATE.dogIsAdult = !STATE.dogIsAdult; //toggle

    //re-render!
    renderPuppy();


    // headingElement.classList.toggle('p-3');
    // headerButton.classList.toggle('btn-dark');
    // puppyImage.classList.toggle('d-none');
    
})

renderPuppy();

function renderACookie() {
    const cookie = document.createElement('img');
    cookie.src = "img/cookie.png";
    cookie.alt = "a cookie";
    return cookie;
}

function renderCookieJar() {
    const jar = document.querySelector('#cookie-jar');
    jar.innerHTML = ''; //deletes all content
    for(let i=0; i<STATE.cookieCount; i++){
        jar.appendChild(renderACookie());
    }
}

document.querySelector('#add-button')
    .addEventListener('click', function(event){
        STATE.cookieCount++;
        renderCookieJar();
    })


renderCookieJar();



































































