import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, clearCart, children } = props;
    let total = 0;
    let quantity = 0;
    let totalShipping = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const taxNumber = parseFloat(tax);
    const grandTotal = total + totalShipping + taxNumber;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Select Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;