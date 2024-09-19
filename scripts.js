// Simple example to add product to cart
const cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product} has been added to your cart.`);
}

document.querySelectorAll('.product-item').forEach(item => {
  item.addEventListener('click', () => addToCart(item.querySelector('h3').textContent));
});
