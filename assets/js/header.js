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
    });
});
