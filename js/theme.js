// theme.js
const THEME_STORAGE_KEY = "katchcon-theme";
const DEFAULT_THEME = "ocean";
const BLUE_THEME = "blue";

function normalizeTheme(id) {
  return id === BLUE_THEME ? BLUE_THEME : DEFAULT_THEME;
}

function applyTheme(id) {
  const theme = normalizeTheme(id);
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn("Theme preference could not be saved.", error);
  }
  window.__ACTIVE_THEME__ = theme;
  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

function updateThemeSwitcher(theme) {
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const isActive = button.getAttribute("data-theme-option") === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setTheme(option) {
  applyTheme(option === BLUE_THEME ? BLUE_THEME : DEFAULT_THEME);
  updateThemeSwitcher(window.__ACTIVE_THEME__ || DEFAULT_THEME);
}

document.addEventListener("DOMContentLoaded", () => {
  let initialTheme = normalizeTheme(document.documentElement.getAttribute("data-theme"));

  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      initialTheme = normalizeTheme(savedTheme);
    }
  } catch (error) {
    console.warn("Theme preference could not be loaded.", error);
  }

  applyTheme(initialTheme);
  updateThemeSwitcher(window.__ACTIVE_THEME__ || DEFAULT_THEME);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-option]");
    if (!button) return;

    event.preventDefault();
    setTheme(button.getAttribute("data-theme-option"));
  });
});
