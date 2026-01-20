document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;

      // Highlight active page
      const currentPage =
        window.location.pathname.split("/").pop().replace(".html", "") || "index";

      document
        .querySelectorAll(".main-nav a")
        .forEach(link => {
          if (link.dataset.page === currentPage) {
            link.classList.add("active");
          }
        });

      // Hamburger menu functionality
      const hamburgerBtn = document.getElementById("hamburger-btn");
      const mainNav = document.getElementById("main-nav");

      if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
          mainNav.classList.toggle("active");
          hamburgerBtn.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".main-nav a").forEach(link => {
          link.addEventListener("click", () => {
            mainNav.classList.remove("active");
            hamburgerBtn.classList.remove("active");
          });
        });
      }

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".header-container")) {
          mainNav.classList.remove("active");
          if (hamburgerBtn) {
            hamburgerBtn.classList.remove("active");
          }
        }
      });
    });
});

