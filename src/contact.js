import './style.css';
import Food from './food.jpeg';

const element = document.getElementById("content");

function loadContact() {
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
    infoContainer.style.top = '50%';
    infoContainer.style.left = '33vw';
    infoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    infoContainer.style.color = 'white';
    infoContainer.style.width = '33vw';
    infoContainer.style.padding = '25px';
    infoContainer.style.display = "flex";
    infoContainer.style.flexDirection = "column"
    infoContainer.style.alignItems = "center"
    infoContainer.style.justifyContent = "space-around";
    infoContainer.style.height = "256px";
    element.appendChild(infoContainer);

    const info = document.createElement("div");
    info.textContent = "Phone: 123-456-7890"
    infoContainer.appendChild(info);

    const info2 = document.createElement("div");
    info2.textContent = "Email: fakeEmail@nowhere.com"
    infoContainer.appendChild(info2);

    const info3 = document.createElement("div");
    info3.textContent = "Fax: N/A";
    infoContainer.appendChild(info3);
}

export default loadContact;