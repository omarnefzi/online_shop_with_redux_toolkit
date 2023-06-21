import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./blogsSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

const store=configureStore({
  reducer:{
    products : productSlice,
    blogs:blogsSlice,
    cart:cartSlice,
    users:userSlice
  }
})
export default store