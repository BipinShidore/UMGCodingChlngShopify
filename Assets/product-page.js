document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const productId = button.dataset.productId; // Extract product ID from data attribute
        const variantId = button.dataset.variantId; // Extract variant ID from data attribute
        const quantity = 1; // You can adjust this based on user input
  
        addToCart(productId, variantId, quantity);
      });
    });
  
    function addToCart(productId, variantId, quantity) {
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Product added to cart:', data);
  
          // Optionally, you can update the cart UI to reflect the changes
          updateCartUI();
        })
        .catch(error => console.error('Error adding product to cart:', error));
    }
  
    function updateCartUI() {
      // Implement logic to update the cart UI (e.g., show a mini cart, update cart count, etc.)
      // This will depend on your specific theme and UI components.
    }
  });

 
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.classList.contains('increase-quantity')) {
        updateCartQuantity(target.closest('.cart-item').dataset.variantId, 'increase');
      } else if (target.classList.contains('decrease-quantity')) {
        updateCartQuantity(target.closest('.cart-item').dataset.variantId, 'decrease');
      } else if (target.classList.contains('remove-item')) {
        removeCartItem(target.closest('.cart-item').dataset.variantId);
      }
    });
  
    function updateCartQuantity(variantId, action) {
      // Rest of the updateCartQuantity function
    }
  
    function removeCartItem(variantId) {
      // Rest of the removeCartItem function
    }
  
    function updateCartUI() {
      // Rest of the updateCartUI function
    }
  });