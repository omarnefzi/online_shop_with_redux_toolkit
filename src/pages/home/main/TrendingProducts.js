import React from 'react'
import { useSelector } from 'react-redux';

import CustomCard from '../../../components/CustomCard'

const TrendingProducts = ({data}) => {
  const {error} = useSelector((state) => state.products);

  return (
<section className="pb-3 draggable" >
  <div className="container">
    <div className="row mb-4">
      <div className="col-12 text-center">
        <h3 className="mb-5" spellCheck="false">View Tranding Products</h3>
      </div>
      {
  error &&<p className=' text-center '> Sorry, we couldn't retrieve the data at the moment. Please try again later.</p>

}

      {
          data.map((item)=>{
            return <CustomCard key={item.id} item={item} />
          })
      }
      <div className="col-12 mt-5 text-center">
        <a href="javascript" className="btn bg-gradient-dark">View All</a>
      </div>
    </div>
  </div>
</section>

  )
}

export default TrendingProducts