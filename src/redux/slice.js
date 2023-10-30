import { createSlice } from '@reduxjs/toolkit';
import {
  SubtractQuantityReducer,
  addQuantityReducer,
  addToCardReducer,
  deleteAllReducer,
  deleteReducer,
} from './reducers';
import { products } from '@/data/en/products';

const InitialState = {
  allProducts: products,
  shop: [],
};

const AppSlice = createSlice({
  name: 'AppSlice',
  initialState: InitialState,
  reducers: {
    addToCard: addToCardReducer,
    deleteFromCard: deleteReducer,
    addQuantity: addQuantityReducer,
    subtractQuantity: SubtractQuantityReducer,
    deleteAll:deleteAllReducer
  },
  extraReducers: (builder) => {
    builder;
    // .addCase()
  },
});

export const {
  search,
  addToCard,
  deleteFromCard,
  addQuantity,
  subtractQuantity,
  deleteAll
} = AppSlice.actions;
export default AppSlice.reducer;