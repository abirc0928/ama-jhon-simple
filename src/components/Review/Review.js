import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyImage from '../../images/giphy.gif';
import {useNavigate } from 'react-router-dom'
import Shop from '../shop/Shop';


const Review = (props) => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    // const handleProceedCheckout = () => {
    //     navigate("/shipment")
    // }

    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKey = Object.keys(saveCart)
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key]
            return product
        })
        setCart(cartProduct)
    }, [])

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    let thankyou; 
    if (orderPlaced) {
        thankyou =  <img src={happyImage} alt="" />
    }
    return (
        <div className='review-container'>
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key} cartItem={pd}>
                    </ReviewItem>)
                }
                {
                    thankyou
                }
                
            </div>
            <div>
                <Cart cart={cart}>
                    <button className='main-button'>Proceed Checkout </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;