'use strict';
function randomCustperHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var allBranches = [];
var perStoreInfo = {
  location: '1st and Pike',
  minCust: 23,*
  maxCust: 65,
  avgCustPerHour: function() {
    var avg = randomCustperHour(this.maxCust, this.minCust);
    console.log('avg', avg);
    return avg;
  }
};
// console.log('this is the average customer per hour ', perStoreInfo.avgCustPerHour());

//avgCustPerHour(perStoreInfo.minCust, perStoreInfo.maxCust);
perStoreInfo.avgCustPerHour();
