import  {React, useState ,useEffect } from "react";

import { Link } from "react-router-dom";

const Header = ({cartItems,setCartItems}) => {

  const [search,setSearch ]= useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  
  const sendReq = async()=>{
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
      const data = await res.json();
      setSearchedProducts(data.products);
      // console.log(data.products)
    } catch (error) {
      console.error(error);
    }
   
  }

  useEffect(() => {
    if (search){
      sendReq();
    } else {
      setSearchedProducts([]);
    }
  }, [search]);


  return (
    <header>
      <div className="sign-up">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <a href="#"> Sign Up Now</a>
        </p>
      </div>
      <div className="navbar flex">
        <div className="main-logo flex gap">
          <a href="/">
            <h2>SHOP.CO</h2>
          </a>
        </div>
        <ul>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">On Sale</a>
          </li>
          <li>
            <a href="">New Arrivals</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
        </ul>
        <div className="search-bar">
          <div style={{position:"relative"}}>
          <input type="text" placeholder="Search for product"  onChange={(e)=>setSearch(e.target.value)} value={search} />
          {searchedProducts.slice(0, 7).map((product) => {
            return( 
            <Link className="search-inputs"
              to={`./product-page/${product.id}`}
              key={product.id}
              onClick={()=>{disp.value.toString().slice(0,-1)}}
            ><i class="fa-solid fa-magnifying-glass"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
              {product.title}
            </Link>);
          })}
          </div>
          <a href="#">
            <img src="assets/search.svg" alt="" />
          </a>
        </div>
        <div className="hugs">
          <a href="#">
          {cartItems.length}
            <img
              src="	https://ajay-lokhande455.github.io/e-commerce/assets/cart.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://ajay-lokhande455.github.io/e-commerce/assets/account.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;