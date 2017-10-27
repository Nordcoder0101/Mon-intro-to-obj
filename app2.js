'use strict';
var cookieStoreInfo = document.getElementById('cookie_store_info');
var tableStoreDisplay = document.getElementById('table_store_display');
var arrayOfStores = [];


function salesPerHour(maxCust, minCust, avgCookieSale, numHours) {
  var randomCustPerHour = function(min, max){;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var cookieArray = [];
  for(var i = 0; i < numHours; i++) {
    var customers = randomCustPerHour(minCust, maxCust);
    var openHoursData = customers * avgCookieSale;
    cookieArray[i] = openHoursData;
    console.log('hourly sale is', openHoursData);
  }
  return cookieArray;
}

function formArrayOfStores(event) {
  event.preventDefault();

  var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var location = event.target.location.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgCookieSale = event.target.cookies_per_customer.value;
  var numCookies = salesPerHour(maxCust, minCust, avgCookieSale, openHours.length);

  arrayOfStores.push(new CookieStore(location, minCust, maxCust, avgCookieSale, openHours, numCookies));
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
    '<td>' + arrayOfStores[i].avgCookieSale + '</td>' +
    '<td>' + arrayOfStores[i].openHours + '</td>' +
    '<td>' + arrayOfStores[i].numCookies + '</td>';
  }
  tableStoreDisplay.appendChild(row);
}

function CookieStore(location, minCust, maxCust, avgCookieSale, openHours, numCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.openHours = openHours;
  this.numCookies = numCookies;
}


cookieStoreInfo.addEventListener('submit', formArrayOfStores);
