// Runs at O(n)

module.exports = {
  maxProfit: (prices) => {
    let maxDiff = 0;
    let lowest = highest = prices[0];
    for (price of prices){
      lowest = (price < lowest ? price : lowest);
      let diff = price - lowest;
      maxDiff = (diff > maxDiff ? diff : maxDiff);
    }
    return maxDiff;
  }
  
}
