import { useRef } from 'react'
import {FaBars,FaTimes}from 'react-icons/fa'
import {BsBagHeart}from 'react-icons/bs'
import {RxAvatar}from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

import { useSelector } from 'react-redux'



const NavBa = () => {

  const navigate=useNavigate()
  const navRef=useRef()
  const showNav=()=>{
    navRef.current.classList.toggle('responsive-nav')
  }
  const {isLogedIn}=useSelector(state=>state.users) 

  return (
    <header className='header bg-slate-50	'>
     <Link to='/'>
     <h3 className='text-black'>online <span className='text-rose-500'>  Shop</span></h3>
     </Link>
      <nav ref={navRef} className='nav ml-20' >
        
        <Link className='no-underline text-black mx-4 hover:text-red-500 ' to='/'>Home</Link>
        <Link className='no-underline text-black mx-4 hover:text-red-500 ' to='shop'>Shop</Link>
        <Link className='no-underline text-black mx-4 hover:text-red-500 ' to='blogs'>Blogs</Link>
        <Link className='no-underline text-black mx-4 hover:text-red-500 ' to='cart'>Cart</Link>
        {
          isLogedIn &&<Link className='no-underline text-black mx-4 hover:text-red-500 ' to='admin'>Dashboard</Link>
        }

        

      <button className='nav-btn nav-close-btn	' onClick={showNav}>
        <FaTimes />
      </button >
      
      </nav>
    
      <button  className='nav-btn  ' onClick={showNav}>
        <FaBars />
      </button>
   
      <div className='flex items-center' >
     <button   className='mr-4 rounded-full  bg-gradient-to-r from-rose-200 md:from-rose-200	 p-2' onClick={()=>navigate('/signup')}>  <RxAvatar />
     </button>
    <button className=' rounded-full  bg-gradient-to-r from-rose-200 md:from-rose-200	 p-2' onClick={()=>navigate('/cart')}>  <BsBagHeart /> 

    
    </button>

    </div>
      
    </header>
  )
}

export default NavBa