import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts=createAsyncThunk('products/fetchProducts',async(_,rejectWithValue)=>{
try{
const {data}= await axios.get(' http://localhost:3000/products')
return data
}catch(error){
return  rejectWithValue(error.message)
}
})
export const fetchProductsById=createAsyncThunk('products/fetchProducts',async(id,rejectWithValue)=>{
  try{
  const {data}= await axios.get(' http://localhost:3000/products/' + id)
  return data
  }catch(error){
  return  rejectWithValue(error.message)
  }
  })
export const addNewProduct=createAsyncThunk('products/addNewProduct',async(newProduct,rejectWithValue)=>{
  try{
    const {data}= await axios.post(' http://localhost:3000/products',newProduct)
    return data
  }catch(error){
  return  rejectWithValue(error.message)
  }
  })
  
export const productSlice=createSlice({
  name:'products',
  initialState:{
    products:[],
    isLoading:false,
    error:false,
  },
  reducers : {
    removeProduct:(state,action)=>{
      state.products= state.products.filter(item=>item.id !== action.payload.id)

    }

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state,_)=>{
      state.isLoading=true
     state.error=false

    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isLoading=false
      state.products=action.payload
    })
    
    .addCase(fetchProducts.rejected,(state,_)=>{
      state.isLoading=false
      state.error=true
    })
    .addCase(addNewProduct.pending,(state,_)=>{
     state.isLoading=true
     state.error=false
    })
    .addCase(addNewProduct.fulfilled,(state,action)=>{
    state.isLoading=false
      state.products.push(action.payload)
    })
    .addCase(addNewProduct.rejected,(state,action)=>{
      state.isLoading=false
      state.error=action.payload
    })
  },
});

export const {removeProduct}=productSlice.actions
export default productSlice.reducer