import React from 'react';
import './product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.products
    return (
        <div className='product'>
            <div >
                <img  className='product-img' src={img} alt="" />
            </div>  
            <div>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4> 
                 <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>

                { props.showAddToCart && <button onClick={() => props.handleAddProduct(props.products)} className='mainButton'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart </button>}
            </div>

        </div>
    );
};

export default Product;