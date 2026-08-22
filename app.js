let products = [
  { id: 1, name: "T-Shirt", price: 25, color: "black", inStock: true },
  { id: 2, name: "Smart Watch", price: 200, color: "Golden", inStock: true },
  { id: 3, name: "Headphones", price: 80, color: "white", inStock: false },
  { id: 4, name: "Laptop", price: 650, color: "black", inStock: true },
  { id: 5, name: "Water Bottle", price: 150, color: "Blue", inStock: true },
];

for(let i =0; i < products.length; i ++){
  console.log(products[i])
}

let num = Number(prompt("choose a product by an id"))

let cart = [];

for(let i =0; i <products.length; i ++){
  if(products[i]=== id && products[i] === true){
    cart.push(products[i])
   
  }
}

console.log(cart)