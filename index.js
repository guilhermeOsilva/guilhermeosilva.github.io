const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  const syncAriaExpanded = () => {
    const isOpen = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    syncAriaExpanded();
  };

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    syncAriaExpanded();
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedOutside =
      !navMenu.contains(event.target) && !hamburger.contains(event.target);
    if (clickedOutside) {
      closeMenu();
    }
  });
}