import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../Store/productSlice'

const Admin = () => {
  const dispatch=useDispatch()
  const [newProduct,setNewProduct]=useState({
    title:'',
    price:'',
    image:'',
    category:'',
    discount:'',
    rating:{
      rate:0,
      count:0,
    },
    description:'',


  })

  const handleChange=(e)=>{
    setNewProduct({
      ...newProduct,
      [e.target.name]:e.target.value
    })
  }

  const HandleNewProduct=(e)=>{
    
dispatch(addNewProduct(newProduct))
  }

  return (
<header className="m-8" >

  <div className="container">
    <div className="row bg-white shadow mt-n5 border-radius-lg pb-4 p-3 mx-sm-0 mx-1 position-relative">
      <div className="col-lg-3 mt-2">
        <div className="input-group">
          <input className="form-control" name='title' onChange={(e)=>handleChange(e)}  placeholder="Set the title.." aria-label="Set the title.. " type="text" />
        </div>
      </div>
      <div className="col-lg-3 mt-2">
        <div className="input-group">
          <input className="form-control" name='price' onChange={(e)=>handleChange(e)} placeholder="Set the price.." aria-label="Set the price.." type="number"  />
        </div>
      </div>
      <div className="col-lg-3 mt-2">
        <div className="input-group">
          <input className="form-control" name='category' onChange={(e)=>handleChange(e)} placeholder="Set the Category" aria-label="Set the category.." type="text"  />
        </div>
      </div>
      <div className="col-lg-3 mt-2">
        <button onClick={(e)=>HandleNewProduct(e)}  className="btn bg-gradient-success w-100 mb-0" >Add Product</button>
      </div>
      <div className="col-md-12  text-center">
        <button  name='category'  onChange={(e)=>handleChange(e)}  className="btn btn-light mt-4 mb-0 ">
          Men
        </button>
        <button  name='category' onChange={(e)=>handleChange(e)} className="btn btn-light mt-4 mb-0  ml-2">
          Women
        </button>
        <button name='category' onChange={(e)=>handleChange(e)}  className="btn btn-light mt-4 mb-0 ml-2">
        Unisex
        </button>
        <button name='category' onChange={(e)=>handleChange(e)}  className="btn btn-light mt-4 mb-0 ml-2">
          Jewelry
        </button>
        <div className="btn btn-light mt-4 mb-0 ml-2">
          Real Estate
        </div>
        
      </div>
    </div>
  </div>
</header>


  )
}

export default Admin