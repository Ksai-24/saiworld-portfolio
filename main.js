/* ════════════════════════════════════════════════════
   ESWARA SAI KATAKAM — PORTFOLIO JAVASCRIPT
   ════════════════════════════════════════════════════ */
'use strict';

/* ── Cursor ──────────────────────────────────────────── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function loopRing() {
  rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loopRing);
})();

document.querySelectorAll('a,button,.proj-card,.about-card,.svc-card,.strength-card,.ci-card,input,textarea').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width='56px'; ring.style.height='56px'; ring.style.borderColor='rgba(249,87,56,.5)'; dot.style.transform='translate(-50%,-50%) scale(1.3)'; });
  el.addEventListener('mouseleave', () => { ring.style.width='44px'; ring.style.height='44px'; ring.style.borderColor='rgba(249,87,56,.25)'; dot.style.transform='translate(-50%,-50%) scale(1)'; });
});

/* ── Navbar Scroll ───────────────────────────────────── */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  // Active link
  let cur = '';
  sections.forEach(s => { if (s.offsetTop - 90 <= window.scrollY) cur = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
}, { passive: true });

/* ── Hamburger ───────────────────────────────────────── */
const hbg      = document.getElementById('hamburger');
const navMenu  = document.getElementById('navLinks');
hbg.addEventListener('click', () => { navMenu.classList.toggle('open'); hbg.classList.toggle('open'); });
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navMenu.classList.remove('open'); hbg.classList.remove('open'); }));

/* ── Reveal on Scroll ────────────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* Project cards stagger */
const projObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 130);
      projObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.proj-card').forEach(el => projObs.observe(el));

/* ── Skill Bar Animation ─────────────────────────────── */
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fill = e.target;
      setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, 250);
      barObs.unobserve(fill);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.sb-fill').forEach(b => barObs.observe(b));

/* ── Counter Animation ───────────────────────────────── */
const ctrObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el  = e.target;
      const end = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.ceil(end / 40);
      const timer = setInterval(() => {
        cur = Math.min(cur + step, end);
        el.textContent = cur;
        if (cur >= end) clearInterval(timer);
      }, 35);
      ctrObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.astat-num').forEach(n => ctrObs.observe(n));

/* ── Hero Canvas Particles ───────────────────────────── */
(function particles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function resize() {
    const hero = canvas.parentElement;
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  const COLS = ['#0D3B66','#F95738','#F4D35E','#EE964B'];
  for (let i = 0; i < 60; i++) {
    pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2.5 + .5,
      c: COLS[Math.floor(Math.random() * COLS.length)],
      a: Math.random() * .45 + .1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.a;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = '#0D3B66';
          ctx.globalAlpha = (1 - d / 100) * 0.12;
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Typed Hero Subtitle ─────────────────────────────── */
const descEl = document.querySelector('.hero-desc');
const phrases = [
  'Securing the systems and building innovative digital products.',
  'Crafting secure full-stack web applications at scale.',
  'Bridging Cyber Security with modern development.',
  'Engineering precision meets elegant code.',
];
if (descEl) {
  let pi = 0, ci = 0, del = false;
  const PAUSE = 2400, TY = 42, DL = 20;
  function type() {
    const t = phrases[pi];
    del ? ci-- : ci++;
    descEl.textContent = t.slice(0, ci);
    if (!del && ci === t.length) { del = true; setTimeout(type, PAUSE); return; }
    if (del && ci === 0)         { del = false; pi = (pi + 1) % phrases.length; }
    setTimeout(type, del ? DL : TY);
  }
  setTimeout(type, 1400);
}

/* ── 3D Tilt on Project Cards ────────────────────────── */
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 10;
    const y = ((e.clientY - r.top ) / r.height - .5) * -10;
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ── Contact Form ────────────────────────────────────── */
const form    = document.getElementById('contactForm');
const sendBtn = document.getElementById('send-btn');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.fname.value.trim() || !form.femail.value.trim() || !form.fmessage.value.trim()) {
      form.style.animation = 'shake .4s ease';
      form.addEventListener('animationend', () => form.style.animation = '', { once: true });
      return;
    }
    sendBtn.disabled = true;
    sendBtn.innerHTML = `<span class="spin-icon">⟳</span> Sending…`;
    setTimeout(() => {
      sendBtn.innerHTML = `✔ Message Sent!`;
      sendBtn.style.background = '#10B981';
      form.reset();
      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg> Send Message`;
        sendBtn.style.background = '';
      }, 3500);
    }, 1800);
  });
}

/* ── Page entrance ───────────────────────────────────── */
document.body.style.opacity = '0';
document.body.style.transition = 'opacity .5s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });

/* ── Inject keyframes ────────────────────────────────── */
const ks = document.createElement('style');
ks.textContent = `
  @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-7px)} 40%{transform:translateX(7px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
  .spin-icon { display:inline-block; animation:spinr .9s linear infinite; }
  @keyframes spinr { to { transform: rotate(360deg); } }
`;
document.head.appendChild(ks);
