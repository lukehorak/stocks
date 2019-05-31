// SWEET JESUS POOH! THAT'S NOT HONEY (https://i.kym-cdn.com/photos/images/newsfeed/001/246/322/9b2.gif)
getMaxProfit = (currentMaxDiff, prices) => {
  // Base Case
  if (prices.length === 1){
    return currentMaxDiff > 0 ? currentMaxDiff : -1
  }

  let maxDiff = currentMaxDiff;
  const others = prices.slice(1);
  
  for (let price of others){
    let diff = price - prices[0]
    maxDiff = (diff > maxDiff ? diff : maxDiff)
  }
  return getMaxProfit(maxDiff, others);
}

// packaged for export
maxProfit = (arr) => {
  return getMaxProfit(0, arr);
}

module.exports = maxProfit;