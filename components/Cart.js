function Cart({ isOpen, cartItems, updateQuantity, removeFromCart, toggleCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div data-name="cart" className={`cart-drawer fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 ${isOpen ? 'open' : 'closed'}`}>
            <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 data-name="cart-title" className="text-xl font-semibold">Shopping Cart</h3>
                    <button
                        data-name="close-cart"
                        onClick={toggleCart}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p data-name="empty-cart-message" className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeFromCart={removeFromCart}
                            />
                        ))
                    )}
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                        <span data-name="total-label" className="font-semibold">Total:</span>
                        <span data-name="total-amount" className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <button
    data-name="checkout-button"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
    onClick={() => window.open('https://wa.me/212673594906', '_blank')}
>
    Checkout
</button>

                </div>
            </div>
        </div>
    );
}
