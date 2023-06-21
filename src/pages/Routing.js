import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Blogs'
import BlogsDetails from './BlogsDetails'
import Cart from './Cart'
import CardDetails from './CardDetails'
import Home from './home/Home'
import Login from './Login'
import NotFound from './NotFound'
import Signup from './Signup'
import Shop from './shop/Shop'

import Admin from './admin/AddProducts'
import { Dashboard } from '@mui/icons-material'

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop/:id' element={<CardDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/*' element={<NotFound />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:id' element={<BlogsDetails />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Routing