let cartCount = 0; 
const buttons = document.querySelectorAll("#btn-card");
const cart = document.getElementById("cart-count");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    cartCount++; 
    cart.textContent = cartCount; 
    console.log("Total Items in Cart:", cartCount); 
  });
}
