import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartShopping from '../components/CartShopping'
import CreditCard from '../components/CreditCard'

const Cart = () => {
  const navigate=useNavigate()
  const cartItem=useSelector(state=>state.cart)
const getTotal=cartItem.reduce((acc,product)=>{
  acc+=product.price * (product.quantity)
  return acc
},0)

  return (
    <div className=" bg-gray-300">
  <div className="py-4">
    <div className="container bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
      <div className="md:flex ">
        <div className="w-full p-4 px-5 py-5">
          <div className="md:grid md:grid-cols-3 gap-2 ">
            <div className="col-span-2 p-5">
              <h1 className="text-xl font-medium ">Shopping Cart</h1>
              <div className="flex justify-between items-center mt-6 pt-6 border-t"> 
                <div className="flex items-center">
                  <i className="fa fa-arrow-left text-sm pr-2" />
                  <button onClick={()=>navigate('/shop')} className="text-md  font-medium text-blue-500">Continue Shopping</button>
                </div>
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                  <span className="text-lg font-bold text-gray-800 "> ${getTotal.toFixed(2)}</span>
                </div>
              </div>  
              {
                cartItem.map((item)=>{
                  return <CartShopping key={item.id} item={item} />
                })
              }  
            </div>
          <CreditCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cart