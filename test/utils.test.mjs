import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCartTotal, calculateCartCount } from '../js/utils.js';

const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
];

test('calculateCartTotal sums price * quantity across items', () => {
    const cart = [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }];
    assert.equal(calculateCartTotal(cart, products), 999 * 2 + 699);
});

test('calculateCartTotal returns 0 for an empty cart', () => {
    assert.equal(calculateCartTotal([], products), 0);
});

test('calculateCartCount sums quantities across items', () => {
    const cart = [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 3 }];
    assert.equal(calculateCartCount(cart), 5);
});

test('calculateCartCount returns 0 for an empty cart', () => {
    assert.equal(calculateCartCount([]), 0);
});
