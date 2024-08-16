const hamburguer = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  nav_menu.classList.toggle("active");
});


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    nav_menu.classList.remove('active');
  }));