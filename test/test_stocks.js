const assert = require("chai").assert;
const lowComesFirst = require("../stocks").validPair;


describe("Stock Profit Calc", function(){
  
  it("Should return 5", function (){
    const stocks = [1,2,6,2,3];
    assert.isTrue(maxProfit(stocks) === 5);
  });
  it("Should return -1", function (){
    const stocks = [1,1,1,1,1];
    assert.isTrue(maxProfit(stocks) === -1);
  });
  
})
