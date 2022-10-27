function homePageContent(){
    const home = document.createElement('div');
    home.classList.add('home');

    const pageHeader = document.createElement('h1');
    pageHeader.classList.add('pageHeader');
    home.appendChild(pageHeader);
    pageHeader.textContent = 'Welcome to Pizza Place!';
    
    const homeTextOne = document.createElement('div');
    homeTextOne.classList.add('homeTextOne');
    homeTextOne.innerHTML = 'Pizza Place has been feeding its community since 1983! <br> Come on by for a delicious slice so we can happily keep serving our great community!'
    home.appendChild(homeTextOne)

    const homeTextTwo = document.createElement('h3');
    homeTextTwo.classList.add('homeTextTwo');
    homeTextTwo.textContent = 'Our hours:'
    home.appendChild(homeTextTwo);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Sunday: 10:00 AM - 10:00 PM <br> Monday: 10:00 AM - 10:00 PM <br> Tuesday: 10:00 AM - 10:00 PM <br> Wednesday: 10:00 AM - 10:00 PM <br> Thursday: 10:00 AM - 10:00 PM <br> Friday: 10:00 AM - 11:00 PM <br> Saturday 10:00 AM - 10:00 PM <br> '
    home.appendChild(hours);

    const locationText = document.createElement('div');
    locationText.classList.add('locationText');
    home.appendChild(locationText);
    locationText.textContent = 'We are currently located at 123 Main St., Where-Ever Land';

    return home
}


function homePage(){
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(homePageContent());
}

export default homePage;