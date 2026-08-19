// ============================
// Footer year
// ============================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================
// Respect reduced motion
// ============================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================
// Hero cube — tracks cursor within the scene
// ============================
const scene = document.getElementById('scene');
const cube = document.getElementById('cube');

if (scene && cube && !prefersReducedMotion) {
  const baseX = -24; // matches CSS rotateX
  const baseY = 35;  // matches CSS rotateY
  const range = 18;  // how far the cube tilts toward the cursor

  scene.addEventListener('mousemove', (e) => {
    const rect = scene.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height;   // 0 -> 1

    const rotY = baseY + (px - 0.5) * range * 2;
    const rotX = baseX - (py - 0.5) * range * 2;

    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    cube.style.animation = 'none'; // pause float while interacting
  });

  scene.addEventListener('mouseleave', () => {
    cube.style.transform = '';
    cube.style.animation = 'float 6s ease-in-out infinite';
  });
}

// ============================
// Project & skill cards — subtle tilt on hover, follows pointer
// ============================
const tiltCards = document.querySelectorAll('.project-card, .skill-card');

if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    const maxTilt = 8;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rotY = (px - 0.5) * maxTilt * 2;
      const rotX = -(py - 0.5) * maxTilt * 2;

      card.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============================
// Scroll-reveal for sections
// ============================
const revealTargets = document.querySelectorAll('.section');

revealTargets.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
