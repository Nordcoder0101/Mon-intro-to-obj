'use strict';
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var cookieStoreInfo = document.getElementById('cookie_store_info');
var tableStoreDisplay = document.getElementById('table_store_display');
var arrayOfStores = [];


function salesPerHour(openHours, maxCust, minCust, avgCookieSale){
  for(var i = 0; i < openHours.length; i++) {
    var customers = randomCustperHour(maxCust, minCust);
    var openHoursData = customers * avgCookieSale;
    openHours[i] = openHours[i] + ' sold ' + openHoursData + ' cookies';
  }
  return openHours;
}

function CookieStore(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.storeHours = openHours;
}

function formArrayOfStores(event) {
  event.preventDefault();

  var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var location = event.target.location.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgCookieSale = event.target.cookies_per_customer.value;
  openHours = salesPerHour(openHours, maxCust, minCust, avgCookieSale);

  arrayOfStores.push(new CookieStore(location, minCust, maxCust, avgCookieSale));
  createTable();
  cookieStoreInfo.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < arrayOfStores.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + arrayOfStores[i].location + '</td>' +
    '<td>' + arrayOfStores[i].minCust + '</td>' +
    '<td>' + arrayOfStores[i].maxCust + '</td>' +
    '<td>' + arrayOfStores[i].avgCookieSale + '</td>';
  }
  tableStoreDisplay.appendChild(row);
}
cookieStoreInfo.addEventListener('submit', formArrayOfStores);
