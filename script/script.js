const products = [
    { name: "iPhone 15", price: 120000, brand: "Apple" },
    { name: "Galaxy S24", price: 95000, brand: "Samsung" },
    { name: "Pixel 8", price: 85000, brand: "Google" },
    { name: "Xperia 5", price: 70000, brand: "Sony" },
    { name: "Redmi Note 13", price: 30000, brand: "Xiaomi" },
    { name: "OnePlus 12", price: 65000, brand: "OnePlus" },
    { name: "Zenfone 10", price: 55000, brand: "Asus" },
    { name: "Moto Edge 40", price: 40000, brand: "Motorola" },
    { name: "V30 Pro", price: 45000, brand: "Vivo" },
    { name: "Reno 11", price: 38000, brand: "Oppo" }
];

let cart = [];

function renderApp() {
    const productParent = document.querySelector("#productParent");
    productParent.innerHTML = ""; 

    for (const item of products) {
        const card = document.createElement("div");

        card.classList.add("border-2", "border-black", "p-4", "m-4", "w-64");

        const h1 = document.createElement("h1");

        h1.textContent = item.name;
        h1.classList.add("font-bold", "text-xl");

        const h2 = document.createElement("h2");
        h2.textContent = "Brand";

        const p = document.createElement("p");
        p.textContent = "Price";

        const btn = document.createElement("button");
        btn.textContent = "add to cart";
        btn.classList.add("border-2", "border-black", "px-2", "py-1", "mt-2", "bg-gray-100","hover:bg-black", "hover:text-white", "cursor-pointer");

        btn.addEventListener("click", function() {
            cart.push(item);
            console.log(cart); 
        });

        card.append(h1);
        card.append(h2);
        card.append(p);
        card.append(btn);
        productParent.append(card);
    }
}
renderApp();