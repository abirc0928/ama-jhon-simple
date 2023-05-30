import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Order Inventory</a>
            </nav>
        </div>
    );
};

export default Header;