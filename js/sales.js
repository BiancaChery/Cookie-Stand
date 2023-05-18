"use strict";

let stores = [
    { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3, },
    { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
    { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
    { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
    { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
];

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// for(let i = 0; i < hours.length; i++){
//     stores[i].salesPerHour = []
//     let randomInt = getRandomInt(stores[i].minCust, stores[i].maxCust)
//     let saleThisHour = randomInt * stores[i].avgCookiesPerSale
//     stores[i].salesPerHour.push(saleThisHour.toFixed(0));
// }

// console.log(stores);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let parentElem = document.getElementById("sales");

for(let i = 0; i < stores.length; i++){
    let headingElem = document.createElement('h2');
    headingElem.textContent = stores[i].store;
    parentElem.appendChild(headingElem)
}

