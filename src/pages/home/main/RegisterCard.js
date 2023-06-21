import React from 'react'
import { Link } from 'react-router-dom'

const RegisterCard = () => {
  return (

<section className="my-4 py-5 bg-gradient-dark position-relative draggable" style={{backgroundImage: 'url(https://i.pinimg.com/564x/54/e1/86/54e1863899c58af95e3d3f1727601e95.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} >
  <span className="mask bg-gradient-dark opacity-8" />
  <div className="container position-relative z-index-2">
    <div className="row">
      <div className="col-md-7 mx-auto text-center">
        <h3 className="text-white mb-3" >
          Get Your Promo Code!</h3>
        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
        <Link to='/signup' className="btn btn-warning bg-gradient-warning">Register now</Link>
      </div>
    </div>
  </div>
</section>


  )


}

export default RegisterCard