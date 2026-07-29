export function calculateOrderTotal(order) {
    let total = 0;

    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        total += item.price * item.quantity;
    }

    return total;
}

const order = {
    items: [
        { name: "T-shirt", price: 20, quantity: 2 },
        { name: "Jeans", price: 40, quantity: 1 }
    ]
};

console.log("Order total:", calculateOrderTotal(order));
