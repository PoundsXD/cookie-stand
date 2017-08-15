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
//First and pike store
document.getElementById('item1').innerHTML = firstPike.cookiesSold[0];
document.getElementById('item2').innerHTML = firstPike.cookiesSold[1];
document.getElementById('item3').innerHTML = firstPike.cookiesSold[2];
document.getElementById('item4').innerHTML = firstPike.cookiesSold[3];
document.getElementById('item5').innerHTML = firstPike.cookiesSold[4];
document.getElementById('item6').innerHTML = firstPike.cookiesSold[5];
document.getElementById('item7').innerHTML = firstPike.cookiesSold[6];
document.getElementById('item8').innerHTML = firstPike.cookiesSold[7];
document.getElementById('item9').innerHTML = firstPike.cookiesSold[8];
document.getElementById('item10').innerHTML = firstPike.cookiesSold[9];
document.getElementById('item11').innerHTML = firstPike.cookiesSold[10];
document.getElementById('item12').innerHTML = firstPike.cookiesSold[11];
document.getElementById('item13').innerHTML = firstPike.cookiesSold[12];
document.getElementById('item14').innerHTML = firstPike.cookiesSold[13];
document.getElementById('item15').innerHTML = firstPike.dailyCookieSales;
document.getElementById('item16').innerHTML = firstPike.storeName;
//SeaTac Airport store
document.getElementById('store2item1').innerHTML = seaTac.cookiesSold[0];
document.getElementById('store2item2').innerHTML = seaTac.cookiesSold[1];
document.getElementById('store2item3').innerHTML = seaTac.cookiesSold[2];
document.getElementById('store2item4').innerHTML = seaTac.cookiesSold[3];
document.getElementById('store2item5').innerHTML = seaTac.cookiesSold[4];
document.getElementById('store2item6').innerHTML = seaTac.cookiesSold[5];
document.getElementById('store2item7').innerHTML = seaTac.cookiesSold[6];
document.getElementById('store2item8').innerHTML = seaTac.cookiesSold[7];
document.getElementById('store2item9').innerHTML = seaTac.cookiesSold[8];
document.getElementById('store2item10').innerHTML = seaTac.cookiesSold[9];
document.getElementById('store2item11').innerHTML = seaTac.cookiesSold[10];
document.getElementById('store2item12').innerHTML = seaTac.cookiesSold[11];
document.getElementById('store2item13').innerHTML = seaTac.cookiesSold[12];
document.getElementById('store2item14').innerHTML = seaTac.cookiesSold[13];
document.getElementById('store2item15').innerHTML = seaTac.dailyCookieSales;
document.getElementById('store2item16').innerHTML = seaTac.storeName;
//Seattle Center
document.getElementById('store3item1').innerHTML = seacenter.cookiesSold[0];
document.getElementById('store3item2').innerHTML = seacenter.cookiesSold[1];
document.getElementById('store3item3').innerHTML = seacenter.cookiesSold[2];
document.getElementById('store3item4').innerHTML = seacenter.cookiesSold[3];
document.getElementById('store3item5').innerHTML = seacenter.cookiesSold[4];
document.getElementById('store3item6').innerHTML = seacenter.cookiesSold[5];
document.getElementById('store3item7').innerHTML = seacenter.cookiesSold[6];
document.getElementById('store3item8').innerHTML = seacenter.cookiesSold[7];
document.getElementById('store3item9').innerHTML = seacenter.cookiesSold[8];
document.getElementById('store3item10').innerHTML = seacenter.cookiesSold[9];
document.getElementById('store3item11').innerHTML = seacenter.cookiesSold[10];
document.getElementById('store3item12').innerHTML = seacenter.cookiesSold[11];
document.getElementById('store3item13').innerHTML = seacenter.cookiesSold[12];
document.getElementById('store3item14').innerHTML = seacenter.cookiesSold[13];
document.getElementById('store3item15').innerHTML = seacenter.dailyCookieSales;
document.getElementById('store3item16').innerHTML = seacenter.storeName;
//Capitol Hill
document.getElementById('store4item1').innerHTML = capitolhill.cookiesSold[0];
document.getElementById('store4item2').innerHTML = capitolhill.cookiesSold[1];
document.getElementById('store4item3').innerHTML = capitolhill.cookiesSold[2];
document.getElementById('store4item4').innerHTML = capitolhill.cookiesSold[3];
document.getElementById('store4item5').innerHTML = capitolhill.cookiesSold[4];
document.getElementById('store4item6').innerHTML = capitolhill.cookiesSold[5];
document.getElementById('store4item7').innerHTML = capitolhill.cookiesSold[6];
document.getElementById('store4item8').innerHTML = capitolhill.cookiesSold[7];
document.getElementById('store4item9').innerHTML = capitolhill.cookiesSold[8];
document.getElementById('store4item10').innerHTML = capitolhill.cookiesSold[9];
document.getElementById('store4item11').innerHTML = capitolhill.cookiesSold[10];
document.getElementById('store4item12').innerHTML = capitolhill.cookiesSold[11];
document.getElementById('store4item13').innerHTML = capitolhill.cookiesSold[12];
document.getElementById('store4item14').innerHTML = capitolhill.cookiesSold[13];
document.getElementById('store4item15').innerHTML = capitolhill.dailyCookieSales;
document.getElementById('store4item16').innerHTML = capitolhill.storeName;
//Alki
document.getElementById('store5item1').innerHTML = alk.cookiesSold[0];
document.getElementById('store5item2').innerHTML = alk.cookiesSold[1];
document.getElementById('store5item3').innerHTML = alk.cookiesSold[2];
document.getElementById('store5item4').innerHTML = alk.cookiesSold[3];
document.getElementById('store5item5').innerHTML = alk.cookiesSold[4];
document.getElementById('store5item6').innerHTML = alk.cookiesSold[5];
document.getElementById('store5item7').innerHTML = alk.cookiesSold[6];
document.getElementById('store5item8').innerHTML = alk.cookiesSold[7];
document.getElementById('store5item9').innerHTML = alk.cookiesSold[8];
document.getElementById('store5item10').innerHTML = alk.cookiesSold[9];
document.getElementById('store5item11').innerHTML = alk.cookiesSold[10];
document.getElementById('store5item12').innerHTML = alk.cookiesSold[11];
document.getElementById('store5item13').innerHTML = alk.cookiesSold[12];
document.getElementById('store5item14').innerHTML = alk.cookiesSold[13];
document.getElementById('store5item15').innerHTML = alk.dailyCookieSales;
document.getElementById('store5item16').innerHTML = alk.storeName;
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
