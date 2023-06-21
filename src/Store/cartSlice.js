import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: 'cartSlice',
  initialState:[],
  reducers: {
    addToCard:(state,action)=>{
      const findProduct=state.find((item)=>item.id === action.payload.id)
      if(findProduct){
        findProduct.quantity+=1
      }else{

        state.push({...action.payload,quantity:1})
      }
    },
    removeFromCart:(state,action)=>{
      return state.filter(product=>product.id !== action.payload.id)
    },
    increment:(state,action)=>{
    const product=state.find((item)=>item.id === action.payload.id)
    if(product){
      product.quantity+=1
    }
    },
    decrement:(state,action)=>{
    const product=state.find(item=>item.id === action.payload.id)
    if(product && product.quantity>1){
      product.quantity -=1
    }
    }
  
  }
});

export const {addToCard,removeFromCart,increment,decrement} = cartSlice.actions

export default cartSlice.reducer