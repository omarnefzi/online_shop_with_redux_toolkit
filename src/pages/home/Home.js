
import { useDispatch, useSelector } from 'react-redux'
import Header from './header/Header'
import HeaderCards from './header/HeaderCards'
import BottomCard from './main/BottomCard'
import FeaturedProducts from './main/FeaturedProducts'
import RegisterCard from './main/RegisterCard'
import { useState,useEffect } from 'react'
import TrendingProducts from './main/TrendingProducts'
import TheBlogs from './feet/TheBlogs'
import { fetchProducts } from '../../Store/productSlice'
import { fetchBlogs } from '../../Store/blogsSlice'


const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const {blogs}=useSelector(state=>state.blogs)

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const [tredingProducts,setTredingProducts]=useState([])
  const [featuredProducts,setFeaturedProducts]=useState([])

  useEffect(()=>{
const filteredRTredingProducts=products.filter(item=>item.rating.count <=21)
setTredingProducts(filteredRTredingProducts)
const filteredFeaturedProducts=products.filter(item=>item.rating.rate >= 4.9)
setFeaturedProducts(filteredFeaturedProducts)
  },[products])


  
  return (
    <div className='bg-slate-50'>
      <Header />
      <HeaderCards />
      <TrendingProducts  data={tredingProducts}/>
      <RegisterCard />
      <FeaturedProducts data={featuredProducts} />
      <BottomCard />
      <TheBlogs data={blogs} />

    </div>
  )
}

export default Home