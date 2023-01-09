

const products = [
  { title: "AdidasShirt", productImg: "./img/product1.jpg", price: 75 },
  { title: "EARBUDS", productImg: "./img/product2.jpg", price: 300 },
  { title: "Adidas Hoddy", productImg: "./img/product3.jpg", price: 500 },
  { title: "Metal Strow Bottle", productImg: "./img/product4.jpg", price: 105 },
  { title: "Sunglasses", productImg: "./img/product5.jpg", price: 15.04 },
  { title: "Adidas Hat", productImg: "./img/product6.jpg", price: 7 },
  { title: "Adidas BackPack", productImg: "./img/product7.jpg", price: 130 },
  { title: "Running Shoes", productImg: "./img/product8.jpg", price: 190 },
];

const cartContent = ({ title, productImg, price }) => {
  return `
    <div class="product-box">
            <img src="${productImg}" alt="AdidasShir" class="product-img">
            <h2 class="product-title">${title}</h2>
            <span class="price">${price}</span>
            <i class='bx bx-shopping-bag add-cart'></i>
    </div>`;
};

let shopContent = document.getElementById('shop-content');

