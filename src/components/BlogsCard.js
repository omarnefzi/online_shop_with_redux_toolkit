import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({item}) => {

  return (
    <div className="col-lg-4 mb-lg-0 mb-4">
    <div className="card">
      <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
        <Link to={`/blogs/${item.id}` } className="d-block">
          <img  className='rounded-lg' src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-body pt-3">
        <span className="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{item.topic}</span>
        <Link   className="no-underline	 card-title h5 d-block text-darker">{item.title}</Link>
        <p className="card-description mb-4">
        {item.description}
        </p>
        <div className="author align-items-center">
          <img src={item.avatarImg} alt="..." className="avatar shadow" />
          <div className="name ps-3">
            <span>{item.avatarName}</span>
            <div className="stats">
              <small> {item.postedDate} </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogsCard