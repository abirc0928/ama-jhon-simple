import React from 'react';

const ReviewItem = (props) => {

    const {name, quantity, key, price} = props.cartItem;
    const reviewItemStyel = {
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyel} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)}className='mainButton'>Remove Item</button>
        </div>
    );
};

export default ReviewItem;