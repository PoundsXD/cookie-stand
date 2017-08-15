'use strict';
//First and pike store
var firstPike = {
  storeName: '1st and Pike',
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  cookiesSold:[],
  dailyCookieSales: 0,
  cookieSales: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales = totalSales + this.dailyCookieSales;
      this.cookiesSold.push(totalSales);
    }
  }
};
firstPike.cookieSales();
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
document.getElementById('item15').innerHTML = firstPike.cookiesSold[14];
document.getElementById('item16').innerHTML = firstPike.dailyCookieSales;
document.getElementById('item17').innerHTML = firstPike.storeName;
//SeaTac Airport store
var seaTac = {
  storeName: 'SeaTac Airport',
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cookiesSold2:[],
  dailyCookieSales2: 0,
  cookieSales: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales2 = totalSales + this.dailyCookieSales2;
      this.cookiesSold2.push(totalSales);
    }
  }
};
firstPike.cookieSales();
document.getElementById('store2item1').innerHTML = seaTac.cookiesSold2[0];
document.getElementById('store2item1').innerHTML = seaTac.cookiesSold2[1];
document.getElementById('store2item3').innerHTML = seaTac.cookiesSold2[2];
document.getElementById('store2item4').innerHTML = seaTac.cookiesSold2[3];
document.getElementById('store2item5').innerHTML = seaTac.cookiesSold2[4];
document.getElementById('store2item6').innerHTML = seaTac.cookiesSold2[5];
document.getElementById('store2item7').innerHTML = seaTac.cookiesSold2[6];
document.getElementById('store2item8').innerHTML = seaTac.cookiesSold2[7];
document.getElementById('store2item9').innerHTML = seaTac.cookiesSold2[8];
document.getElementById('store2item10').innerHTML = seaTac.cookiesSold2[9];
document.getElementById('store2item11').innerHTML = seaTac.cookiesSold2[10];
document.getElementById('store2item12').innerHTML = seaTac.cookiesSold2[11];
document.getElementById('store2item13').innerHTML = seaTac.cookiesSold2[12];
document.getElementById('store2item14').innerHTML = seaTac.cookiesSold2[13];
document.getElementById('store2item15').innerHTML = seaTac.cookiesSold2[14];
document.getElementById('store2item16').innerHTML = seaTac.dailyCookieSales2;
document.getElementById('store2item17').innerHTML = seaTac.storeName;
//Seattle Center
