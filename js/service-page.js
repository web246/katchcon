(function () {
  function renderServicePage() {
    const slug = window.SERVICE_SLUG || "";
    const index = SERVICES.findIndex((service) => service.slug === slug);
    const service = index >= 0 ? SERVICES[index] : SERVICES[0];
    const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
    const next = SERVICES[(index + 1) % SERVICES.length];

    document.title = `${service.title} — KATCHCON`;

    const mount = document.getElementById("detail-mount");
    if (!mount) return;

    mount.innerHTML = `
      <a href="services.html" class="back-link">${icon('chevronLeft',18)} All Services</a>

      <div class="detail-hero">
        <div>
          <div class="title-row"><div class="icon-box">${icon(service.icon, 24)}</div><h1 style="font-size:32px;font-weight:900;">${service.title}</h1></div>
          <p class="desc" style="margin-top:16px;">${service.short}</p>
        </div>
        <div class="bubble-wrap" style="width:360px;height:360px;margin:0 auto;">
          <div class="bubble-glow"></div>
          <div class="bubble-morph"><img src="${service.image}" alt="${service.title}"></div>
        </div>
      </div>

      <div class="grid grid-2">
        <div>
          <h2 class="h2-section">Service Overview</h2>
          <p class="desc" style="margin-bottom:24px;">${service.overview}</p>
          <ul class="checklist">
            ${service.highlights.map((h) => `<li><span class="check-badge">${icon('check',14)}</span><span>${h}</span></li>`).join("")}
          </ul>
        </div>
        <div class="cap-card">
          <h3 style="font-size:18px;font-weight:900;margin-bottom:16px;">Capabilities</h3>
          <ul class="cap-num-list">
            ${service.capabilities.map((c) => `<li><span class="cap-dot"></span>${c}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="prevnext">
        <a href="${prev.slug}.html">
          <span class="pn-cap caption">${icon('chevronLeft',14)} Previous</span>
          <strong>${prev.title}</strong>
        </a>
        <a href="${next.slug}.html" class="next-link">
          <span class="pn-cap caption">Next ${icon('chevronRight',14)}</span>
          <strong>${next.title}</strong>
        </a>
      </div>

      <section style="margin-top:80px; margin-left:-32px; margin-right:-32px; margin-bottom:-60px; position:relative; z-index:10; padding:0;">
        <div class="cta-dark" style="margin-bottom:0; border-radius:0;">
          <div class="glow-blob teal"></div>
          <div class="glow-blob amber"></div>
          <div class="content">
            <h2 class="h2-section" style="font-size:48px; margin-bottom:20px;">${service.ctaHeading}</h2>
            <p style="font-size:17px; margin-bottom:40px; max-width:800px; margin-left:auto; margin-right:auto;">${service.ctaDescription}</p>
            <div class="buttons">
              <a href="contact.html" class="btn btn-amber">Get in Touch &rarr;</a>
              <a href="services.html" class="btn btn-outline-white">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  document.addEventListener("DOMContentLoaded", renderServicePage);
})();
