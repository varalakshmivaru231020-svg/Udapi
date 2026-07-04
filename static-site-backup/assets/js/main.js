// Udupi Sambrama — shared site behaviour

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Highlight active menu quick-nav category while scrolling (menu.html only)
  var quicknavLinks = document.querySelectorAll(".menu-quicknav-scroll a");
  var categories = document.querySelectorAll(".menu-category");
  if (quicknavLinks.length && categories.length && "IntersectionObserver" in window) {
    var map = {};
    quicknavLinks.forEach(function (l) {
      map[l.getAttribute("href").replace("#", "")] = l;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = map[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            quicknavLinks.forEach(function (l) { l.style.background = ""; l.style.color = ""; l.style.borderColor = ""; });
            link.style.background = "var(--maroon)";
            link.style.color = "#fff";
            link.style.borderColor = "var(--maroon)";
            link.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
          }
        });
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
    );
    categories.forEach(function (c) { observer.observe(c); });
  }
});
