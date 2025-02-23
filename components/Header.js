function Header({ cartItemCount, toggleCart, user, onAuthClick, onProfileClick, onNavigate }) {
    const scrollToSection = (sectionId) => {
        onNavigate(false); // Exit profile view
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header data-name="header" className="bg-white shadow-md fixed w-full top-0 z-40">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                <button 
    onClick={() => scrollToSection('top')} 
    className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#533573] hover:text-blue-600 transition-all duration-300" 
    data-name="logo"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf brand-icon mr-2 text-[#4f46e5]">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
    <span>OrioVape</span>
</button>


                    
<nav data-name="navigation" className="hidden md:flex space-x-8">
    <button onClick={() => scrollToSection('top')} className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontWeight: 600 }}>Home</button>
    <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontWeight: 600 }}>Products</button>
    <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontWeight: 600 }}>About</button>
    <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors" style={{ fontWeight: 600 }}>Contact</button>
</nav>



                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={onProfileClick}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                                    </div>
                                    <span className="hidden md:inline">{user.displayName || 'User'}</span>
                                </button>
                                <button
                                    onClick={() => signOut()}
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                    style={{ fontWeight: 550 }}
                                >
                                    <i className="fas fa-sign-out-alt md:hidden"></i>
                                    <span className="hidden md:inline">Sign Out</span>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={onAuthClick}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                style={{ fontWeight: 550 }}
                            >
                                <i className="fas fa-user md:hidden"></i>
                                <span className="hidden md:inline">Sign In</span>
                            </button>
                        )}
                        
                        <button 
    data-name="cart-button"
    onClick={toggleCart}
    className="relative p-2"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shopping-cart" className="lucide lucide-shopping-cart text-xl text-gray-600 hover:text-blue-600 transition-colors">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
    {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
        </span>
    )}
</button>

                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="md:hidden flex justify-around pt-4">
                    <button onClick={() => scrollToSection('top')} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <i className="fas fa-home"></i>
                    </button>
                    <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <i className="fas fa-box"></i>
                    </button>
                    <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <i className="fas fa-info-circle"></i>
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <i className="fas fa-envelope"></i>
                    </button>
                </nav>
            </div>
        </header>
    );
}
