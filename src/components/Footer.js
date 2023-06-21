import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="footer py-5 bg-gradient-dark position-relative overflow-hidden draggable " >
  <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/shapes/waves-white.svg" alt="pattern-lines" className="position-absolute start-0 top-0 w-100 opacity-6" />
  <div className="container position-relative z-index-1">
    <div className="row">
      <div className="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
        <h6 className="text-white font-weight-bolder text-uppercase mb-lg-4 mb-3">Fashion</h6>
        <ul className="nav flex-row ms-n3 align-items-center mb-4 mt-sm-0">
          <li className="nav-item">
            <Link to='/' className="nav-link text-white opacity-8" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/shop' className="nav-link text-white opacity-8" >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/blogs' className="nav-link text-white opacity-8" >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/signup' className="nav-link text-white opacity-8" >
              Signup
            </Link>
          </li>
        </ul>
        <p className="text-sm text-white opacity-8 mb-0">
          Copyright © 20232022 Soft by Creative Tim.
        </p>
      </div>
      <div className="col-lg-6 ms-auto text-lg-end text-center">
        <p className="mb-5 text-lg text-white font-weight-bold">
          The reward for getting on the stage is fame. The price of fame is you can’t get off the stage.
        </p>
        <Link to=''  className="text-white me-xl-4 me-4 opacity-5">
          <span className="fab fa-dribbble"  />
        </Link>
        <Link to='' className="text-white me-xl-4 me-4 opacity-5">
          <span className="fab fa-twitter"  />
        </Link>
        <Link className="text-white me-xl-4 me-4 opacity-5">
          <span className="fab fa-pinterest"  />
        </Link>
        <Link to=''  className="text-white opacity-5">
          <span className="fab fa-github"  />
        </Link>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer