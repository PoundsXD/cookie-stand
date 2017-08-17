'use strict';

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
}
var firstPike = new store('1st and Pike', 23, 65, 6.3);
var seaTac = new store('SeaTac Airport', 3, 24, 1.2);
var seacenter = new store('Seattle Center', 11, 38, 3.7);
var capitolhill = new store('Capitol Hill', 20, 38, 3.7);
var alk = new store('Alki', 2, 16, 4.6);
//Call new objects.
firstPike.cookieSales();
seaTac.cookieSales();
seacenter.cookieSales();
capitolhill.cookieSales();
alk.cookieSales();
//create header of table.
var timeSlots = ['', '6am:', '7:am', '8:am', '9:am', '10:am', '11:am', '12:am', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm', 'Total'];
var createheader = function() {
  var location = document.getElementById('test');
  var content = document.createElement('th');
  content.innerText = timeSlots[0];
  location.appendChild(content);
  for(var i = 1; i < 16; i++){
    var hValues = document.getElementById('test');
    var inH = document.createElement('td');
    inH.innerText = timeSlots[i];
    hValues.appendChild(inH);
  }
};
createheader();
//main table content.
var storeNames = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var mainCont = function() {
  var location = document.getElementById('store1');
  var content = document.createElement('th');
  content.innerText = storeNames[0];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store1');
    var inH = document.createElement('td');
    inH.innerText = firstPike.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store1');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = firstPike.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont();

var mainCont2 = function() {
  var location = document.getElementById('store2');
  var content = document.createElement('th');
  content.innerText = storeNames[1];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store2');
    var inH = document.createElement('td');
    inH.innerText = seaTac.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store2');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = seaTac.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont2();

var mainCont3 = function() {
  var location = document.getElementById('store3');
  var content = document.createElement('th');
  content.innerText = storeNames[2];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store3');
    var inH = document.createElement('td');
    inH.innerText = seacenter.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store3');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = seacenter.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont3();

var mainCont4 = function() {
  var location = document.getElementById('store4');
  var content = document.createElement('th');
  content.innerText = storeNames[3];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store4');
    var inH = document.createElement('td');
    inH.innerText = capitolhill.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store4');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = capitolhill.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont4();

var mainCont5 = function() {
  var location = document.getElementById('store5');
  var content = document.createElement('th');
  content.innerText = storeNames[4];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store5');
    var inH = document.createElement('td');
    inH.innerText = alk.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store5');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = alk.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont5();
/*var mainCont6 = function() {
  var location = document.getElementById('store5');
  var content = document.createElement('th');
  content.innerText = storeNames[4];
  location.appendChild(content);
  for(var i = 0; i < 14; i++){
    var hValues = document.getElementById('store5');
    var inH = document.createElement('td');
    inH.innerText = alk.cookiesSold[i];
    hValues.appendChild(inH);
  }
  var compTotal = document.getElementById('store5');
  var dailyGain = document.createElement('td');
  dailyGain.innerText = alk.dailyCookieSales;
  compTotal.appendChild(dailyGain);
};
mainCont6();*/
function getNewStore(event) {
  event.preventDefault();
  var newStore = new store();
  newStore.storeName = this.elements['storeName'].value;
  newStore.storeName = this.elements['minCust'].value;
  newStore.storeName = this.elements['maxCust'].value;
  newStore.storeName = this.elements['avgCookie'].value;
  newStore.store();
}
newStore.addEventListener('submit', getNewStore);
//code to try and condense code above.
/*var storeNames = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var idNames = ['store1', 'store2', 'store3', 'store4', 'store5'];
var functionNames = ['firstPike', 'seaTac', 'seacenter', 'capitolhill', 'alk'];
var mainCont = function() {
  for(var j = 0; j < 5; j++){
    var location = document.getElementById(idNames[j]);
    var content = document.createElement('th');
    content.innerText = storeNames[0];
    location.appendChild(content);
    for(var i = 0; i < 14; i++){
      var hValues = document.getElementById(idNames[j]);
      var inH = document.createElement('td');
      inH.innerText = functionNames[j].cookiesSold[i];
      hValues.appendChild(inH);
    }
    var compTotal = document.getElementById(idNames[j]);
    var dailyGain = document.createElement('td');
    dailyGain.innerText = functionNames[j].dailyCookieSales;
    compTotal.appendChild(dailyGain);
  }
};
mainCont();*/
