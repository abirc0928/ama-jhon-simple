import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0) 

    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + cart[i].price * cart[i].quantity
    }

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0
    }
    else if (shipping > 15) {
        shipping = 4.99
    }
    else if (totalPrice > 0) {
        shipping = 12.99
    }

    const tax = (totalPrice / 10)
    const grandtotal = (totalPrice + shipping + tax);
    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h4 className="cart">My Cart</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(totalPrice)}</p>
            <p>Shipping cost: {formateNumber(shipping)}</p>
            <p><small>Tax + VAT: {formateNumber(tax)}</small></p>
            <p>Total price: {formateNumber(grandtotal)}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;