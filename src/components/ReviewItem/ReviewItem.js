import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, img, quantity, shipping, price, id } = product;
    console.log();
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button className='button-delete'>
                        <FontAwesomeIcon onClick={() => handleRemoveItem(id)} className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;