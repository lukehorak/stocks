const assert = require("chai").assert;
const maxProfit = require("../bruteStocks");

describe("Brute Force Stock Profit Calc", function(){
  it("Should return 5", function (){
    const stocks = [1,2,6,2,3];
    assert.isTrue(maxProfit(stocks) === 5);
  });
  it("Should return -1", function (){
    const stocks = [1,1,1,1,1];
    assert.isTrue(maxProfit(stocks) === -1);
  });
  it("Should return 16", function (){
    const stocks = [45, 24, 35, 31, 40, 38, 11];
    assert.isTrue(maxProfit(stocks) === 16);
  });
})
