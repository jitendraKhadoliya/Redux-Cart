import React, {  useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";



// const URL = "https://fakestoreapi.com/products";

const Products = () => {

  // here i am going ti fetch the data using fetch method for that i AM GOING TO  use effect and use state for normally
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // through useSelector I will get the data from my redux store 

  const {data : products ,status} = useSelector(state=>state.product)

  useEffect(() => {
    
    dispatch(fetchProducts())
  
  
    // here i commenting this because i will get the data frm store
    // const fetchedData = async () => {
    //   const res = await fetch(URL);
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchedData();
  }, [dispatch]);

  const handleAdd = (element)=>{
    dispatch(add(element));
  }


  // here we will check status and make changes according to it
  // for showing loading on screen
  if(status===STATUS.LOADING){
    return <h1>Loading.....</h1>
  }

  // if we get error then we will show it here
  if(status===STATUS.ERROR){
    return <h1>Something Went Wrong....</h1>
  }


  return (
    <>
      <h4>All Products</h4>
      <div className="productsWrapper">
        {products.map((element) => {
          return (
            <div className="card" key={element.id} >
              <img src={element.image} alt="Product" style={{height:'80px'}} />
              <h4>{element.title}</h4>
              <h5>$ {element.price}</h5>
              <button className="btn" onClick={()=>handleAdd(element)} >Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
