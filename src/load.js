import './style.css';
import Food from './food.jpeg';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import loadHome from './home.js';

function createPage() {
    const myImage = new Image();
    myImage.src = Food;
    myImage.style.width = '100%';
    myImage.style.height = '100%';

    const element = document.getElementById('content');
    element.appendChild(myImage);

    const introContainer = document.createElement('div');
    introContainer.style.position = 'absolute';
    introContainer.style.top = '50%';
    introContainer.style.left = '33vw';
    introContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    introContainer.style.color = 'white';
    introContainer.style.width = '33vw';
    introContainer.style.padding = '25px';
    introContainer.classList.add("fade-in");

    const introHeader = document.createElement('h3');
    introHeader.textContent = "Welcome!";
    introHeader.style.textAlign = 'center';
    introContainer.appendChild(introHeader);

    const introText = document.createElement('p');
    introText.textContent = "Welcome to Casita Madrigal, where every dish is a celebration of Hispanic flavors and traditions. Step into our cozy haven and embark on a culinary journey through the heart of Hispanic cuisine. From vibrant salsas to succulent meats and aromatic spices, each bite tells a story steeped in rich cultural heritage. Whether you crave the fiery kick of our sizzling fajitas or the comforting warmth of our homemade tamales, every dish is crafted with passion and authenticity. Join us and experience the warmth of our hospitality and the unforgettable taste of Casita Madrigal. ¡Buen provecho!";
    introText.style.lineHeight = "2";
    element.appendChild(introContainer);
    introContainer.appendChild(introText);

    const homeButton = document.getElementById("HomeTab");
    homeButton.addEventListener('click', loadHome);

    const menuButton = document.getElementById("MenuTab");
    menuButton.addEventListener('click', loadMenu);

    const contactButton = document.getElementById("ContactTab");
    contactButton.addEventListener('click', loadContact);

    const footer = document.createElement("div");
    footer.textContent = "Copyright © Kn0824 2024";
    footer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    footer.style.height = "24px";
    footer.style.width = '100%';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '5px';
    element.appendChild(footer);
}

export default createPage;