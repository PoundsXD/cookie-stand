'use strict';

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
      console.log(totalSales);
      this.cookiesSold.push(totalSales);
    }
  }
};
firstPike.cookieSales();
console.log(firstPike.dailyCookieSales);
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
console.log(document.getElementById('item1'));
console.log(cookiesSold);
