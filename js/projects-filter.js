// projects-filter.js
document.addEventListener("DOMContentLoaded", () => {
  const pills = document.querySelectorAll(".filter-pill");
  const cards = document.querySelectorAll("[data-category]");
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      cards.forEach(card => {
        const match = filter === "All" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
});
