/* ================================================================
   scripts.js — fernandodiass.com.br
   Última atualização: 2026-05-25
================================================================ */

/* ---- HAMBURGER ---- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinksEl   = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('#navLinks a').forEach(a =>
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  })
);

/* ---- HERO CAROUSEL ---- */
const heroSlides = document.getElementById('heroSlides');
const heroDots   = document.querySelectorAll('.hero-dot');
let heroIdx = 0;
const heroTotal = 3;
let heroTimer;

function heroGo(idx) {
  heroIdx = (idx + heroTotal) % heroTotal;
  heroSlides.style.transform = `translateX(-${heroIdx * 100}%)`;
  heroDots.forEach((d, i) => {
    d.classList.toggle('active', i === heroIdx);
    d.setAttribute('aria-selected', i === heroIdx);
  });
}

function heroReset() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => heroGo(heroIdx + 1), 4500);
}

document.getElementById('heroPrev').addEventListener('click', () => { heroGo(heroIdx - 1); heroReset(); });
document.getElementById('heroNext').addEventListener('click', () => { heroGo(heroIdx + 1); heroReset(); });
heroDots.forEach(d => d.addEventListener('click', () => { heroGo(+d.dataset.idx); heroReset(); }));
heroReset();

/* ---- PROJECTS CAROUSEL — responsivo & automático ---- */
const viewport = document.getElementById('projViewport');
const track    = document.getElementById('projectsTrack');
const cards    = Array.from(track.querySelectorAll('.project-card'));
const dotsWrap = document.getElementById('projDots');
const GAP      = 20;

let projIdx     = 0;
let projVisible = 1;
let projTimer;
let projDots    = [];

function calcVisible() {
  const vw = viewport.clientWidth;
  if (vw >= 900) return 3;
  if (vw >= 600) return 2;
  return 1;
}

function buildDots() {
  dotsWrap.innerHTML = '';
  projDots = [];
  const pages = Math.ceil(cards.length / projVisible);
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div');
    d.className = 'proj-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', `Página ${i + 1} de projetos`);
    d.addEventListener('click', () => { projGo(i); projReset(); });
    dotsWrap.appendChild(d);
    projDots.push(d);
  }
}

function setCardWidth() {
  projVisible = calcVisible();
  const cw = Math.floor((viewport.clientWidth - GAP * (projVisible - 1)) / projVisible);
  cards.forEach(c => {
    c.style.setProperty('--card-w', cw + 'px');
    c.style.width    = cw + 'px';
    c.style.minWidth = cw + 'px';
    c.style.marginRight = GAP + 'px';
  });
  buildDots();
  projGo(0);
}

function projGo(idx) {
  const pages = Math.ceil(cards.length / projVisible);
  projIdx = Math.max(0, Math.min(idx, pages - 1));
  const cardW  = cards[0].offsetWidth + GAP;
  const offset = projIdx * projVisible * cardW;
  track.style.transform = `translateX(-${offset}px)`;
  projDots.forEach((d, i) => d.classList.toggle('active', i === projIdx));
}

function projReset() {
  clearInterval(projTimer);
  projTimer = setInterval(() => {
    const pages = Math.ceil(cards.length / projVisible);
    projGo((projIdx + 1) % pages);
  }, 3500);
}

/* Drag / swipe */
let isDrag = false, dragStartX = 0, dragDeltaX = 0;

track.addEventListener('mousedown',  e => { isDrag = true; dragStartX = e.clientX; track.classList.add('dragging'); });
track.addEventListener('mouseleave', ()  => { if (isDrag) finishDrag(); });
track.addEventListener('mouseup',    e  => { if (isDrag) { dragDeltaX = e.clientX - dragStartX; finishDrag(); } });

