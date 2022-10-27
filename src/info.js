function infoPageContent(){
    const info = document.createElement('div');
    info.classList.add('info');

    const pageHeader = document.createElement('h1');
    pageHeader.classList.add('pageHeader');
    info.appendChild(pageHeader);
    pageHeader.textContent = 'Learn About Us!';
    
    const infoTextOne = document.createElement('p');
    infoTextOne.classList.add('infoTextOne');
    infoTextOne.textContent = 'Pizza Place has been a dream of the owners since they day they were born. It was a dream that they strived for with every bit of energy they had. They gave up family, friends, their own respect, just to open a pizza place. To be able to create homemade pizzas in a nice stone oven,  the perfect pizza, was just too good to not bring into this small town. Now that it\'s here it is doing better than anyone ever expected, everyone as in the people who didn\'t get cut off at least.';
    info.appendChild(infoTextOne);

    const contactInfo = document.createElement('p');
    contactInfo.classList.add('contactInfo');
    contactInfo.textContent = 'Our number for your ordering needs!';
    info.appendChild(contactInfo);
    const number = document.createElement('div');
    number.classList.add('pNumber');
    number.textContent = '1-800-111-2222';
    contactInfo.appendChild(number);

    return info
}


function infoPage(){
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(infoPageContent());
}

export default infoPage;