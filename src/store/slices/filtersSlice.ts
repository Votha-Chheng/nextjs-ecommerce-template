import { Filters, Sort } from '@/@types/filters'
import { Product } from '@/@types/product'
import { sortByDate } from '@/utils/sortBydate'
import {  PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FiltersState {
  loading : boolean,
  allProducts : Product[], 
  filteredProducts : Product[],
  productsFoundWithoutPagination: Product[],
  filters : Filters,
  productPagination : {
    currentPage : number,
    totalPages: number,
    numberOfItemsToDisplay : number,
  } 
}

const initialState: FiltersState = {
  loading : true,
  allProducts : [], 
  filteredProducts : [],
  productsFoundWithoutPagination: [],
  filters : {
    minPrice : 0,
    maxPrice : undefined,
    category : 'tous les produits',
    sort : 'newer',
  },
  productPagination : {
    currentPage : 1,
    totalPages: 0,
    numberOfItemsToDisplay : 20,
  } 
}

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>)=> {
      state.allProducts = action.payload
    },
    changeMinPrice: (state, action: PayloadAction<number>)=> {
      state.filters.minPrice = action.payload
    },
    changeMaxPrice: (state, action: PayloadAction<number|undefined>)=> {
      state.filters.maxPrice = action.payload
    },
    changeCategory: (state, action: PayloadAction<string>)=> {
      state.filters.category = action.payload
    },
    changeSort: (state, action: PayloadAction<Sort>)=> {
      state.filters.sort = action.payload
    },
    changeCurrentPage: (state, action: PayloadAction<number>)=> {
      state.productPagination.currentPage = action.payload
    },
    changeNbItemsToDisplay: (state, action: PayloadAction<number>)=> {
      state.productPagination.numberOfItemsToDisplay = action.payload
    },
    getFilteredProducts : (state)=> {
      const {category, minPrice, maxPrice, sort} = state.filters
      const {currentPage, numberOfItemsToDisplay} = state.productPagination

      let tempProducts = state.allProducts

      if(minPrice) {
        tempProducts = tempProducts.filter(product => product.prix> minPrice)
      }
      if(maxPrice) {
        tempProducts = tempProducts.filter(product => product.prix < maxPrice)
      }
      if(category!=='tous les produits'){
        tempProducts = tempProducts.filter(product => product.category === category)
      }
      if(sort==='newer'){
        tempProducts = sortByDate(tempProducts, "newer") as Product[]
      }
      if(sort==='older'){
        tempProducts = sortByDate(tempProducts, "older") as Product[]
      }
      if(sort==='higher'){
        tempProducts = tempProducts.sort((a, b)=> a.prix - b.prix)
      }
      if(sort==='lower'){
        tempProducts = tempProducts.sort((a, b)=> b.prix - a.prix)
      }
      state.productsFoundWithoutPagination = tempProducts
      state.productPagination.totalPages = Math.floor(tempProducts.length/numberOfItemsToDisplay) + 1 

      let productPaginate = tempProducts.slice(((currentPage-1)*numberOfItemsToDisplay), (numberOfItemsToDisplay*(currentPage)))

      state.filteredProducts = productPaginate
    }
  }
})

export const { getFilteredProducts, getProducts, changeMaxPrice, changeMinPrice, changeCategory, changeSort, changeCurrentPage, changeNbItemsToDisplay } = FiltersSlice.actions

export default FiltersSlice.reducer