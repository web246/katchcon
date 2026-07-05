// theme.js
function applyTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme("ocean");
});
