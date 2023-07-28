import React from 'react';

import './header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <nav>
                <a href="/shop">Product</a>
                <a href="/review">Order Review</a>
                <a href="/customer">Customer list</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;