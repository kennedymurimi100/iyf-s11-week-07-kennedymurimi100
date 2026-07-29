export function renderProducts(productList, products, onAddToCart) {
    productList.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${product.name} — $${product.price}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `;

        li.querySelector("button").addEventListener("click", () => {
            onAddToCart(product.id);
        });

        productList.appendChild(li);
    });
}

export function renderCart(cartList, cart, products, handlers) {
    cartList.innerHTML = "";

    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${product.name} x ${item.quantity} — $${product.price * item.quantity}</span>
            <button class="minus" data-id="${product.id}">-</button>
            <button class="plus" data-id="${product.id}">+</button>
            <button class="remove" data-id="${product.id}">Remove</button>
        `;

        li.querySelector(".minus").addEventListener("click", () =>
            handlers.onUpdateQuantity(product.id, item.quantity - 1)
        );
        li.querySelector(".plus").addEventListener("click", () =>
            handlers.onUpdateQuantity(product.id, item.quantity + 1)
        );
        li.querySelector(".remove").addEventListener("click", () =>
            handlers.onRemove(product.id)
        );

        cartList.appendChild(li);
    });
}

export function renderCartSummary(summaryEl, total, count) {
    summaryEl.textContent = `Items: ${count} | Total: $${total}`;
}