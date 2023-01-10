let cartProducts = [];
const products = [
  {
    title: "AdidasShirt",
    productImg: "./img/product1.jpg",
    price: 75,
    id: "product1",
  },
  {
    title: "EARBUDS",
    productImg: "./img/product2.jpg",
    price: 300,
    id: "product2",
  },
  {
    title: "Adidas Hoddy",
    productImg: "./img/product3.jpg",
    price: 500,
    id: "product3",
  },
  {
    title: "Metal Strow Bottle",
    productImg: "./img/product4.jpg",
    price: 105,
    id: "product4",
  },
  {
    title: "Sunglasses",
    productImg: "./img/product5.jpg",
    price: 15.04,
    id: "product5",
  },
  {
    title: "Adidas Hat",
    productImg: "./img/product6.jpg",
    price: 7,
    id: "product6",
  },
  {
    title: "Adidas BackPack",
    productImg: "./img/product7.jpg",
    price: 130,
    id: "product7",
  },
  {
    title: "Running Shoes",
    productImg: "./img/product8.jpg",
    price: 190,
    id: "product8",
  },
];

const addToCart = (productId) => {
  const productInCartIndex = cartProducts.findIndex(
    (product) => product.id === productId
  );
  if (productInCartIndex >= 0) {
    const productInCart = cartProducts[productInCartIndex];
    cartProducts[productInCartIndex] = {
      ...productInCart,
      quantity: productInCart.quantity + 1,
    };
  } else {
    const product = products.find((product) => product.id === productId);
    cartProducts.push({ ...product, quantity: 1, cartId: Date.now() });
  }
  displayCartlist();
};

const removeCartItem = (cartId) => {
  const productInCartIndex = cartProducts.findIndex(
    (product) => product.cartId === cartId
  );
  if (productInCartIndex >= 0) {
    cartProducts.splice(productInCartIndex, 1);
    displayCartlist();
  } else {
    alert("Product Not Found");
  }
};
const addRemoveCartQuantity = (add, cartId) => {
  const productInCartIndex = cartProducts.findIndex(
    (product) => product.cartId === cartId
  );
  const productInCart = cartProducts[productInCartIndex];
  if (add) {
    cartProducts[productInCartIndex] = {
      ...productInCart,
      quantity: productInCart.quantity + 1,
    };
  } else {
    if (productInCart.quantity > 1) {
      cartProducts[productInCartIndex] = {
        ...productInCart,
        quantity: productInCart.quantity - 1,
      };
    }
  }
  displayCartlist();
};

const cartContent = ({ productImg, title, price, cartId, quantity }) => {
  return `
  <div class = "cart-box">
  <div class="flex">
  <img src="${productImg}" alt="" class="cart-img">
  <i class='bx bxs-trash-alt cart-remove' onclick = "removeCartItem(${cartId})";></i>
</div>
  <div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="flex">
  <div class="cart-price">$${price}</div>
        <span class = "cart-quantity">
        <button class = "quantity-add-btn" onclick = "addRemoveCartQuantity(false, ${cartId});">-</button>${quantity}
        <button class = "quantity-remove-btn" onclick = "addRemoveCartQuantity(true, ${cartId});">+</button></span>
</div>`;
};

const displayCartlist = () => {
  let cartTotal = document.getElementById("total-price");
  let cartContentArea = document.getElementById("cart-content");
  let cartContentElements = "";
  let total = 0;

  cartProducts.forEach((item) => {
    total += item.price * item.quantity;
    cartContentElements += cartContent(item);
  });
  cartContentArea.innerHTML = cartContentElements;
  total = Math.round(total * 100) / 100;
  cartTotal.innerHTML = `$${total}`;
};

const shopProduct = ({ title, productImg, price, id }) => {
  return `
    <div class="product-box">
            <img src="${productImg}" alt="AdidasShirt" class="product-img">
            <h2 class="product-title">${title}</h2>
            <span class="price">$${price}</span>
              <i class='bx bx-shopping-bag add-cart' onclick="addToCart('${id}');"></i>
    </div>`;
};

let shopContent = document.getElementById("shop-content");
let shopContentElements = "";
products.forEach((item) => {
  shopContentElements += shopProduct(item);
});

shopContent.innerHTML = shopContentElements;

let cartIcon = document.getElementById("cart-icon");
let cart = document.getElementById("cart");
let closeCart = document.getElementById("close-cart");
let buybuttonClicked = document.getElementById("btn-buy");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

buybuttonClicked.onclick = () => {
  if (cartProducts.length > 0) {
    cartProducts = [];
    alert("Your Order Has Been Placed Successfully");
  } else {
    alert("Your Cart is Empty, Please Add items");
  }

  displayCartlist();
};
