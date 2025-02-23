function Hero() {
    return (
        <section data-name="hero" className="hero-section h-[400px] flex items-center justify-center text-white text-center">
            <div className="container mx-auto px-4">
                <h1 data-name="hero-title" className="text-5xl font-bold mb-6">Welcome to OrioVape</h1>
                <p data-name="hero-subtitle" className="text-xl mb-8">Explore our selection of high-quality vape liquids with rich flavors and smooth hits.</p>
                <button data-name="hero-cta" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                </button>
            </div>
        </section>
    );
}
