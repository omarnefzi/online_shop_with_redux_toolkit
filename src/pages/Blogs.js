import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogsCard from '../components/BlogsCard'
import Loading from '../shared/loading/Loading'
import WoopsError from '../shared/WoopsError/WoopsError'
import { fetchBlogs } from '../Store/blogsSlice'

const Blogs = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const {blogs,isLoading,error}=useSelector(state=>state.blogs)
  

  return (
<>
<header className="draggable" >
  <div className="page-header min-vh-50 m-3 p-4 border-radius-xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'}}>
    <span className="mask bg-gradient-dark" />
    <div className="container h-100">
      <div className="row mt-8">
        <div className="col-lg-7 mt-auto justify-content-bottom">
          <h1 className="text-white fadeIn2 fadeInBottom" spellCheck="false">A Blog for Passionate People and Fashion  Lovers</h1>
          <p className="text-white opacity-8 fadeIn3 fadeInBottom">Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.</p>
          <button className="btn bg-gradient-primary text-xs px-4 py-2">Read article</button>
        </div>
      </div>
    </div>
  </div>
</header>

<section className="py-0 draggable" >
  <div className="row">
    <div className="col-6 text-center mx-auto mt-5 mb-4">
      <h2 spellCheck="false">Read Latest Articles</h2>
      <p>See what people from all around the world are saying about our website.
      </p></div>
  </div>
</section>
<section className="pb-6 bg-gray-100 " >
  <div className="container">
    <div className="row">
      {
        isLoading ? <Loading />:
        blogs.map((item)=>{
          return <BlogsCard key={item.id} item={item} />
        }) 
      }
    </div>
    {
      error && <WoopsError  />
    }
  </div>
</section>
</>
  )
}

export default Blogs