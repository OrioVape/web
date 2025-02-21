// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const cartButton = document.getElementById('cartButton');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartBackdrop = document.querySelector('.cart-backdrop');
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartFooter = document.getElementById('cartFooter');

// Preview Modal Elements
const previewModal = document.getElementById('previewModal');
const closePreview = document.getElementById('closePreview');
const previewImage = document.getElementById('previewImage');
const previewTitle = document.getElementById('previewTitle');
const previewPrice = document.getElementById('previewPrice');
const previewOriginalPrice = document.getElementById('previewOriginalPrice');
const previewDescription = document.getElementById('previewDescription');
const previewAddToCart = document.getElementById('previewAddToCart');
const previewThumbnails = document.getElementById('previewThumbnails');

// State
let cart = [];

// Toggle mobile menu
menuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
});

// Cart functions
function openCart() {
    cartOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartOverlay?.classList.remove('active');
    document.body.style.overflow = '';
}

function updateCart() {
    if (!cartCount || !cartItems || !cartFooter) return;

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems || '';
    cartCount.style.display = totalItems ? 'flex' : 'none';

    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-cart" class="empty-cart-icon"></i>
                <h3 class="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
                <p>¡Agrega algunos productos increíbles!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-content">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-category">${item.category}</p>
                    <div class="cart-item-controls">
                        <select class="quantity-select" onchange="updateQuantity(${item.id}, this.value)" aria-label="Cantidad">
                            ${[1, 2, 3, 4, 5].map(num => `
                                <option value="${num}" ${item.quantity === num ? 'selected' : ''}>
                                    ${num}
                                </option>
                            `).join('')}
                        </select>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-button" onclick="removeFromCart(${item.id})" aria-label="Eliminar del carrito">
                            <i data-lucide="x"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update cart footer
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.1; // 10% discount
    const total = subtotal - discount;

    cartFooter.innerHTML = `
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row text-green-600">
                <span>Descuento (10%)</span>
                <span>-$${discount.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        </div>
        <button class="checkout-button">
            Proceder al pago
        </button>
    `;

    // Reinitialize icons for new content
    lucide.createIcons();
}

// Preview Modal Functions
function openPreview(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Set product details
    previewImage.src = product.image;
    previewTitle.textContent = product.name;
    previewPrice.textContent = `$${product.price.toFixed(2)}`;
    previewOriginalPrice.textContent = `$${(product.price * 1.2).toFixed(2)}`;
    previewDescription.textContent = product.description;

    // Generate thumbnails (using the same image for demo)
    previewThumbnails.innerHTML = Array(4).fill(product.image).map((img, index) => `
        <div class="preview-thumbnail ${index === 0 ? 'active' : ''}" onclick="switchPreviewImage('${img}', this)">
            <img src="${img}" alt="Thumbnail ${index + 1}">
        </div>
    `).join('');

    // Set up add to cart button
    previewAddToCart.onclick = () => addToCart(product.id);

    // Show modal
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
}

function switchPreviewImage(imageUrl, thumbnail) {
    previewImage.src = imageUrl;
    // Update active thumbnail
    document.querySelectorAll('.preview-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Cart Event Listeners
cartButton?.addEventListener('click', openCart);
closeCart?.addEventListener('click', closeCartModal);
cartBackdrop?.addEventListener('click', closeCartModal);

// Preview Event Listeners
closePreview?.addEventListener('click', closePreviewModal);
previewModal?.querySelector('.preview-backdrop')?.addEventListener('click', closePreviewModal);

// Make functions globally available
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
};

window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

window.updateQuantity = (productId, quantity) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            window.removeFromCart(productId);
        }
    }
    updateCart();
};

// Render products
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container" onclick="openPreview(${product.id})">
                <div class="product-overlay"></div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-rating">
                    <i data-lucide="star" class="w-3 h-3 fill-white"></i>
                    <span>4.8</span>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title" onclick="openPreview(${product.id})" style="cursor: pointer">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${(product.price * 1.2).toFixed(2)}</span>
                    </div>
                    <button class="add-to-cart-button" onclick="addToCart(${product.id})" aria-label="Agregar al carrito">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                        <span>Agregar</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Make preview function globally available
window.openPreview = openPreview;
window.switchPreviewImage = switchPreviewImage;

// Initialize
renderProducts();
updateCart();