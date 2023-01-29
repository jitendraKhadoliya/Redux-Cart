import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiFillHome} from 'react-icons/ai';


const Header = () => {
  const cartdata = useSelector((state)=>state.cart)
  return (
    <div style={{ display: "flex", alignItems: "center" ,justifyContent :'space-between',margin:'0px 15px' }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to={"/"}>
        <span className="headerIcon">
         <AiFillHome/>
        </span>
        </Link>
        <Link className="navLink" to={"/cart"}>
          
          <span className="headerIcon">
          <AiOutlineShoppingCart />
          </span>
        </Link>
      {/* here i want to show the cart data from the redux store for that i am going to use useSelector method*/}
        <span className="cartCount"> Cart Items : {cartdata.length}</span>
      </div>
    </div>
  );
};

export default Header;
