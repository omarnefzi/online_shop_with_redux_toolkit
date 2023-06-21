import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { DeleteBtn } from '../shared/Buttons'
import { decrement, increment, removeFromCart } from '../Store/cartSlice'


const CartShopping = ({item}) => {
  const dispatch=useDispatch()
  const handleRemove=()=>{
    dispatch(removeFromCart(item))
    toast.warning(`you removed the ${item.title}`)
  }
  return (
    <>
    <div className="flex justify-between items-center mt-6 pt-6">
                <div className="flex  items-center">
                
                  <img src={item.image} alt={item.title} width={60} className="rounded-full " />
                  <div className="flex flex-col ml-3">
                    
                    <span className="md:text-md font-medium">{item.title}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="pr-8 flex ">

                    <button className="font-semibold" onClick={()=>dispatch(decrement(item))}>-</button>
                    <span  className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"  >{item.quantity} </span>
                    <button className="font-semibold" onClick={()=>dispatch(increment(item))}>+</button>
                  </div>
                  
                  <div className="pr-8 ">
                    <span className="text-xs font-medium">${item.price}</span>
                  </div>
                  <div>
                    <button onClick={handleRemove} >  <DeleteBtn /> </button>
                  </div>
                </div>
              </div>
    </>
      
   
  )
}

export default CartShopping