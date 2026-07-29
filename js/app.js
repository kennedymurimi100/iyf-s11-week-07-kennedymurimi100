import {
    products, cart, addToCart, updateQuantity,
    removeFromCart, clearCart, getCartTotal, getCartCount, loadProducts
} from "./cart.js";
import { renderProducts, renderCart, renderCartSummary } from "./ui.js";

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const cartSummary = document.getElementById("cart-summary");
const clearBtn = document.getElementById("clear-cart");

function render() {
    renderProducts(productList, products, handleAddToCart);
    renderCart(cartList, cart, products, {
        onUpdateQuantity: handleUpdateQuantity,
        onRemove: handleRemove
    });
    renderCartSummary(cartSummary, getCartTotal(), getCartCount());
}

function handleAddToCart(productId) {
    addToCart(productId);
    render();
}

function handleUpdateQuantity(productId, quantity) {
    updateQuantity(productId, quantity);
    render();
}

function handleRemove(productId) {
    removeFromCart(productId);
    render();
}

clearBtn.addEventListener("click", () => {
    clearCart();
    render();
});

async function init() {
    await loadProducts();
    render();
}

init();