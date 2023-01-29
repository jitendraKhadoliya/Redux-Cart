import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {remove} from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productID)=>{
    dispatch(remove(productID))
  }

  return (
    <div>
      <h3>Cart Items</h3>
      <div className="cartWrapper">
        {products.map(element=>(
          <div className="cartCard" key={element.id} >
            <img src={element.image} alt="cart" />
            <h5>{element.title}</h5>
            <h5>{element.price}</h5>
            <button className="btn" onClick={()=>handleRemove(element.id)} >Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
