// Cart Array
let cart = [];

// Add to Cart Function
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

// Update Cart Display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartItems.innerHTML = "";

  let totalAmount = 0;
  cart.forEach((cartItem, index) => {
    totalAmount += cartItem.price;
    const li = document.createElement("li");
    li.textContent = `${cartItem.item} - KES ${cartItem.price}`;
    cartItems.appendChild(li);
  });

  total.textContent = totalAmount;
}

// Checkout Button (Integrate Payment Later)
document.getElementById("checkout").addEventListener("click", function () {
  alert("Payment integration coming soon!");
});
