// Select the navbar
const navbar = document.getElementById('navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add solid background when scrolling
    } else {
        navbar.classList.remove('scrolled'); // Remove solid background at the top
    }
});
