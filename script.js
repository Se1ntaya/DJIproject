const prosuctList = document.querySelector(".products__list");


const drones = [
    {
        img: "quadcopter0001-front-view.jpg",
        name: "DJI Mavic 3",
        cost: "3290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0004-front-view.png",
        name: "DJI Inspire 2",
        cost: "12390$"
    },
    {
        img: "quadcopter0004-front-view.png",
        name: "DJI Inspire 2",
        cost: "12390$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
];

console.log(drones);

window.addEventListener("load", () => {
    console.log("loaded");
    drones.forEach((elem) => {
        prosuctList.appendChild(showDrones(elem["img"], elem["name"], elem["cost"]));
    })
})

function showDrones(indImg, indName, indCost){
    const liDrone = document.createElement("li");
    const aDrone = document.createElement("a");
    aDrone.href = "#";
    liDrone.appendChild(aDrone);

    const divDrone = document.createElement("div");
    divDrone.classList.add("product__wrap");
    aDrone.appendChild(divDrone);

    const imgDrone = document.createElement("img");
    imgDrone.src = `./imgs/products/quadcopters/${indImg}`;
    imgDrone.alt = "product-img";
    imgDrone.classList.add("product__img");
    divDrone.appendChild(imgDrone);

    const h4Drone = document.createElement("h4");
    h4Drone.classList.add("product__name");
    h4Drone.textContent = indName;
    divDrone.appendChild(h4Drone);

    const spanDrone = document.createElement("span");
    spanDrone.classList.add("product__cost");
    spanDrone.textContent = indCost;
    divDrone.appendChild(spanDrone);

    const btnDrone = document.createElement("button");
    btnDrone.classList.add("btn", "btn__product");
    btnDrone.textContent = "Add to Cart"
    divDrone.appendChild(btnDrone);

    return liDrone;
}


