import React from 'react'
import BlogsCard from '../../../components/BlogsCard'

const TheBlogs = ({data}) => {
  return (
    <>
<section className="py-0 draggable" >
  <div className="row">
    <div className="col-6 text-center mx-auto mt-5 mb-4">
      <h2 spellCheck="false">Read Latest Articles</h2>
      <p>See what people from all around the world are saying about our website.
      </p></div>
  </div>
</section>
<section className="pb-6 bg-gray-100 draggable" >
  <div className="container">
    <div className="row">
      {
        data.map((item)=>{
          return <BlogsCard key={item.id} item={item} />
        })
      }
    </div>
  </div>
</section>

    </>

  )
}

export default TheBlogs