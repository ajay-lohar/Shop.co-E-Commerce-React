import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({  id, price, title, imageUrl }) => {
  return (
    <Link key={id} to={`product-page/${id}`}>
              <div className="card">
                <div className="item-img">
                  <img src={imageUrl} />
                  </div>
                  <div className="item-text">
                    <p>{title}</p>
                    <p>
                      <div className="rating" >
                       </div> 
                       </p><div className="pricing">
                        <p>{price}</p>
                      </div>
                    </div>
              </div>
        </ Link>
  )
}

export default ProductCard