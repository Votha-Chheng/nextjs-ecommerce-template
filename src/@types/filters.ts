export type Sort = "newer"|"older"|"higher"|"lower"

export type Filters = {
  minPrice : number
  maxPrice ?: number
  category : string
  sort : "newer"|"older"|"higher"|"lower"
}