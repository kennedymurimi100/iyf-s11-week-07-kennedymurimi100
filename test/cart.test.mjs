import test from 'node:test';
import assert from 'node:assert/strict';

class MemoryStorage {
  constructor() {
    this.store = new Map();
  }

  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }

  setItem(key, value) {
    this.store.set(key, value);
  }

  removeItem(key) {
    this.store.delete(key);
  }
}

global.localStorage = new MemoryStorage();

const { addToCart, removeFromCart, clearCart, cart } = await import('../js/cart.js');

test('removeFromCart and clearCart update the shared cart state', () => {
  cart.length = 0;

  addToCart(1);
  addToCart(2);

  removeFromCart(1);
  assert.deepEqual(cart, [{ productId: 2, quantity: 1 }]);

  clearCart();
  assert.deepEqual(cart, []);
});
