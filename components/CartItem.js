function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div data-name="cart-item" className="flex items-center gap-4 py-4 border-b">
            <img 
                data-name="item-image"
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
                <h4 data-name="item-name" className="font-semibold">{item.name}</h4>
                <p data-name="item-price" className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                    <button
                        data-name="decrease-quantity"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        -
                    </button>
                    <span data-name="item-quantity" className="px-2">{item.quantity}</span>
                    <button
                        data-name="increase-quantity"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                data-name="remove-item"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
