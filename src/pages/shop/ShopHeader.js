import React from 'react'

const ShopHeader = () => {
  return (
<header className="draggable" draggable="true">
  <div className="page-header min-vh-75 position-relative">
    <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
      <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n8" style={{backgroundImage: 'url(https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}} />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7 d-flex justify-content-center text-md-start text-center flex-column">
          <h3 className="text-gradient text-danger mb-0" spellCheck="false">The Best Fashion Shop</h3>
          <h1 className="mb-4 text-capitalize">Find everything you need for your Family</h1>
          <p className="pe-md-5 me-md-5 mb-4">The problem happens when we have multiple desires. When we have fuzzy desires. When we want to do ten different things and we’re not clear about which is the one we care about. </p>
          <div className="buttons">
            <button  className="btn bg-gradient-danger mt-4" fdprocessedid="sqt5yd">View Products</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default ShopHeader