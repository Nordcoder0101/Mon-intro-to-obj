'use strict';
// Here is a function to find a random number.*//
function randomCustperHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//This f is for finding an hourly average of sales*//
var oneHourAvgSales;

function hourByHour(avgSale, cookiePerHour) {
  var oneHourAvgSales = (avgSale * cookiePer);
  console.log(oneHourAvg, 'is the one hour avg');
  return oneHourSalesAvg;
};

var avg;

function avgCustPerHour() {
  var avg = randomCustperHour(this.maxCust, this.minCust);
  console.log(avg);
  return avg;
};

function randomPerHourSale() {
  var oneHourAvg = hourByHour(avg, this.avgCookieSale);
  console.log(oneHourAvg, 'is a one hour sales average per suctomer');
  return oneHourAvg;


};

var table = document.getElementById('table content');
var stores = [];
var tableInfo = [];

function StoreMaker(location, minCust, maxCust, avgCookieSale, openHours) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.openHours = '6am' + '7am' + '8am' + '9am' + '10am' ;
}

var firstPike = new StoreMaker('1st and Pike', 23, 65, 6.3);
var seaTac = new StoreMaker('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new StoreMaker('Seattle Center', 11, 38, 3.7);
var capitalHill = new StoreMaker('Capital Hill', 20, 38, 2.3);
var alki = new StoreMaker('Alki', 2, 16, 4.6);

stores.push(firstPike);
stores.push(seaTac);
stores.push(seattleCenter);
stores.push(capitalHill);
stores.push(alki);

for (var i = 0; i < stores.length; i++) {
  tableInfo.push(
    '<td>' + stores[i].location + '</td>' +
    '<td>' + stores[i].minCust + '</td>' +
    '<td>' + stores[i].maxCust + '</td>' +
    '<td>' + stores[i].avgCookieSale + '</td>'
  );
}
console.log(firstPike);
console.log(seaTac);
console.log(seattleCenter);
console.log(capitalHill);
console.log(alki);
