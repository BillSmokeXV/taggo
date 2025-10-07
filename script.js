javascript
// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
  feather.replace();
  
  // Floating cart functionality
  const cart = document.querySelector('.floating-cart');
  if (cart) {
    cart.addEventListener('click', function() {
      alert('Your cart has 3 items!');
    });
  }
  
  // Search dropdown functionality
  const searchInput = document.querySelector('input[type="text"]');
  const searchDropdown = document.querySelector('.absolute.bg-white');
  if (searchInput && searchDropdown) {
    searchInput.addEventListener('focus', function() {
      searchDropdown.classList.remove('hidden');
    });
    searchInput.addEventListener('blur', function() {
      setTimeout(() => {
        searchDropdown.classList.add('hidden');
      }, 200);
    });
  }

  // Tailwind config
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#EE4D2D',
          secondary: '#FFBDA6',
        }
      }
    }
  }
});
