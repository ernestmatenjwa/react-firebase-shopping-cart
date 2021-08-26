import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import './login.css'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
       <div className="backgground">
       {products.length !== 0 }
            <div className='products-container' >
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price' >
                            R {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' style={{backgroundColor: "blue"}} onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
       </div>
           
        </>
    )
}
export default Products;
