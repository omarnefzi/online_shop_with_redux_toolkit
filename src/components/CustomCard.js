import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCard } from '../Store/cartSlice';
import { toast } from 'react-toastify';
import { DeleteBtn } from '../shared/Buttons';
import { removeProduct } from '../Store/productSlice';

const CustomCard = ({ item }) => {
  const dispatch = useDispatch();
  const {isLogedIn}=useSelector(state=>state.users) 

  const handleAdd = () => {
    dispatch(addToCard(item));
    toast.success(` the ${item.title} added successfully`);
  };
  const handleRemove=()=>{
    dispatch(removeProduct(item))
    toast.warning(`you removed the ${item.title}`)
  }

  return (
    <div className="col-lg-3 mb-4">
      <div className="flex flex-col h-full">
        <div className="card flex-grow">
          <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <Link to={`/shop/${item.id}`} className="d-block">
              <img src={item.image} alt={item.title} />
            </Link>
          </div>
          <div className="card-body pt-3">
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-sm">{item.category}</span>
                <h4 className="card-description font-weight-bolder text-dark mb-4">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h5 className="mb-0 font-weight-bolder">${item.price}</h5>
                <h5 className="mb-0 opacity-4 text-sm ms-2">
                 {
                  isLogedIn? <button onClick={handleRemove}><DeleteBtn /></button>:  <strike>${item.discount}</strike>
                 }
                </h5>
              </div>
              <button onClick={handleAdd} className="btn btn-outline-dark mb-0">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
