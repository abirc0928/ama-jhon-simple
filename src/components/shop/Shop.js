import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import './shop.css'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom'


const Shop = (props) => {
    const fast10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(fast10);
    const [cart, setCart] = useState([]);
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
    const handleAddProduct = (product) => {

        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        products={pd}
                        handleAddProduct={handleAddProduct}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='main-button'>Review order</button>
                        </Link>
                    </Cart>
                }

            </div>
        </div>
    );
};

export default Shop;