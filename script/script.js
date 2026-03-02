const products = [
     {
    name: "iPhone 15",
    price: 120000,
    brand: "Apple",
    image: "images/iPhone_15_Pink.webp"
  },
  {
    name: "Galaxy S24",
    price: 95000,
    brand: "Samsung",
    image: "images/Titanium_Gray_S24_Ultra_1.webp"
  },
  {
    name: "Pixel 8",
    price: 85000,
    brand: "Google",
    image: "images/Pixel_8_HD.webp"
  },
  {
    name: "Xperia 5",
    price: 70000,
    brand: "Sony",
    image: "images/Sony-Xperia-5-Red.jpg"
  },
  {
    name: "Redmi Note 13",
    price: 30000,
    brand: "Xiaomi",
    image: "images/redmi.jpg"
  },
  {
    name: "OnePlus 12",
    price: 65000,
    brand: "OnePlus",
    image: "images/OnePlus-12-price-in-Bangladesh-Green.jpg"
  },
  {
    name: "Asus Zenfone 10",
    price: 60000,
    brand: "Asus",
    image: "images/Asus_Zenfone_10_Starry_Blue.webp"
  },
  {
    name: "Motorola",
    price: 40000,
    brand: "Motorola",
    image: "images/motorola.webp"
  },
  {
    name: "Nothing Phone",
    price: 50000,
    brand: "Nothing",
    image: "images/nothing.jpg"
  },
  {
    name: "Oppo",
    price: 45000,
    brand: "Oppo",
    image: "images/oppo.jpg"
  },
  {
    name: "Realme GT5",
    price: 42000,
    brand: "Realme",
    image: "images/Realme_GT5_Flowing_Silver.webp"
  },
  {
    name: "Vivo",
    price: 38000,
    brand: "Vivo",
    image: "images/vivo.webp"
  }
           
]

let cart = [];
const productParent = document.querySelector("#productParent");

function renderApp() {
    productParent.innerHTML = ""; 

    for (const item of products) {
        const card = document.createElement("div");

        card.classList.add( "bg-white","rounded-2xl","shadow-lg","p-5","m-4","w-72","transition","duration-300","hover:scale-105","hover:shadow-2xl");

         const img = document.createElement("img");
                img.src = item.image;
                img.classList.add(
                "w-full","h-52","object-cover","rounded-2xl","mb-4","transition","duration-500","group-hover:scale-105"    );

        const h1 = document.createElement("h1");

        h1.textContent = item.name;
        h1.classList.add("font-bold", "text-xl");

        const h2 = document.createElement("h2");
        h2.textContent = item.brand;
         h2.classList.add("text-gray-500", "text-sm", "mb-2");

        const p = document.createElement("p");
        p.textContent = `${item.price} BDT`;
        p.classList.add("text-green-600", "font-bold", "text-lg", "mb-4");        
        const btn = document.createElement("button");
        btn.textContent = "add to cart";
        btn.classList.add("w-full",
            "bg-gradient-to-r",
            "from-purple-600",
            "to-indigo-600",
            "text-white",
            "py-2",
            "rounded-xl",
            "font-semibold",
            "transition",
            "duration-300",
            "hover:scale-105",
            "hover:shadow-lg",
            "cursor-pointer");

        btn.addEventListener("click", function() {
            cart.push(item);
            console.log(cart); 
        });
        card.append(img);
        card.append(h1);
        card.append(h2);
        card.append(p);
        card.append(btn);
        productParent.append(card);
    }
}
renderApp();