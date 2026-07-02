// main.js — global site behaviors

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Navbar scroll state ---- */
  const nav = document.querySelector("nav.navbar");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  /* ---- Mobile menu ---- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(el => cio.observe(el));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    const duration = 2000;
    function step(ts) {
      const p = Math.min((ts - start) / duration, 1);
      const val = Math.floor(p * target);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---- Crossfade slideshows ---- */
  document.querySelectorAll("[data-slideshow]").forEach(container => {
    const imgs = container.querySelectorAll("img");
    const interval = parseInt(container.dataset.interval || "5000", 10);
    const dotsWrap = container.parentElement.querySelector("[data-slide-dots]");
    let idx = 0;
    if (!imgs.length) return;
    imgs[0].classList.add("active");

    let dots = [];
    if (dotsWrap) {
      imgs.forEach((_, i) => {
        const b = document.createElement("button");
        if (i === 0) b.classList.add("active");
        b.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function goTo(i) {
      imgs[idx].classList.remove("active");
      dots[idx] && dots[idx].classList.remove("active");
      idx = i;
      imgs[idx].classList.add("active");
      dots[idx] && dots[idx].classList.add("active");
    }

    setInterval(() => {
      const next = (idx + 1) % imgs.length;
      goTo(next);
    }, interval);
  });

});
