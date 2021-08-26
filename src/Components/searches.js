import React, { useContext } from 'react'
import { SearchContext } from '../Global/searchContext'
import { CartContext } from '../Global/CartContext'
import { TitleContext } from '../Components/title'
import './login.css'

export const Searches = () => {
    


    const { products } = useContext(SearchContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
       <div className="backgground">
       {products.length !== 0 }
            <div className='products-container' >
                {products.length === 0 && <div>No products was found</div>}
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
export default Searches;
