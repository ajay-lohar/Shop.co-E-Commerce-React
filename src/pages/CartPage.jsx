import React from 'react'

const CartPage = ({cartItems}) => {

    return (
        <div  >
            <h1 >Cart Page</h1>




            
            {/* {cartItems.map((item) => (
                <div key={item.id} className='cart-product' >
                    <img src={item.imageUrl} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <p>ReturnPolicy : {item.returnPolicy}</p>
                    
                </div>
            ))} */}
        </div>
    )
  }
  
export default CartPage