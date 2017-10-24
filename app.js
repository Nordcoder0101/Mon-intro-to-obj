'use strict';

var numHours = 15;

var allStores = [];

function CookieShop(location, minCust, maxCust, avgCookieSale, storeHours) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.storeHours = storeHours;


};

var firstPike = new Store('Ford', 'Escort', 1983, 80000);

// var pikeFirst = {
//   location: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   avgCustPerHour: function() {
//     var avg = randomCustperHour(this.maxCust, this.minCust);
//     console.log('avg', avg);
//     return avg;
//   },
//   avgCookieHour: function(){
//     var oneHourAvg = hourByHour(this.avgCustPerHour(), this.avgCookieSale);
//     console.log(oneHourAvg, 'is a one hour average');
//     return oneHourAvg;
//   },
// };
// pikeFirst.avgCustPerHour();
// pikeFirst.avgCookieHour();
//
//
// var seaTac = {
//   location: 'Seatac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   avgCustPerHour: function() {
//     var avg = randomCustperHour(this.maxCust, this.minCust);
//     console.log('avg seaTac', avg);
//     return avg;
//   },
//   avgCookieHour: function(){
//     var oneHourAvg = hourByHour(this.avgCustPerHour(), this.avgCookieSale);
//     console.log(oneHourAvg, 'is a one hour average');
//     return oneHourAvg;
//   },
// };
// seaTac.avgCustPerHour();
// seaTac.avgCookieHour();
//
// var seattleCenter = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   avgCustPerHour: function() {
//     var avg = randomCustperHour(this.maxCust, this.minCust);
//     console.log('avg seattleCenter', avg);
//     return avg;
//   },
//   avgCookieHour: function() {
//     var oneHourAvg = hourByHour(this.avgCustPerHour(), this.avgCookieSale);
//     console.log(oneHourAvg, 'is a one hour average');
//     return oneHourAvg;
//   }
// };
//
//
// seattleCenter.avgCustPerHour();
// seattleCenter.avgCookieHour();
//
// var captitalHill = {
//   location: 'Capital Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   avgCustPerHour: function() {
//     var avg = randomCustperHour(this.maxCust, this.minCust);
//     console.log('avg CaptitalHill', avg);
//     return avg;
//   }
// };
// captitalHill.avgCustPerHour();
// pikeFirst.avgCookieHour();
function randomCustperHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function hourByHour(avgSale, cookiePer) {
  var oneHourAvg = (avgSale * cookiePer);
  console.log(oneHourAvg, 'is the one hour avg');
  return oneHourAvg;
};

var numHours = 15;

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  avgCustPerHour: function() {
    var avg = randomCustperHour(this.maxCust, this.minCust);
    console.log('avg num customers for Alki', avg);
    return avg;
  },
  daySalesLog: [],
  avgCookieHour: function() {
    var oneHourAvg = hourByHour(avg, this.avgCookieSale);
    console.log(oneHourAvg, 'is a one hour average cookie sales for alki');
    return oneHourAvg;
    for(var i = 0; i <= numHours && stillOpen === true; i++) {
      this.daySalesLog[i].push(oneHourAvg);
    }
  }
};
alki.avgCustPerHour();
alki.avgCookieHour();
console.log(alki);
