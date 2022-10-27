import homePage from './home';
import infoPage from './info';
import menuPage from './menu';

// Main index page | Base items that will not change
const body = document.querySelector('body');

const header = document.createElement('div');
header.classList.add('header');
body.appendChild(header);

const companyName = document.createElement('h1');
companyName.textContent = 'Pizza Place';
companyName.classList.add('companyName');
header.appendChild(companyName);

const navButtonBar = document.createElement('div');
navButtonBar.classList.add('navButtonBar');
header.appendChild(navButtonBar);
header.appendChild(navButtonBar);

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.classList.add('navButton');
navButtonBar.appendChild(homeButton);
homeButton.addEventListener('click', function(){
    //imported Home file function here
    homePage();
} )

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('navButton');
navButtonBar.appendChild(menuButton);
menuButton.addEventListener('click', function(){
    //imported Menu file function here
    menuPage();
})

const aboutButton = document.createElement('button');
aboutButton.textContent = 'About Us';
aboutButton.classList.add('navButton');
navButtonBar.appendChild(aboutButton);
aboutButton.addEventListener('click', function(){
    //imported About Us file function here
    infoPage();
})

const content = document.createElement('div');
content.classList.add('content');
body.appendChild(content);

homePage();