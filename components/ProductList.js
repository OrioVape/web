function ProductList({ products, addToCart, onPreview, user, onAuthClick }) {
    return (
        <section id="products" data-name="product-list" className="container mx-auto px-4 py-16">
            <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">Quality Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart}
                        onPreview={onPreview}
                        user={user}
                        onAuthClick={onAuthClick}
                    />
                ))}
            </div>
        </section>
    );
}
