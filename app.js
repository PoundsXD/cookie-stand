'use strict';
var storeArray = [];
function store(storeName, minCust, maxCust, avgCookie){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesSold = [];
  this.dailyCookieSales = 0;
  this.cookieSales = function() {
    this.cookiesSold = [];
    for (var i = 0; i < 14; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales = totalSales + this.dailyCookieSales;
      this.cookiesSold.push(totalSales);
    }
  };
  this.cookieSales();
  storeArray.push(this);
}
var firstPike = new store('1st and Pike', 23, 65, 6.3);
var seaTac = new store('SeaTac Airport', 3, 24, 1.2);
var seacenter = new store('Seattle Center', 11, 38, 3.7);
var capitolhill = new store('Capitol Hill', 20, 38, 3.7);
var alk = new store('Alki', 2, 16, 4.6);
//create header of table.
var timeSlots = ['', '6am:', '7:am', '8:am', '9:am', '10:am', '11:am', '12:am', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm', 'Total'];
var createheader = function() {
  var tableStart = document.getElementById('data');
  var trTag = document.createElement('tr');
  tableStart.appendChild(trTag);
  var location = document.getElementById('data');
  var content = document.createElement('th');
  content.innerText = timeSlots[0];
  location.appendChild(content);
  for(var i = 1; i < timeSlots.length; i++){
    var hValues = document.getElementById('data');
    var inH = document.createElement('td');
    inH.innerText = timeSlots[i];
    hValues.appendChild(inH);
  }
};
createheader();
//main table content.
function getNewStore(event) {
  event.preventDefault();
  var storeName = this.elements['storeName'].value;
  var minCust = parseInt(this.elements['minCust'].value);
  var maxCust = parseInt(this.elements['maxCust'].value);
  var avgCookie = parseInt(this.elements['avgCookie'].value);
  var newStore = new store(storeName, minCust, maxCust, avgCookie);
  console.log(getNewStore);
  document.getElementById('data').innerHTML = '';
  mainCont();
}
newStore.addEventListener('submit', getNewStore);
//code to try and condense code above.
var mainCont = function() {
  for(var j = 0; j < storeArray.length; j++){
    var tableStart = document.getElementById('data');
    var trTag = document.createElement('tr');
    tableStart.appendChild(trTag);
    var location = document.getElementById('data');
    var content = document.createElement('th');
    content.innerText = storeArray[j].storeName;
    location.appendChild(content);
    for(var i = 0; i < 14; i++){
      var hValues = document.getElementById('data');
      var inH = document.createElement('td');
      inH.innerText = storeArray[j].cookiesSold[i];
      hValues.appendChild(inH);
    }
    var compTotal = document.getElementById('data');
    var dailyGain = document.createElement('td');
    dailyGain.innerText = storeArray[j].dailyCookieSales;
    compTotal.appendChild(dailyGain);
  }
};
mainCont();