track.addEventListener('touchstart', e => { isDrag = true; dragStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend',   e => { if (isDrag) { dragDeltaX = e.changedTouches[0].clientX - dragStartX; finishDrag(); } });

function finishDrag() {
  isDrag = false;
  track.classList.remove('dragging');
  const pages = Math.ceil(cards.length / projVisible);
  if      (dragDeltaX < -50) projGo(Math.min(projIdx + 1, pages - 1));
  else if (dragDeltaX >  50) projGo(Math.max(projIdx - 1, 0));
  dragDeltaX = 0;
  projReset();
}

window.addEventListener('resize', () => { setCardWidth(); projReset(); });
setCardWidth();
projReset();

/* ---- PROJECT DATA ---- */
const projectData = [
  {
    title: 'Identidade Visual',
    cat:   'Design Gráfico · 2024',
    emoji: '🔥',
    desc:  'Rebranding completo para startup de tecnologia. Tipografia ousada, paleta de alto contraste, manual de marca e adaptações para mídias digitais e offline.',
    link1: '#',
    link2: 'https://www.behance.net/fernando-dias'
  },
  {
    title: 'Sites e Landing Pages',
    cat:   'Web Design · 2024',
    emoji: '🌐',
    desc:  'Portal corporativo com sistema de conteúdo dinâmico e design responsivo mobile-first. Core Web Vitals 98/100.',
    link1: '#',
    link2: 'https://www.behance.net/fernando-dias'
  },
  {
    title: 'Packs & Assets',
    cat:   'Design Gráfico · 2024',
    emoji: '🎭',
    desc:  'Coleções de assets digitais para designers e criadores de conteúdo. Formatos PNG 4K + arquivos editáveis com licença comercial.',
    link1: '#',
    link2: 'https://www.behance.net/fernando-dias'
  },
  {
    title: 'Dashboards & Components',
    cat:   'Código & Sistemas · 2025',
    emoji: '⚙️',
    desc:  'Interfaces e componentes de código para sistemas e aplicações web. Design system completo com tokens e estados.',
    link1: '#',
    link2: 'https://github.com/fernandodiass'
  },
  {
    title: 'Prompts & Automação c/ IA',
    cat:   'Código & Sistemas · 2025',
    emoji: '🤖',
    desc:  'Sistemas de engenharia de prompts e automação para equipes de marketing e negócios digitais. Redução de até 60% no tempo de produção de conteúdo.',
    link1: '#',
    link2: 'https://github.com/fernandodiass'
  },
  {
    title: 'Criação de Infoprodutos',
    cat:   'Design Gráfico / Web Design · 2025',
    emoji: '📚',
    desc:  'Design e desenvolvimento completo para e-books, cursos online e materiais educacionais digitais.',
    link1: '#',
    link2: 'https://www.behance.net/fernando-dias'
  }
];

/* ---- MODAL ---- */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');

function openModal(idx) {
  const p = projectData[idx];
  if (!p) return;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalCat').textContent   = p.cat;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalEmoji').textContent = p.emoji;
  document.getElementById('modalLink1').href        = p.link1;
  document.getElementById('modalLink2').href        = p.link2;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click',   () => openModal(+card.dataset.project));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(+card.dataset.project); });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---- NAV HIGHLIGHT via IntersectionObserver ---- */
const navAs = document.querySelectorAll('.nav-links a');

document.querySelectorAll('section[id]').forEach(section => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAs.forEach(a => {
        const active = a.getAttribute('href') === `#${id}`;
        a.style.background  = active ? 'var(--yellow)' : '';
        a.style.color       = active ? 'var(--black)'  : '';
        a.style.borderColor = active ? 'var(--black)'  : '';
        a.style.boxShadow   = active ? '2px 2px 0 var(--black)' : '';
      });
    });
  }, { threshold: 0.35 }).observe(section);
});

/* ---- ANCHOR NAVIGATION — instantânea, sem JS, usa CSS scroll-margin-top ---- */
/* O scroll das âncoras é feito pelo navegador nativamente (scroll-behavior: smooth
   já está no CSS). Aqui apenas garantimos que o momentum JS não interfira. */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const dest = document.querySelector(link.getAttribute('href'));
    if (!dest) return;
    e.preventDefault();
    dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ---- SMOOTH WHEEL SCROLL — só para a roda do mouse, nunca interfere em âncoras ---- */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* Detecta trackpad (deltas fracionários ou pequenos = trackpad com inércia nativa) */
  let isTrackpad = false;
  window.addEventListener('wheel', e => {
    isTrackpad = Math.abs(e.deltaY) < 50 || !Number.isInteger(e.deltaY);
  }, { passive: true });

  let scrollY  = window.scrollY;
  let targetY  = window.scrollY;
  let velocity = 0;
  let rafId    = null;
  let lastTime = 0;
  let isNavigating = false;  /* bloqueia wheel durante scroll de âncora */

  const FRICTION = 0.85;
  const MAX_VEL  = 200;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function maxScroll()       { return document.body.scrollHeight - window.innerHeight; }

  function tick(ts) {
    const dt   = Math.min((ts - lastTime) / 16.67, 3);
    lastTime   = ts;
    const diff = targetY - scrollY;

    velocity = clamp(
      velocity * Math.pow(FRICTION, dt) + diff * 0.14 * dt,
      -MAX_VEL, MAX_VEL
    );
    scrollY += velocity;

    if (Math.abs(diff) < 0.5 && Math.abs(velocity) < 0.5) {
      scrollY  = targetY;
      velocity = 0;
      window.scrollTo(0, scrollY);
      rafId = null;
      return;
    }

    scrollY = clamp(scrollY, 0, maxScroll());
    window.scrollTo(0, scrollY);
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (!rafId) { lastTime = performance.now(); rafId = requestAnimationFrame(tick); }
  }

  window.addEventListener('wheel', e => {
    if (isTrackpad || isNavigating) return;
    e.preventDefault();

    const raw  = e.deltaMode === 1 ? e.deltaY * 40
               : e.deltaMode === 2 ? e.deltaY * window.innerHeight
               : e.deltaY;
    const step = clamp(raw * 1.15, -500, 500);
    targetY    = clamp(targetY + step, 0, maxScroll());
    start();
  }, { passive: false });

  /* Sincroniza com scroll nativo (touch, teclado, barra lateral) */
  window.addEventListener('scroll', () => {
    if (!rafId) { scrollY = window.scrollY; targetY = window.scrollY; }
  }, { passive: true });
})();

/* ---- SCROLL-REVEAL — fade + slide-up ---- */
(function () {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-group').forEach(el => revealObs.observe(el));
})();
