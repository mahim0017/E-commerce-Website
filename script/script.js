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
    { name: "Reno 11", price: 38000, brand: "Oppo" },
    { name: "Nothing Phone 2", price: 60000, brand: "Nothing" },
    { name: "Realme GT 5", price: 42000, brand: "Realme" }
];

let cart = [];
const productParent = document.querySelector("#productParent");

function renderApp() {
    productParent.innerHTML = ""; 

    for (const item of products) {
        const card = document.createElement("div");

        card.classList.add( "bg-white","rounded-2xl","shadow-lg","p-5","m-4","w-72","transition","duration-300","hover:scale-105","hover:shadow-2xl");

        const h1 = document.createElement("h1");

        h1.textContent = item.name;
        h1.classList.add("font-bold", "text-xl");

        const h2 = document.createElement("h2");
        h2.textContent = item.brand;

        const p = document.createElement("p");
        p.textContent = item.price;

        const btn = document.createElement("button");
        btn.textContent = "add to cart";
        btn.classList.add("w-full","bg-black","text-white","py-2","rounded-xl","transition","duration-300","hover:bg-gray-800","cursor-pointer");

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