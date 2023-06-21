import React from 'react'
import { Link} from 'react-router-dom'

const HeaderCards = () => {


  return (
  <section className="pb-5 pt-7 draggable" >
  <div className="container">
    <div className="row">
      <div className="col-lg-5 mb-4">
        <div className="card h-100 mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)', backgroundSize: 'cover'}}>
          <div className="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
            <span className="me-auto">Trending Now</span>
            <h3 className="text-white font-weight-bolder me-auto">Summer Sale New Collection</h3>
            <Link to='/shop' className=" rounded-lg btn  btn-light  me-auto mt-auto  icon-move-right mb-0 ">
              Shop Collection
              <i className=" fas fa-arrow-right text-sm ms-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-7 mb-4">
        <div className="card mb-4 min-height-250 card-background align-items-start" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1534698435722-8d4dd3902268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover'}}>
          <div className="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
            <span className="me-auto">Trending Now</span>
            <h3 className="text-white font-weight-bolder me-auto">Last week best product sale up to 70% OFF</h3>
            <Link to='/shop' className="rounded-lg btn  btn-light  me-auto mb-auto  icon-move-right mt-8">
            <span>  Shop Collection</span>
              <i className="fas fa-arrow-right text-sm ms-1"/>
            </Link>
          </div>
        </div>
        <div className="card mb-0 min-height-250 card-background align-items-start" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80)', backgroundSize: 'cover'}}>
          <div className="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
            <span className="me-auto">Weekly News</span>
            <h3 className="text-white font-weight-bolder me-auto">Leather shoes for every occasion</h3>
            <Link to='/shop' className="rounded-lg btn  btn-light  me-auto mt-auto  icon-move-right mb-0">
              Shop Collection
              <i className="fas fa-arrow-right text-sm ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HeaderCards