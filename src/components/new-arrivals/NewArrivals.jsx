import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard';

const NewArrivals = () => {

    const [products, setProducts] = useState([]);

    
    async function getProducts() {
      
  
        const res = await fetch("https://dummyjson.com/products?limit=4");
        const data = await res.json();
        setProducts(data.products); 
        
     
    }

    useEffect(() => {
      getProducts();
    }, []);

  return (
   
    <section className="cards-container">
        <div className="card-heading">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div className="card-item flex center wrap">
          {products.map((product)=>{
            return(
             
              <ProductCard 
               rating={product.rating}
               id={product.id}
               price={product.price}
               title={product.title}
               imageUrl={product.thumbnail} />
          )})

          }
          
        </div>
        
        <div className="view-all-btn flex center">
            <button className="show-all">View All</button>
        </div>
    </section>
  )
}

export default NewArrivals