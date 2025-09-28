import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allproduct: (state,action )=>{
      const findindex = state.cartItem.findIndex((items)=>items.id == action.payload.id)
      if (findindex !== -1) {
        
        state.cartItem[findindex].qun += 1
      }else{
        state.cartItem = [...state.cartItem , action.payload]
        
      }
    },
    removeCart:(state,action )=>{
      const filtercart = state.cartItem.filter((item)=> item.id != action.payload.id)

      state.cartItem = filtercart;
    },
    incrementQuantity: (state, action) => {
      const plus = state.cartItem.find((i) => i.id === action.payload.id)
      if (plus) {
        plus.qun += 1
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload.id)
      if (item && item.qun > 1) {
        item.qun -= 1
      }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { allproduct, removeCart, incrementQuantity, decrementQuantity } = productSlice.actions

export default productSlice.reducer