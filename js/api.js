
export async function fetchProducts() {
    
    return Promise.resolve([
        { id: 1, name: "Laptop", price: 999, image: "laptop.png" },
        { id: 2, name: "Phone", price: 699, image: "phone.png" },
        { id: 3, name: "Headphones", price: 199, image: "headphones.png" }
    ]);
}
