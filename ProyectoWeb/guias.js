const arrayData = [
    {
        id: 1,
        imageUrl: "Images/guia1.jpg",
        Heading: "Luis Atara",
        bgColor: "rgb(134, 144, 155)",
    },
    {
        id: 2,
        imageUrl: "Images/guia2.jpeg",
        Heading: "Andrea Bohorquez",
        bgColor: "rgb(134, 144, 155)",
        para: "Tambien conocido como puente Barducci construido en 1930, pertenece a la via ferrea que conduce a Bogotá"
    },
    {
        id: 3,
        imageUrl: "Images/guia3.jpeg",
        Heading: "Carlos Fajardo",
        bgColor: "rgb(134, 144, 155)",
        para: "El ecosistema del páramo cuenta con gran cantidad de frailejones y plantas nativas que ayudan a conservar el recurso hídrico"
    },
    
];

const cardContainer = document.querySelector('.container');

const functionCards = () => {
    arrayData.forEach((data) => {
        cardContainer.innerHTML += `
        <div class="card" style="background-color: ${data.bgColor}">
            <div class="image">
                <img src="${data.imageUrl}" alt="${data.Heading}">
            </div>
            <h2>${data.Heading}</h2>
        </div>`;
    });
};

functionCards();
