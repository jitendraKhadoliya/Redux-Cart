import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartdata = useSelector((state)=>state.cart)
  return (
    <div style={{ display: "flex", alignItems: "center" ,justifyContent :'space-between' }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to={"/"}>
          Home
        </Link>
        <Link className="navLink" to={"/cart"}>
          Cart
        </Link>
      {/* here i want to show the cart data from the redux store for that i am going to use useSelector method*/}
        <span className="cartCount"> Cart Items : {cartdata.length}</span>
      </div>
    </div>
  );
};

export default Header;
