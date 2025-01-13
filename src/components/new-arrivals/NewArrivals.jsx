import React, { useState ,useEffect} from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom'

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
             <Link key={product.id} to={`product-page/${product.id}`}>
              <div className="card">
                <div className="item-img">
                  <img src={product.thumbnail} />
                  </div>
                  <div className="item-text">
                    <p>{product.title}</p>
                    <p>
                      <div className="rating">
                       </div> 
                       </p><div className="pricing">
                        <p>{product.price}</p>
                      </div>
                    </div>
              </div>
             </ Link>
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