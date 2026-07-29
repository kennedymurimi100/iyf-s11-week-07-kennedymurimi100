console.log("Basic message");

console.log("%cImportant!", "color: red; font-size: 20px;");

console.warn("This might be a problem");
console.error("This is definitely wrong");

const users = [
    { name: "Asha", age: 22 },
    { name: "Brian", age: 16 }
];
console.table(users);

console.group("User Processing");
console.log("Step 1");
console.log("Step 2");
console.groupEnd();

console.time("loopTest");
for (let i = 0; i < 1000000; i++) {
    void i;
}
console.timeEnd("loopTest");

console.assert(users.length > 0, "users array should not be empty");
console.trace("How did we get here?");