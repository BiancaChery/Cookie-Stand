"use strict";

// let seattleObject = {storeName: "Seattle", minCust: 23, maxCust: 65}
// cust12 = rand(23,65);
// sales12 = 6.3 * cust12

// let tokyoObject = {storeName: "Tokyo", minCust: 3, maxCust: 24}
// cust12 = rand(3,24);
// sales12 = 1.2 * cust12 

// let dubaiObject = {storeName: "Dubai", minCust: 11, maxCust: 38}
// cust12 = rand(11,38);
// sales12 = 3.7 * cust12

// let parisObject = {storeName: "Paris", minCust: 20, maxCust: 38}
// cust12 = rand(20,38);
// sales12 = 2.3 * cust12

// let limaObject = {storeName: "Lima", minCust: 2, maxCust: 16}
// cust12 = rand(2,16);
// sales12 = 4.6 * cust12 

let stores = [
    { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3, },
    { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
    { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
    { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
    { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
];

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm","7pm"];

function Store(location, hours, totals) {
    this.location = location;
    this.hour = hours;
    this.total = totals;
}

let state = {
    tableElem: document.getElementById("cookie-table")
}
state.tableElem.appendChild(...);

let store1 = new Store("Seattle", "hours", )
let store2 = new Store("Tokyo", "hours", )
let store3 = new Store("Dubai", "hours", )
let store4 = new Store("Paris", "hours", )
let store5 = new Store("Lima", "hours", ) 
console.log(store1, store2, store3, store4, store5);

state.stores.push(store1)
state.stores.push(store2)
state.stores.push(store3)
state.stores.push(store4)
state.stores.push(store5)

console.log(state.stores);

for (let store of state.stores) {
    store.render();
}

// store1.render();
// store2.render();
// store3.render();
// store4.render();
// store5.render();

Store.prototype.render = function() {
    let storeRow = document.createElement("tr");
    let storeLocationTD = document.createElement("td");
    storeLocationTD.textContent = this.location; 
    state.tableElem.appendChild(storeRow);
}

//https://developer.mozilla.org/en-US

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// for(let i = 0; i < hours.length; i++){
//     stores[i].salesPerHour = []
//     let randomInt = getRandomInt(stores[i].minCust, stores[i].maxCust)
//     let saleThisHour = randomInt * stores[i].avgCookiesPerSale
//     stores[i].salesPerHour.push(saleThisHour.toFixed(0));
// }

// console.log(stores);

let parentElem = document.getElementById("sales");

for(let i = 0; i < stores.length; i++){
    let headingElem = document.createElement('h2');
    headingElem.textContent = stores[i].store;
    parentElem.appendChild(headingElem)
}