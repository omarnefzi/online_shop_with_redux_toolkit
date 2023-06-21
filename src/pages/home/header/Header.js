import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
<header className="draggable position-relative" >
  <span className="mask bg-gradient-warning opacity-1" />
  <div className="page-header min-vh-75 position-relative">
    <div className="position-absolute top-0 start-0 w-40 h-100 d-md-block d-none">
      <div className="bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n8" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80)'}} />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-7 d-flex justify-content-center text-md-start ms-auto text-center flex-column">
          <span className="ms-md-4 ps-1 text-dark font-weight-bold text-sm mb-0" spellCheck="false">Buy 2 products and get free shipping</span>
          <h1 className="display-1 font-weight-bolder ps-0 ms-md-4 w-md-70 text-dark text-gradient text-capitalize">Best Shop Online</h1>
          <div className="buttons ms-md-4 ps-2 mt-4 d-flex mx-auto">
            <button onClick={()=>navigate('/shop')} className="btn bg-gradient-dark d-inline-block mb-0">Shop now</button>
            <div className="d-flex d-inline-block align-items-center">
              <button onClick={()=>navigate('/blogs')} className="btn btn-icon-only btn-outline-dark btn-rounded ms-3 mb-0">
                <span className="btn-inner--icon"><i className="ni ni-button-play" /></span>
              </button>
              <span className="text-uppercase ms-2 font-weight-bolder text-xs text-dark">Our story </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


  )
}

export default Header