function calculateTax(price) {
    const TAX_RATE = 0.16;

    return price * TAX_RATE;
}

console.log(calculateTax(100));