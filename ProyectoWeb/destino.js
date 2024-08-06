const arrayData = [
    {
        id: 1,
        imageUrl: "Images/rocas.jpg",
        Heading: "Rocas Estoraques",
        bgColor: "rgb(205, 255, 223)",
        para: "Conjunto de grandes rocas a las que se puede acceder por caminata al páramo rabanal "
    },
    {
        id: 2,
        imageUrl: "Images/puenton.jpg",
        Heading: "Puentón",
        bgColor: "rgb(255, 246, 209)",
        para: "Tambien conocido como puente Barducci construido en 1930, pertenece a la via ferrea que conduce a Bogotá"
    },
    {
        id: 3,
        imageUrl: "Images/niebla.jpg",
        Heading: "Frailejones",
        bgColor: "rgb(206, 191, 255)",
        para: "El ecosistema del páramo cuenta con gran cantidad de frailejones y plantas nativas que ayudan a conservar el recurso hídrico"
    },
    {
        id: 4,
        imageUrl: "Images/laguna verde.jpg",
        Heading: "Laguna Verde",
        bgColor: "rgb(185, 209, 191)",
        para: "Fuente de diversas leyendas indigenas,se presume como epicentro de ofrendas a los astros.Sew localiza en la parte alta del páramo"
    },
    {
        id: 5,
        imageUrl: "Images/horno1jpg.jpg",
        Heading: "Hornos",
        bgColor: "rgb(192, 253, 255)",
        para: "Como municipio de caracter minero se pueden visitar las ruinas de las estructuras antes del desbordamiento de la represa Teatinos."
    },
    {
        id: 6,
        imageUrl: "Images/fabrica.jpg",
        Heading: "Fábrica Textil",
        bgColor: "rgb(255, 188, 193)",
        para: "Fundada en 1886 convirtiendose en una de las primeras fabrica textil de Colombia. Hoy conocida como INTEXTIL S.A ubicada en el area urbana del municipio"
    },
    {
        id: 7,
        imageUrl: "Images/camping.jpg",
        Heading: "Camping",
        bgColor: "rgb(255, 249, 181)",
        para: "Acampada al aire libre en sectores netamente rurales, fogata comunmente el plan incluye senderismo según sector de estadia"
    },
    {
        id: 8,
        imageUrl: "Images/teatinos.jpg",
        Heading: "Represa teatinos",
        bgColor: "rgb(152, 230, 215)",
        para: "Represa donde nace el rio Teatinos, la cual abastece de agua potable a municipios cercanos incluyendo la capital boyacense."
    },
    {
        id: 9,
        imageUrl: "Images/observatorio.jpg",
        Heading: "Telescopio",
        bgColor: "rgb(210, 186, 193)",
        para: "Servicio de observatorio en sectores libres de contaminacion luminica, organizacion previa a eventos astronomicos importantes"
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
            <p>${data.para}</p>
        </div>`;
    });
};

functionCards();
