export const convertPriceToString = (price: number)=>{
  let priceString = (Math.floor(price*100)/100).toFixed(2)
  let priceArray = priceString.split('.')
  
  return priceArray.join(',')
}