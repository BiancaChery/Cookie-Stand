"use strict";

let stores = [
    { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3, },
    { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
    { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
    { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
    { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },

    newCookieStore("Seattle", 23, 65, 6.3),
    newCookieStore("Tokyo", 3, 24, 1.2),
    newCookieStore("Dubai", 11, 38, 3.7),
    newCookieStore("Paris", 20, 38, 2.3),
    newCookieStore("Lima", 2, 16, 4.6),
];

let hours = ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

//https://developer.mozilla.org/en-US

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (let store of stores) {   
    store["amountBoughtPerHour"] = [];

    for (let hour of hours) {
        let randomInteger = getRandomInt(
            store['minCust'],
            store['maxCust']
        );
        
        store["amountBoughtPerHour"].push(
            Math.floor(randomInteger * store["avgCookiesPerSale"])
        );
    }
}
console.log(stores);

function CookieStore(name, minCust, maxCust, avgCookiesPerSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.hourlyCookies = [];
    this.dailyCookies = 0;
  }
  
  let tableElement = document.getElementById("sales-table");
  let headingElement = document.getElementById("heading-row");
  
  for (let h = 0; h < hours.length; h++) {
    let hourElement = document.createElement("th");
    hourElement.textContent = hours[h];
    headingRow.appendChild(hourElement);
    console.log(stores);
  }
  
  for (let i = 0; i < stores.length; i++) {
    let trElement = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = stores[i];
  }

for (let store of stores) {
    let salesSection = document.getElementById('sales')
    let headingElem = document.createElement('h2');
    headingElem.textContent = store["store"]
    salesSection.appendChild(headingElem);

    let ulElem = document.createElement('ul');
    salesSection.appendChild(ulElem)
    let total = 0;
    for (let index in store['amountBoughtPerHour']) {
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[index]}: ${store['amountBoughtPerHour'][index]} Cookies`;
        ulElem.appendChild(liElem);

        total += store['amountBoughtPerHour'][index]
    }

    let totalLiElem = document.createElement('li')
    totalLiElem.textContent = `Total: ${total} Cookies`
    ulElem.appendChild(totalLiElem)
}


// Store.prototype.render = function() {
//     let storeRow = document.createElement("tr");
//     let storeLocationTD = document.createElement("td");
//     storeLocationTD.textContent = this.location; 
//     state.tableElem.appendChild(storeRow);
// }

// let parentElem = document.getElementById("sales");

// for(let i = 0; i < stores.length; i++){
//     let headingElem = document.createElement('h2');
//     headingElem.textContent = stores[i].store;
//     parentElem.appendChild(headingElem)
// }

// console.log(stores);
// function Store(location, hours, totals) {
//     this.location = location;
//     this.hour = hours;
//     this.total = totals;
// }