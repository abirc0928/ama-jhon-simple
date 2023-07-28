import React from 'react';

const ReviewItem = (props) => {

    const { img, name, quantity, key, price } = props.cartItem;
    const reviewItemStyel = {
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div className='product'>
            <div className='img'>
                <img className='product-img' src={img} alt="" />
            </div>
            <div  className='review-item'>
                <h4 className='product-name'>{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>$ {price}</small></p>
                <br />
                <button onClick={() => props.removeProduct(key)} className='mainButton'>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;