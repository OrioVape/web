function ProductPreview({ product, isOpen, onClose, addToCart, user, onAuthClick }) {
    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        if (!user) {
            onAuthClick();
            return;
        }
        addToCart(product);
        onClose();
    };

    return (
        <div data-name="product-preview" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
                >
                    <i className="fas fa-times"></i>
                </button>

                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-[300px] md:h-[500px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>
                    
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-green-500">
                                        <i className="fas fa-check-circle"></i> In Stock
                                    </span>
                                </div>
                            </div>

                            <button
    onClick={handleAddToCart}
    className="w-full bg-gradient-to-r from-[#4f46e5] to-[#818cf8] text-white px-6 py-3 rounded-lg hover:bg-gradient-to-l transition-all duration-300 flex items-center justify-center space-x-2"
>
    <i className="fas fa-shopping-cart"></i>
    <span>{user ? 'Add to Cart' : 'Add to Cart'}</span>
</button>

                            
                            <div className="border-t pt-6 space-y-4">
                                <h3 className="text-xl font-semibold">Product Details</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <i className="fas fa-truck"></i>
                                            <span>Free Shipping</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <i className="fas fa-undo"></i>
                                            <span>30-Day Returns</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <i className="fas fa-shield-alt"></i>
                                            <span>Warranty</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <i className="fas fa-check"></i>
                                            <span>Authentic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
