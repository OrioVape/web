function ProductCard({ product, addToCart, onPreview, user, onAuthClick }) {
    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!user) {
            onAuthClick();
            return;
        }
        addToCart(product);
    };

    return (
        <div data-name="product-card" className="product-card bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300">
            <div 
                className="cursor-pointer"
                onClick={() => onPreview(product)}
            >
                <img 
                    data-name="product-image"
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="p-4">
                    <h3 data-name="product-name" className="text-xl font-semibold mb-2 hover:text-blue-600">{product.name}</h3>
                    <p data-name="product-description" className="text-gray-600 mb-4">{product.description}</p>
                </div>
            </div>
            <div className="p-4 pt-0">
                <div className="flex justify-between items-center">
                    <span data-name="product-price" className="text-2xl font-bold">${product.price}</span>
                    <button
    data-name="add-to-cart-button"
    onClick={handleAddToCart}
    className="bg-gradient-to-r from-[#4f46e5] to-[#9162c3] border-2 border-solid border-[#e5e7eb] text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l transition-all duration-300 flex items-center justify-center"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 mr-2">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
    </svg>
    <span>{user ? 'Add to Cart' : 'Add to Cart'}</span>
</button>



                </div>
            </div>
        </div>
    );
}
