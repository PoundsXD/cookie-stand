'use strict';

var firstPike = {
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
      this.cookiesSold.push[totalSales];
    }
  }
};
firstPike.cookieSales();
console.log(firstPike.dailyCookieSales);
document.getElementById('item1').innerHTML = firstPike.cookiesSold[0];
