import './style.css';
import Food from './food.jpeg';
import Tacos from './images/tacos.jpeg';
import Burritos from './images/burritos.jpeg';
import Empanadas from './images/empanadas.jpeg';
import Paella from './images/paella.jpeg';
import Drinks from './images/drinks.jpeg';
import Desserts from './images/desserts.jpeg';

const element = document.getElementById("content");

function loadMenu() {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    const myImage = new Image();
    myImage.src = Food;
    myImage.style.width = '100%';
    myImage.style.height = '100%';
    element.appendChild(myImage);

    const footer = document.createElement("div");
    footer.textContent = "Copyright © Kn0824 2024";
    footer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    footer.style.height = "24px";
    footer.style.width = '100%';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '5px';
    element.appendChild(footer);

    const infoContainer = document.createElement('div');
    infoContainer.style.position = 'absolute';
    infoContainer.style.top = '30%';
    infoContainer.style.left = '33vw';
    infoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    infoContainer.style.color = 'white';
    infoContainer.style.padding = '25px';
    infoContainer.style.display = "flex";
    infoContainer.style.flexDirection = "column";
    infoContainer.style.alignItems = "center";
    infoContainer.style.justifyContent = "space-around";
    infoContainer.style.display = "grid";
    infoContainer.classList.add("menuContainer");
    element.appendChild(infoContainer);

    const tacos = document.createElement("div");
    tacos.classList.add("menuItem");
    infoContainer.appendChild(tacos);
    const tacosText = document.createElement("div");
    tacosText.textContent = "Tacos";
    tacos.appendChild(tacosText);
    const tacoImage = new Image();
    tacoImage.src = Tacos;
    tacoImage.style.width = '100%';
    tacos.appendChild(tacoImage);

    const burritos = document.createElement("div");
    burritos.classList.add("menuItem");
    infoContainer.appendChild(burritos);
    const burritosText = document.createElement("div");
    burritosText.textContent = "Burritos";
    burritos.appendChild(burritosText);
    const burritosImage = new Image();
    burritosImage.src = Burritos;
    burritosImage.style.width = '100%';
    burritos.appendChild(burritosImage);

    const empanadas = document.createElement("div");
    empanadas.classList.add("menuItem");
    infoContainer.appendChild(empanadas);
    const empanadasText = document.createElement("div");
    empanadasText.textContent = "Empanadas";
    empanadas.appendChild(empanadasText);
    const empanadasImage = new Image();
    empanadasImage.src = Empanadas;
    empanadasImage.style.width = '100%';
    empanadas.appendChild(empanadasImage);

    const paella = document.createElement("div");
    paella.classList.add("menuItem");
    infoContainer.appendChild(paella);
    const paellaText = document.createElement("div");
    paellaText.textContent = "Paella";
    paella.appendChild(paellaText);
    const paellaImage = new Image();
    paellaImage.src = Paella;
    paellaImage.style.width = '100%';
    paella.appendChild(paellaImage);

    const drinks = document.createElement("div");
    drinks.classList.add("menuItem");
    infoContainer.appendChild(drinks);
    const drinksText = document.createElement("div");
    drinksText.textContent = "Drinks";
    drinks.appendChild(drinksText);
    const drinksImage = new Image();
    drinksImage.src = Drinks;
    drinksImage.style.width = '100%';
    drinks.appendChild(drinksImage);

    const desserts = document.createElement("div");
    desserts.classList.add("menuItem");
    infoContainer.appendChild(desserts);
    const dessertsText = document.createElement("div");
    dessertsText.textContent = "Desserts";
    desserts.appendChild(dessertsText);
    const dessertsImage = new Image();
    dessertsImage.src = Desserts;
    dessertsImage.style.width = '100%';
    desserts.appendChild(dessertsImage);
}

export default loadMenu;