import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const register=createAsyncThunk('user/register',async({userData,navigate},rejectWithValue)=>{
  try{
    const {data}= await axios.post('http://localhost:3000/users' ,userData)

      navigate('/login')
      return data[0]
    
  }catch(error){
  
    return rejectWithValue(error.message);
  }
})
export const login=createAsyncThunk('user/login',async({userData,navigate,toast},rejectWithValue)=>{
try{
  const {data}= await axios.get('http://localhost:3000/users?email=' + userData.email + "&password="  + userData.password)
if(data.length >0){
  navigate('/shop')
  toast.success('You are connected')
  return data[0]
}else{
  toast.error('Check you info')
}
}catch(error){
  
  return rejectWithValue(error.message);
}
})
const userSlice = createSlice({
  name: 'user',
  initialState:{
    isLogedIn:false,
    loading:false,
    users:[],
    error:false
  },
  reducers: {
  
  },
  extraReducers:(builder)=>{
    builder
    
    .addCase(register.pending,(state,_)=>{
      state.loading=true
      state.error=false
  
      }).addCase(register.fulfilled,(state,action)=>{
        state.loading=false
        state.users.push(action.payload)
    })
    .addCase(register.rejected,(state,_)=>{
      state.loading=false
      state.error=true


  })
    .addCase(login.pending,(state,_)=>{
      state.loading=true
      state.error=false

    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading=false
      state.isLogedIn=true
      state.users = action.payload;
    })
    .addCase(login.rejected, (state, _) => {
      state.loading=false
      state.error=true
    });
  }

});



export default userSlice.reducer