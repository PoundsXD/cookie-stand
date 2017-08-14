'use strict';

var firstPike = {
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  cookiesSold:[],
  cookieSales: function() {
    for (var i = 0; i < 15; i++) {
      var sales = Math.floor(Math.random(this.avgCookie) * (this.maxCust - this.minCust) + this.minCust);
      console.log(sales);
      this.cookiesSold.push[sales];
    }
  }
};
firstPike.cookieSales();
