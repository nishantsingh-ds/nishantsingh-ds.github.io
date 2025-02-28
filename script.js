// Toggle navigation menu on smaller screens
const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

if(menu) {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
