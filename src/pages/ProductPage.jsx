import { useParams } from 'react-router-dom'
import  {React , useEffect, useState } from "react";

const ProductPage = ({cartItems,setCartItems}) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  async function getProductById() {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();

    setProduct(data);
    // console.log(data);
  }

  useEffect(() => {
    getProductById();
  }, []);

  function addItemToCart() {
    const newArray = [...cartItems, productId];
    setCartItems(newArray);

    //saving same data in localstorage
    localStorage.setItem("cartItem", JSON.stringify(newArray));
  }
   
  return (
     <div >
    {product && (
      <div className="product-detail flex"  >
        <div className="product-img" >
        <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="text-content">
                <div className="title">
                    <h2>{product.title}</h2>
                </div>
                
                <div className="pricing">
                    <p>Price: $ {product.price}</p> <br />
                    <p>Discount: {product.discountPercentage}%</p>
                </div>
                
                <div className="description">
                    <p> {product.description}</p>
                </div>
                <hr />
                <div className="product-size">
                    <p>Choose Size</p>
                    <button className="small">Small</button>
                    <button className="medium">Medium</button>
                    <button className="large">Large</button>
                    <button className="x-large">X-large</button>
                </div>
                <hr />
                <div className="add-to-card">
                    <button onClick={() => addItemToCart()}>Add to Cart</button>
                </div>
            </div>
      </div>)}
  </div>
      )
}

export default ProductPage


