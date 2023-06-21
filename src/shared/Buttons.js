import DeleteIcon from '@mui/icons-material/Delete';
import {BsBagHeart}from 'react-icons/bs'
import {RxAvatar}from 'react-icons/rx'
import { useSelector } from 'react-redux';

export  const HomeBtn=()=>{
  return (
    <div >
  <button  className=" btn bg-gradient-dark d-inline-block mb-0"> 
  <i className=" mr-2 fas fa-arrow-left text-sm ms-1"  />
  Back Home </button>
</div>
  )
}

export const DeleteBtn=()=>{
  return (
   <div>
     <DeleteIcon />
   </div>
  )
}
export const bagBtn=()=>{
  return (
  
      <div className='	'>
         <BsBagHeart />
      </div>
   
  )
}
export const logInBtn=()=>{
  return (
   
     <button>  <RxAvatar /></button>

  )
}

export const Quantity=()=>{
  const {cart}=useSelector(state=>state)

  return (
   
    <div 
    className="rounded-circle bg-dark d-flex justify-content-center align-items-center ml-4"
    style={{
      position: "absolute",
      color: "white",
      width: "1.5rem",
      height: "1.5rem",
      bottom: "2",
      right: "2",
      transform: "tarnslate(25% 25%)",
    }}
  >
  {cart.length}
  </div>


  )
}
