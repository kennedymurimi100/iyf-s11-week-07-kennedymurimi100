export const utils = {};

export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function generateId() {
    return (
        Date.now().toString(36) + Math.random().toString(36).slice(2)
    );
}

export function calculateCartTotal(cart, products) {
    return cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.productId);
        return total + product.price * item.quantity;
    }, 0);
}

export function calculateCartCount(cart) {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

