// layout.js — injects shared navbar / mobile menu / backdrop / footer
const NAV_LINKS = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About", href: "about.html", key: "about" },
  { label: "Services", href: "services.html", key: "services" },
  { label: "Projects", href: "projects.html", key: "projects" }
];

function servicesDropdownHTML(active) {
  return `
    <div class="nav-item service-dropdown${active === 'services' ? ' active' : ''}">
      <button type="button" class="nav-link dropdown-toggle" aria-expanded="false">Services</button>
      <div class="dropdown-menu">
        ${SERVICES.map(s => `<a href="${s.slug}.html">${s.title}</a>`).join("")}
      </div>
    </div>`;
}

function navLinksHTML(active) {
  return NAV_LINKS.map(l => {
    if (l.key === 'services') return servicesDropdownHTML(active);
    return `<a href="${l.href}"${l.key === active ? ' class="active"' : ''}>${l.label}</a>`;
  }).join("");
}

function backdropHTML() {
  // Return only non-SVG backdrop elements — remove SVG lines/planes per request
  return `
  <div class="circuit-grid"></div>
  <div class="glow-blob teal"></div>
  <div class="glow-blob amber"></div>
  `;
}

function navbarHTML(active) {
  return `
  <div class="container nav-bar-inner">
    <a href="index.html" class="logo">
      <span class="logo-mark"><span class="mark-text"><span class="text-teal">K</span><span class="text-amber">C</span></span></span>
      <span class="logo-text">
        <span class="name"><span class="text-teal">KATCH</span><span class="text-amber">CON</span></span>
        <span class="caption">Engineering</span>
      </span>
    </a>
    <div class="nav-center">
      <div class="nav-links">${navLinksHTML(active)}</div>
    </div>
    <div class="theme-switcher" role="group" aria-label="Theme switcher">
      <button type="button" class="theme-switcher-btn is-active" data-theme-option="ocean" aria-pressed="true">Green</button>
      <button type="button" class="theme-switcher-btn" data-theme-option="blue" aria-pressed="false">Blue</button>
    </div>
    <a href="contact.html" class="btn btn-primary btn-contact">Contact us <span class="btn-arrow">${icon("arrowRight",16)}</span></a>
    <button class="hamburger" aria-label="Menu">${icon("menu", 22)}</button>
  </div>`;
}

function mobileMenuHTML(active) {
  return `
  <div class="container">
    ${NAV_LINKS.filter(l => l.key !== 'services').map(l => `<a href="${l.href}"${l.key === active ? ' class="active"' : ''}>${l.label}</a>`).join("")}
    <div class="mobile-submenu-title">Services</div>
    ${SERVICES.map(s => `<a href="${s.slug}.html">${s.title}</a>`).join("")}
    <div class="theme-switcher mobile-theme-switcher" role="group" aria-label="Theme switcher">
      <button type="button" class="theme-switcher-btn is-active" data-theme-option="ocean" aria-pressed="true">Green</button>
      <button type="button" class="theme-switcher-btn" data-theme-option="blue" aria-pressed="false">Blue</button>
    </div>
    <a href="contact.html" class="btn btn-primary btn-block">Contact us <span class="btn-arrow">${icon("arrowRight",16)}</span></a>
  </div>`;
}

function footerHTML() {
  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="logo footer-logo">
          <img src="https://media.base44.com/images/public/6a452fc525159557dcc0066b/5bc7467ff_image.png" alt="KATCHCON" class="footer-logo-img">
          <span class="logo-text">
            <span class="name"><span class="text-teal">KATCH</span><span class="text-amber">CON</span></span>
            <span class="caption">Engineering</span>
          </span>
        </a>
        <p>KATCHCON is a privately owned engineering consultancy delivering high-quality power and energy solutions across sub-Saharan Africa.</p>
        <div class="social-icons">
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener">𝕏</a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">f</a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="solar-power.html">Solar Power</a></li>
          <li><a href="wind-power.html">Wind Power</a></li>
          <li><a href="hydroelectric.html">Hydroelectric Power</a></li>
          <li><a href="transmission.html">Transmission &amp; Distribution</a></li>
          <li><a href="energy-efficiency.html">Energy Efficiency</a></li>
          <li><a href="energy-storage.html">Energy Storage</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 KATCHCON LIMITED. All rights reserved.</span>
      <div class="legal-links">
        <a href="about.html">Privacy Policy</a>
        <a href="about.html">Terms of Service</a>
      </div>
    </div>
  </div>`;
}

function initChrome(active) {
  const backdrop = document.getElementById("page-backdrop");
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobile-menu");
  const footer = document.getElementById("footer");
  if (backdrop) backdrop.innerHTML = backdropHTML();
  if (navbar) navbar.innerHTML = navbarHTML(active);
  if (mobileMenu) mobileMenu.innerHTML = mobileMenuHTML(active);
  if (footer) footer.innerHTML = footerHTML();

  const dropdown = navbar ? navbar.querySelector(".service-dropdown") : null;
  const toggle = navbar ? navbar.querySelector(".dropdown-toggle") : null;
  if (dropdown && toggle) {
    const closeDropdown = () => {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    dropdown.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDropdown);
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) closeDropdown();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => initChrome(window.ACTIVE_PAGE || ""));
