function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div id="about" className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 data-name="company-info" className="text-xl font-semibold mb-4">OrioVape</h4>
                        <p className="text-gray-400">Discover our exclusive selection of e-liquids, designed to offer you an unforgettable vaping experience. Take advantage of our special offers and enjoy irresistible flavors.</p>
                    </div>
                    <div>
                        <h4 data-name="quick-links" className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div id="contact">
                        <h4 data-name="contact-info" className="text-xl font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                        <li>
                                <a href="https://wa.me/212673594906" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <i className="fas fa-phone mr-2"></i> +212 673-594906
                                </a>
                            </li>
                            <li><i className="fas fa-envelope mr-2"></i> info@OrioVape.com</li>
                            <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Shop Street, City</li>
                        </ul>
                    </div>
                    <div>
                        <h4 data-name="social-media" className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 OrioVape. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
