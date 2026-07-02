// layout.js — injects shared navbar / mobile menu / backdrop / footer
const NAV_LINKS = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About Us", href: "about.html", key: "about" },
  { label: "Services", href: "services.html", key: "services" },
  { label: "Projects", href: "projects.html", key: "projects" },
  { label: "Contact Us", href: "contact.html", key: "contact" }
];

const THEME_ICONS = [
  { id: "forest", label: "Forest theme", glyph: "🌲" },
  { id: "solar", label: "Desert theme", glyph: "☀️" },
  { id: "ocean", label: "Ocean theme", glyph: "🌊" }
];

function themeSwitchHTML() {
  return `<div class="theme-switch" role="group" aria-label="Theme switcher">
    ${THEME_ICONS.map(t => `<button type="button" data-theme-btn="${t.id}" title="${t.label}" aria-label="${t.label}">${t.glyph}</button>`).join("")}
  </div>`;
}

function navLinksHTML(active) {
  return NAV_LINKS.map(l => `<a href="${l.href}"${l.key === active ? ' class="active"' : ''}>${l.label}</a>`).join("");
}

function backdropHTML() {
  return `
  <div class="circuit-grid"></div>
  <div class="glow-blob teal"></div>
  <div class="glow-blob amber"></div>
  <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
    ${[120,240,360,480,600,720,840].map(y => `<path d="M0 ${y} Q 180 ${y-20} 360 ${y} T 720 ${y} T 1080 ${y} T 1440 ${y}" stroke="var(--teal)" stroke-width="1.5" fill="none"/>`).join("")}
    ${[[240,120,'amber'],[720,360,'teal'],[480,540,'amber'],[960,240,'teal'],[1200,600,'amber'],[360,720,'teal']].map(([x,y,c]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--${c})"/>`).join("")}
  </svg>`;
}

function navbarHTML(active) {
  return `
  <div class="container">
    <a href="index.html" class="logo">
      <img src="https://media.base44.com/images/public/6a45437bd8a61bb6bc86af2d/534377da9_image.png" alt="KATCHCON logo">
      <span class="logo-text">
        <span class="name"><span class="text-teal">KATCH</span><span class="text-amber">CON</span></span>
        <span class="caption">Engineering</span>
      </span>
    </a>
    <div class="nav-links">${navLinksHTML(active)}</div>
    <div class="nav-right">
      ${themeSwitchHTML()}
      <a href="contact.html" class="btn btn-primary">${icon("leaf", 16)} Get Quote</a>
    </div>
    <button class="hamburger" aria-label="Menu">${icon("menu", 22)}</button>
  </div>`;
}

function mobileMenuHTML(active) {
  return `
  <div class="container">
    ${NAV_LINKS.map(l => `<a href="${l.href}"${l.key === active ? ' class="active"' : ''}>${l.label}</a>`).join("")}
    ${themeSwitchHTML()}
    <a href="contact.html" class="btn btn-primary btn-block">${icon("leaf", 16)} Get Quote</a>
  </div>`;
}

function footerHTML() {
  return `
  <div class="spark-line"></div>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="logo">
          <img src="https://media.base44.com/images/public/6a45437bd8a61bb6bc86af2d/534377da9_image.png" alt="KATCHCON logo">
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
          <li><a href="service-detail.html?slug=solar-power">Solar Power</a></li>
          <li><a href="service-detail.html?slug=wind-power">Wind Power</a></li>
          <li><a href="service-detail.html?slug=hydroelectric">Hydroelectric Power</a></li>
          <li><a href="service-detail.html?slug=transmission">Transmission &amp; Distribution</a></li>
          <li><a href="service-detail.html?slug=energy-efficiency">Energy Efficiency</a></li>
          <li><a href="service-detail.html?slug=energy-storage">Energy Storage</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+254700000000">+254 700 000 000</a></li>
          <li><a href="mailto:info@katchcon.co.ke">info@katchcon.co.ke</a></li>
          <li>Nairobi, Kenya</li>
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
}

document.addEventListener("DOMContentLoaded", () => initChrome(window.ACTIVE_PAGE || ""));
