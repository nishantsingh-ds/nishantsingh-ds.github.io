// Mobile menu toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset for fixed navbar
        behavior: "smooth"
      });
      // Close mobile menu on click
      navLinks.classList.remove("show");
    }
  });
});
