import React from 'react'

const BottomCard = () => {
  return (
<section className="mb-5 py-5 position-relative overflow-hidden draggable" >
  <div className="container position-relative z-index-2">
    <div className="row">
      <div className="col-lg-6 mb-lg-0 mb-5">
        <div className="w-100 h-100 min-height-400 border-radius-lg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover'}}>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 m-auto text-center px-lg-7">
        <h5>Subscribe to Newsletter</h5>
        <p className="mb-5">
          Your company may not be in the software business,
          but eventually, a software company will be in your business.
        </p>
        <div className="flex justify-end">
          
          <div className="col-sm-4 ps-sm-0">
            <button  className="btn bg-gradient-dark mb-0 ms-sm-3 me-auto h-100 w-100 d-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default BottomCard