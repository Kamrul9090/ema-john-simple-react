import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);


    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    // const handlerAddToCart = (selectedProduct) => {
    //     const newCart = [...cart, selectedProduct];
    //     setCart(newCart)
    //     addToDb(selectedProduct.id)
    // }


    const handlerAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        } else {

            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }



    useEffect(() => {
        const storedCart = getStoredCart();
        let saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                //get stored Cart quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }

        setCart(saveCart)
    }, [products])



    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product handlerAddToCart={handlerAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/order'>
                        <button>Review More</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;