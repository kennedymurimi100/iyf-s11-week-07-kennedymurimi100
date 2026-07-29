import { save, load } from "./storage.js";
import { fetchProducts } from "./api.js";

export let products = [];
export let cart = load("cart", []); // [{ productId, quantity }]

export async function loadProducts() {
    products = await fetchProducts();
}

function saveCart() {
    save("cart", cart);
}

export function addToCart(productId) {
    const existing = cart.find(item => item.productId === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    saveCart();
}

export function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = quantity;
        saveCart();
    }
}

export function removeFromCart(productId) {
    const nextCart = cart.filter(item => item.productId !== productId);
    cart.length = 0;
    cart.push(...nextCart);
    saveCart();
}

export function clearCart() {
    cart.length = 0;
    saveCart();
}

export function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

export function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}