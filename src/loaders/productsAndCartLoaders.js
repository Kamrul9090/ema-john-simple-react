import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoaders = async () => {
    // Get Products
    const productsData = await fetch(`products.json`);
    const products = await productsData.json();


    // Get Cart
    const saveCart = getStoredCart();
    const initialCart = [];

    for (const id in saveCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);
        }
    }

    return { products: products, initialCart: initialCart };
}