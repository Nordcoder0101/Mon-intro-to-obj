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

  arrayOfStores.push = new MakeStore(location, minCust, maxCust, avgCookieSale);
  createTable();
  cookieStoreInfo.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < objectOfStores.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + arrayOfStores[i].location + '</td>' +
    '<td>' + arrayOfStores[i].min_cust + '</td>' +
    '<td>' + arrayOfStores[i].max_cust + '</td>' +
    '<td>' + arrayOfStores[i].cookies_per_customer + '</td>';
  }
  tableStoreDisplay.appendChild(row);
}
cookieStoreInfo.addEventListener('submit', formArrayOfStores);
