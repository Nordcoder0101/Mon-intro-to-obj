'use strict';
// Here is a function to find a random number.*//
function randomCustperHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//This f is for finding an hourly average of sales*//

StoreMaker.prototype.hourByHour = function(randomCust, cookiePerHour) {
  var randomSalePerHour = randomCustperHour((this.maxCust, this.minCust) * cookiePerHour);
  return randomSaleperHour;
  console.log(randomSaleperHour);
  for(i = 0; i < openHours.length; i++) {
    salesPerHour[i].push(randomSalePerHour);
    return this.location + 'at' + openHours[i] + 'sold' + randomSalePerHour + 'cookies.';
    console.log(this.location + 'at' + openHours[i] + 'sold' + randomSalePerHour + 'cookies.');
    return salesPerHour[i];
    console.log(salesPerHour[i]);
  };
  StoreMaker.prototype.hourByHour(this.avgCustPerHour, this.avgCookieSale);
  console.log (StoreMaker.prototype.hourByHour(), this.avgCookieSale);

  // StoreMaker.prototype.hourByHour(, this.avgCookieSale);

  StoreMaker.prototype.avgCustPerHour = function() {
    avg = randomCustperHour(this.maxCust, this.minCust);
    console.log(avg);
    return avg;
  };

  StoreMaker.prototype.randomPerHourSale = function() {
    var oneHourAvg = hourByHour(avgCustPerHour(), this.avgCookieSale);
    return oneHourAvg;
    console.log('the random sales per hour is', oneHourAvg);
  };
};

var table = document.getElementById('table content');
var stores = [];
var tableInfo = [];
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var salesPerHour = [];



function StoreMaker(location, minCust, maxCust, avgCookieSale, openHours) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hoursOpen = openHours;
}

var firstPike = new StoreMaker('1st and Pike', 23, 65, 6.3, openHours);
var seaTac = new StoreMaker('Seatac Airport', 3, 24, 1.2, openHours);
var seattleCenter = new StoreMaker('Seattle Center', 11, 38, 3.7, openHours);
var capitalHill = new StoreMaker('Capital Hill', 20, 38, 2.3, openHours);
var alki = new StoreMaker('Alki', 2, 16, 4.6, openHours);

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
console.log(stores);
