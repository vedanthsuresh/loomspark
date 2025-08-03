const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const buyNowButtons = document.querySelectorAll('.buy-now-btn');

buyNowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productItem = button.closest('.product-item');
    const productName = productItem.querySelector('.med-content').innerText;
    const productPrice = productItem.querySelector('.contact-info').innerText;

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert(`${productName} added to cart!`);
  });
});