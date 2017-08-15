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
  cookieSales2: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales2 = totalSales + this.dailyCookieSales2;
      this.cookiesSold2.push(totalSales);
    }
  }
};
seaTac.cookieSales2();
document.getElementById('store2item1').innerHTML = seaTac.cookiesSold2[0];
document.getElementById('store2item2').innerHTML = seaTac.cookiesSold2[1];
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
var seacenter = {
  storeName: 'Seattle Center.',
  minCust:11,
  maxCust:38,
  avgCookie:3.7,
  cookiesSold3:[],
  dailyCookieSales3: 0,
  cookieSales3: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales3 = totalSales + this.dailyCookieSales3;
      this.cookiesSold3.push(totalSales);
    }
  }
};
seacenter.cookieSales3();
document.getElementById('store3item1').innerHTML = seacenter.cookiesSold3[0];
document.getElementById('store3item2').innerHTML = seacenter.cookiesSold3[1];
document.getElementById('store3item3').innerHTML = seacenter.cookiesSold3[2];
document.getElementById('store3item4').innerHTML = seacenter.cookiesSold3[3];
document.getElementById('store3item5').innerHTML = seacenter.cookiesSold3[4];
document.getElementById('store3item6').innerHTML = seacenter.cookiesSold3[5];
document.getElementById('store3item7').innerHTML = seacenter.cookiesSold3[6];
document.getElementById('store3item8').innerHTML = seacenter.cookiesSold3[7];
document.getElementById('store3item9').innerHTML = seacenter.cookiesSold3[8];
document.getElementById('store3item10').innerHTML = seacenter.cookiesSold3[9];
document.getElementById('store3item11').innerHTML = seacenter.cookiesSold3[10];
document.getElementById('store3item12').innerHTML = seacenter.cookiesSold3[11];
document.getElementById('store3item13').innerHTML = seacenter.cookiesSold3[12];
document.getElementById('store3item14').innerHTML = seacenter.cookiesSold3[13];
document.getElementById('store3item15').innerHTML = seacenter.cookiesSold3[14];
document.getElementById('store3item16').innerHTML = seacenter.dailyCookieSales3;
document.getElementById('store3item17').innerHTML = seacenter.storeName;
//Capitol Hill
var capitolhill = {
  storeName: 'Capitol Hill.',
  minCust:20,
  maxCust:38,
  avgCookie:2.3,
  cookiesSold4:[],
  dailyCookieSales4: 0,
  cookieSales4: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales4 = totalSales + this.dailyCookieSales4;
      this.cookiesSold4.push(totalSales);
    }
  }
};
capitolhill.cookieSales4();
document.getElementById('store4item1').innerHTML = capitolhill.cookiesSold4[0];
document.getElementById('store4item2').innerHTML = capitolhill.cookiesSold4[1];
document.getElementById('store4item3').innerHTML = capitolhill.cookiesSold4[2];
document.getElementById('store4item4').innerHTML = capitolhill.cookiesSold4[3];
document.getElementById('store4item5').innerHTML = capitolhill.cookiesSold4[4];
document.getElementById('store4item6').innerHTML = capitolhill.cookiesSold4[5];
document.getElementById('store4item7').innerHTML = capitolhill.cookiesSold4[6];
document.getElementById('store4item8').innerHTML = capitolhill.cookiesSold4[7];
document.getElementById('store4item9').innerHTML = capitolhill.cookiesSold4[8];
document.getElementById('store4item10').innerHTML = capitolhill.cookiesSold4[9];
document.getElementById('store4item11').innerHTML = capitolhill.cookiesSold4[10];
document.getElementById('store4item12').innerHTML = capitolhill.cookiesSold4[11];
document.getElementById('store4item13').innerHTML = capitolhill.cookiesSold4[12];
document.getElementById('store4item14').innerHTML = capitolhill.cookiesSold4[13];
document.getElementById('store4item15').innerHTML = capitolhill.cookiesSold4[14];
document.getElementById('store4item16').innerHTML = capitolhill.dailyCookieSales4;
document.getElementById('store4item17').innerHTML = capitolhill.storeName;
//Alki
var alk = {
  storeName: 'Alki.',
  minCust:2,
  maxCust:16,
  avgCookie:4.6,
  cookiesSold5:[],
  dailyCookieSales5: 0,
  cookieSales5: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var totalSales = Math.floor(sales * this.avgCookie);
      this.dailyCookieSales5 = totalSales + this.dailyCookieSales5;
      this.cookiesSold5.push(totalSales);
    }
  }
};
alk.cookieSales5();
document.getElementById('store5item1').innerHTML = alk.cookiesSold5[0];
document.getElementById('store5item2').innerHTML = alk.cookiesSold5[1];
document.getElementById('store5item3').innerHTML = alk.cookiesSold5[2];
document.getElementById('store5item4').innerHTML = alk.cookiesSold5[3];
document.getElementById('store5item5').innerHTML = alk.cookiesSold5[4];
document.getElementById('store5item6').innerHTML = alk.cookiesSold5[5];
document.getElementById('store5item7').innerHTML = alk.cookiesSold5[6];
document.getElementById('store5item8').innerHTML = alk.cookiesSold5[7];
document.getElementById('store5item9').innerHTML = alk.cookiesSold5[8];
document.getElementById('store5item10').innerHTML = alk.cookiesSold5[9];
document.getElementById('store5item11').innerHTML = alk.cookiesSold5[10];
document.getElementById('store5item12').innerHTML = alk.cookiesSold5[11];
document.getElementById('store5item13').innerHTML = alk.cookiesSold5[12];
document.getElementById('store5item14').innerHTML = alk.cookiesSold5[13];
document.getElementById('store5item15').innerHTML = alk.cookiesSold5[14];
document.getElementById('store5item16').innerHTML = alk.dailyCookieSales5;
document.getElementById('store5item17').innerHTML = alk.storeName;
