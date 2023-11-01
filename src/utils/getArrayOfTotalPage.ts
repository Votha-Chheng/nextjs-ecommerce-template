export const getArrayOfTotalPage = (totalProducts: number, nbItemsToDisplay: number): number[]=> {
  const totalPages = Math.floor(totalProducts/nbItemsToDisplay) + 1
  
  return Array.from(Array(totalPages+1).keys())
}