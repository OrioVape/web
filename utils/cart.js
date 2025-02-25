function getStoredCart() {
    try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        reportError(error);
        return [];
    }
}

function updateStoredCart(cart) {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        reportError(error);
    }
}
