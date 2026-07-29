

const users = [
    { name: "Asha", age: 22 },
    { name: "Brian", age: 16 },
    { name: "Cynthia", age: 34 }
];


const d = new Date();
const x = users.filter(u => u.a > 18);

function calc(a, b) {
    return a * b * 0.1;
}


const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);

function calculateDiscount(price, quantity) {
    const DISCOUNT_RATE = 0.1;
    return price * quantity * DISCOUNT_RATE;
}


console.log("Current date:", currentDate.toLocaleDateString());
console.log("Adult users:", adultUsers.map(u => u.name));
console.log("Discount on 3 x $50:", calculateDiscount(50, 3));