'use strict';

var firstPike = {
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  cookieSales: function() {
    var sales = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(sales);
  }
};
