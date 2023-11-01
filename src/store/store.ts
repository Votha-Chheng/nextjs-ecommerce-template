import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import panierReducer from "./slices/panierSlice";

export const store = configureStore({
  reducer: {
    filters : filtersReducer,
    panier: panierReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch