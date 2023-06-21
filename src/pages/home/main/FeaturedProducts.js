import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomCard from '../../../components/CustomCard'

const FeaturedProducts = ({data}) => {
  const {error} = useSelector((state) => state.products);

  return (
<section className="pb-6 draggable" >
  <div className="container">
    <div className="row mb-4">
      <div className="col-12 text-center">
        <h3 className="mb-5" >Featured Products</h3>
      </div>

      {
  error && <p className=' text-center '> Sorry, we couldn't retrieve the data at the moment. Please try again later.</p>

}
      {
        
          data.map((item)=>{
            return <CustomCard key={item.id} item={item} />
          })
      }
      <div className="col-12 mt-5 text-center">
        <Link to='/shop' className="btn bg-gradient-dark">View All</Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default FeaturedProducts