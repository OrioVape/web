function App() {
    const [cartItems, setCartItems] = React.useState(getStoredCart());
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [showProfile, setShowProfile] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        updateStoredCart(cartItems);
    }, [cartItems]);

    const addToCart = (product) => {
        try {
            if (!user) {
                setIsAuthModalOpen(true);
                return;
            }

            setCartItems(prevItems => {
                const existingItem = prevItems.find(item => item.id === product.id);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevItems, { ...product, quantity: 1 }];
            });
        } catch (error) {
            reportError(error);
        }
    };

    const updateQuantity = (productId, newQuantity) => {
        try {
            if (newQuantity < 1) {
                removeFromCart(productId);
                return;
            }
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        } catch (error) {
            reportError(error);
        }
    };

    const removeFromCart = (productId) => {
        try {
            setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        } catch (error) {
            reportError(error);
        }
    };

    const toggleCart = () => {
        if (!user) {
            setIsAuthModalOpen(true);
            return;
        }
        setIsCartOpen(!isCartOpen);
    };

    const handleAuthClick = () => {
        setIsAuthModalOpen(true);
    };

    return (
        <div data-name="app" className="min-h-screen bg-gray-50">
            <Header 
                cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                toggleCart={toggleCart}
                user={user}
                onAuthClick={handleAuthClick}
                onProfileClick={() => setShowProfile(true)}
                onNavigate={setShowProfile}
            />
            <main className="pt-16">
                {showProfile ? (
                    <Profile user={user} />
                ) : (
                    <React.Fragment>
                        <Hero />
                        <ProductList 
                            products={products} 
                            addToCart={addToCart}
                            onPreview={setSelectedProduct}
                            user={user}
                            onAuthClick={handleAuthClick}
                        />
                    </React.Fragment>
                )}
            </main>
            <Cart
                isOpen={isCartOpen}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                toggleCart={toggleCart}
            />
            <AuthModal 
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
            <ProductPreview
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                addToCart={addToCart}
                user={user}
                onAuthClick={handleAuthClick}
            />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
