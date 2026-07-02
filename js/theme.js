// theme.js
const THEMES = ["forest", "solar", "ocean"];

function applyTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
  localStorage.setItem("katchcon-theme", id);
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.themeBtn === id);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("katchcon-theme") || "forest");
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
  });
});
