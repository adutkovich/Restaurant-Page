function menuPageContent(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const pageHeader = document.createElement('h1');
    pageHeader.classList.add('pageHeader');
    menu.appendChild(pageHeader);
    pageHeader.textContent = 'Our Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid');
    menu.appendChild(menuGrid);

    menuGrid.appendChild(menuItem('Alfredo Pizza','Alfredo sauce pizza, add any toppings'));
    menuGrid.appendChild(menuItem('Beans','Cold Beans.'));
    menuGrid.appendChild(menuItem('Chicken Tenders','Beer battered chicken  tenders, yum.'));
    menuGrid.appendChild(menuItem('Hawaiian Pizza','Gross, do better.'));
    menuGrid.appendChild(menuItem('Meatball Sub','Homemade meatballs served on a toasted garlic bread'));
    menuGrid.appendChild(menuItem('Pasta','Farfalle pasta with your choice of alfredo or tomato sauce'));
    
    return menu
}

function menuItem(name, ingredients){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuCell');

    const menuItemName = document.createElement('div');
    menuItemName.classList.add('itemName');
    menuItemName.textContent = name;

    const menuItemIngredients = document.createElement('div');
    menuItemIngredients.classList.add('itemIngredients');
    menuItemIngredients.textContent = ingredients;

    const menuItemImage = document.createElement('img');
    menuItemImage.classList.add('itemImage')
    menuItemImage.src = `imgs/${name.toLowerCase()}.png`;
    menuItemImage.alt = `${name}`;

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemIngredients);
    menuItem.appendChild(menuItemImage);

    return menuItem;
}

function menuPage(){
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(menuPageContent());
}

export default menuPage;