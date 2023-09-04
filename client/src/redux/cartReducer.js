import { createSlice } from  "@reduxjs/toolkit";


const cartSlice = createSlice({
  name : 'cart',
  initialState : {products : [],totalQuantity : 0},
  reducers : {
    addToCart : (state,action)=>{
      state.totalQuantity+= action.payload.quantity;
      const itemFound = state.products.find(item => item.id === action.payload.id);
      if(itemFound)
        itemFound.quantity+= action.payload.quantity;
      else
        state.products.push(action.payload);
    },
    removeFromCart : (state,action)=>{
      const itemIndex = state.products.findIndex(item=> item.id === action.payload);
      state.totalQuantity-= state.products[itemIndex].quantity;
      state.products = state.products.filter(item=> item.id !== action.payload);
    }
    ,
    resetCart : (state)=>{
      state.products = [];
      state.totalQuantity =0;
    }
  }
});

export const {addToCart,removeFromCart,resetCart} = cartSlice.actions;
export default cartSlice.reducer;
