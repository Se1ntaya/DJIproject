const productList = document.querySelector(".products__list");
const btnPrev = document.querySelector(".pages__prev");
const btnNext = document.querySelector(".pages__next");
const pages = document.querySelector(".products__pages");
const pagesList = document.querySelector(".pages__list");


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
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0003-front-view.jpg",
        name: "DJI Mini 2",
        cost: "490$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
    {
        img: "quadcopter0002-front-view.jpg",
        name: "DJI AIR 2S",
        cost: "1290$"
    },
];

let maxPages = Math.ceil(drones.length / 8);
let curPage = 1;
let itemsPerPage = 8;

console.log(drones);
console.log(maxPages);

window.addEventListener("load", () => {
    console.log("loaded");
    showDrones();
    pagesSetup();
})

function createProducts(indImg, indName, indCost){
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

function pagesSetup(){
    if(maxPages <= 1) {
        pages.classList.add("hidden");
    }
    else{
        pages.classList.remove("hidden");
    }
    countPages(maxPages);
}

function countPages(max){
    for(let i = 1; i <= max; i++){
        const pagesLi = document.createElement("li");
        pagesLi.classList.add("pages__item");
        const pagesDiv = document.createElement("div");
        pagesLi.appendChild(pagesDiv);
        pagesDiv.classList.add("page__wrap");
        pagesDiv.textContent = i;
        pagesDiv.id = i;
        if(+pagesDiv.id === 1){
            pagesDiv.classList.add("active");
        }
        pagesList.appendChild(pagesLi);
    }

}

function scrollPages(curPage){
    const allPages = document.querySelectorAll(".page__wrap");
    allPages.forEach((elem) => {
        if (elem.id == curPage) {
            elem.classList.add("active");
        }
        else {
            elem.classList.remove("active");
        }
    })
}

btnNext.addEventListener("click", () => {
    curPage++;
    if(curPage === maxPages + 1){
        curPage = 1;
    }
    scrollPages(curPage);
    console.log(curPage);
    showDrones();
})

btnPrev.addEventListener("click", () => {
    curPage--;
    if(curPage < 1){
        curPage = maxPages;
    }
    scrollPages(curPage);
    console.log(curPage);
    showDrones();
})


pages.addEventListener("click", (event) => {
    if(event.target.closest(".page__wrap")){
        scrollPages(event.target.id);
        curPage = event.target.id;
        showDrones();
    }
})


function showDrones() {
    productList.replaceChildren();
    let start = (curPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    const selectedProd = drones.slice(start, end);
    selectedProd.forEach((elem) => {
        productList.appendChild(createProducts(elem["img"], elem["name"], elem["cost"]));
    })
}

