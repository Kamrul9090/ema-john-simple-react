import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { handlerAddToCart, product } = props;
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p><b>Price: ${price}</b></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handlerAddToCart(product)} className='btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;