'use strict';

var cookieStoreInfo = document.getElementById('cookie_store_info');
var tableStoreDisplay = document.getElementById('table_store_display');
var arrayOfStores = [];

function MakeStore(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.storeHours = [];
}

function formArrayOfStores(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgCookieSale = event.target.cookies_per_customer.value;

  objectOfStores.push = new MakeStore(location, minCust, maxCust, avgCookieSale);
  createTable();
  cookiestoreinfo.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < objectOfStores.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + objectOfStores[i].location + '</td>' +
    '<td>' + objectOfStores[i].minCust + '</td>' +
    '<td>' + objectOfStores[i].maxCust + '</td>' +
    '<td>' + objectOfStores[i].avgCookieSale + '</td>';
  }
  table.appendChild(row);
}
arrayOfStores.addEventListener('submit', formArrayOfStores);
