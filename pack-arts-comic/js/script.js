/* ════════════════════════════════════════════
   PACK ARTS COMIC — script.js
════════════════════════════════════════════ */

/* ─── COUNTDOWN TIMER ─────────────────────── */
(function () {
  let total = 4 * 3600 + 59 * 60 + 47;

  const th = document.getElementById('th');
  const tm = document.getElementById('tm');
  const ts = document.getElementById('ts');

  if (!th || !tm || !ts) return;

  function tick() {
    if (total > 0) total--;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    th.textContent = String(h).padStart(2, '0');
    tm.textContent = String(m).padStart(2, '0');
    ts.textContent = String(s).padStart(2, '0');
  }

  setInterval(tick, 1000);
})();

/* ─── SMOOTH SCROLL para âncoras ───────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── INTERSECTION OBSERVER — fade-in cards ─ */
(function () {
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.dataset.tf || 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.stat-card, .bonus-card, .testi-card, .check-item'
  ).forEach(function (el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
})();
