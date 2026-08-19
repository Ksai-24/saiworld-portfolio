<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sai — Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <style>
      /* ============================
   Tokens
============================ */
      :root {
        --bg: #0b0d10;
        --bg-alt: #0f1216;
        --text: #ededea;
        --muted: #8a9099;
        --accent: #6fe7dd;
        --accent-2: #8b7fd9;
        --line: rgba(237, 237, 234, 0.08);

        --font-display: "Space Grotesk", sans-serif;
        --font-body: "Inter", sans-serif;
        --font-mono: "JetBrains Mono", monospace;

        --edge: 90px; /* cube half-size */
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background: var(--bg);
        color: var(--text);
        font-family: var(--font-body);
        overflow-x: hidden;
        position: relative;
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
        * {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }

      /* subtle grain for texture, keeps flat dark bg from feeling sterile */
      .grain {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        opacity: 0.035;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      ul {
        list-style: none;
      }

      ::selection {
        background: var(--accent);
        color: #0b0d10;
      }

      :focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 3px;
      }

      /* ============================
   Nav
============================ */
      .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 6vw;
        font-family: var(--font-mono);
        font-size: 0.8rem;
        letter-spacing: 0.05em;
        backdrop-filter: blur(6px);
      }

      .nav-mark {
        font-family: var(--font-display);
        font-weight: 700;
        letter-spacing: 0.12em;
        color: var(--accent);
      }

      .nav-links {
        display: flex;
        gap: 32px;
      }
      .nav-links a {
        color: var(--muted);
        transition: color 0.25s ease;
        text-transform: uppercase;
      }
      .nav-links a:hover {
        color: var(--text);
      }

      @media (max-width: 640px) {
        .nav-links {
          gap: 18px;
        }
      }

      /* ============================
   Hero + 3D cube (signature element)
============================ */
      .hero {
        min-height: 100svh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4vw;
        padding: 0 6vw;
        position: relative;
        z-index: 2;
      }

      .hero-text {
        max-width: 560px;
      }

      .eyebrow {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent-2);
        margin-bottom: 18px;
        letter-spacing: 0.04em;
      }

      .hero-title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: clamp(3.5rem, 9vw, 7rem);
        line-height: 0.95;
        letter-spacing: -0.02em;
      }

      .hero-title .dot {
        color: var(--accent);
      }

      .hero-sub {
        margin-top: 24px;
        color: var(--muted);
        font-size: 1.05rem;
        line-height: 1.6;
        max-width: 44ch;
      }

      .cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 36px;
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--text);
        border-bottom: 1px solid var(--accent);
        padding-bottom: 4px;
        transition:
          gap 0.25s ease,
          color 0.25s ease;
      }
      .cta:hover {
        gap: 14px;
        color: var(--accent);
      }
      .arrow {
        transition: transform 0.25s ease;
      }

      /* --- the cube --- */
      .hero-scene {
        width: 320px;
        height: 320px;
        perspective: 900px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cube {
        position: relative;
        width: calc(var(--edge) * 2);
        height: calc(var(--edge) * 2);
        transform-style: preserve-3d;
        transform: rotateX(-24deg) rotateY(35deg);
        transition: transform 0.15s ease-out;
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0%,
        100% {
          transform: rotateX(-24deg) rotateY(35deg) translateY(0px);
        }
        50% {
          transform: rotateX(-24deg) rotateY(35deg) translateY(-14px);
        }
      }

      .face {
        position: absolute;
        width: calc(var(--edge) * 2);
        height: calc(var(--edge) * 2);
        border: 1px solid var(--accent);
        background: linear-gradient(
          135deg,
          rgba(111, 231, 221, 0.06),
          rgba(139, 127, 217, 0.04)
        );
        backdrop-filter: blur(2px);
      }

      .front {
        transform: translateZ(var(--edge));
      }
      .back {
        transform: translateZ(calc(var(--edge) * -1)) rotateY(180deg);
      }
      .right {
        transform: rotateY(90deg) translateZ(var(--edge));
        border-color: var(--accent-2);
      }
      .left {
        transform: rotateY(-90deg) translateZ(var(--edge));
        border-color: var(--accent-2);
      }
      .top {
        transform: rotateX(90deg) translateZ(var(--edge));
        opacity: 0.6;
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(var(--edge));
        opacity: 0.6;
      }

      @media (max-width: 900px) {
        .hero {
          flex-direction: column;
          justify-content: center;
          gap: 60px;
          text-align: left;
          padding-top: 140px;
        }
        .hero-scene {
          width: 220px;
          height: 220px;
        }
        :root {
          --edge: 60px;
        }
      }

      /* ============================
   Sections
============================ */
      .section {
        position: relative;
        z-index: 2;
        padding: 140px 6vw;
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-label {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 32px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--line);
      }

      .about-text {
        font-family: var(--font-display);
        font-size: clamp(1.4rem, 2.6vw, 2rem);
        line-height: 1.5;
        max-width: 46ch;
        color: var(--text);
      }

      /* --- skills --- */
      .skill-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 16px;
      }

      .skill-card {
        border: 1px solid var(--line);
        padding: 28px 20px;
        font-family: var(--font-mono);
        font-size: 0.9rem;
        color: var(--muted);
        transform-style: preserve-3d;
        transition:
          transform 0.35s ease,
          border-color 0.35s ease,
          color 0.35s ease;
      }

      .skill-card:hover {
        transform: translateY(-6px) rotateX(6deg);
        border-color: var(--accent);
        color: var(--text);
      }

      /* --- projects --- */
      .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 28px;
      }

      .project-card {
        border: 1px solid var(--line);
        padding: 28px;
        transform-style: preserve-3d;
        transition:
          transform 0.35s ease,
          border-color 0.35s ease;
        will-change: transform;
      }

      .project-card:hover {
        border-color: var(--accent-2);
      }

      .project-face {
        height: 140px;
        margin-bottom: 20px;
        background: linear-gradient(
          135deg,
          rgba(111, 231, 221, 0.1),
          rgba(139, 127, 217, 0.1)
        );
        border: 1px solid var(--line);
      }

      .project-card h3 {
        font-family: var(--font-display);
        font-size: 1.25rem;
        margin-bottom: 8px;
      }

      .project-card p {
        color: var(--muted);
        font-size: 0.92rem;
        line-height: 1.55;
        margin-bottom: 18px;
      }

      .project-link {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
      }

      /* --- contact --- */
      .contact {
        text-align: left;
      }

      .contact-title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 3.2rem);
        margin-bottom: 24px;
        max-width: 14ch;
      }

      .socials {
        display: flex;
        gap: 24px;
        margin-top: 40px;
        font-family: var(--font-mono);
        font-size: 0.85rem;
      }

      .socials a {
        color: var(--muted);
        transition: color 0.25s ease;
      }
      .socials a:hover {
        color: var(--accent);
      }

      /* ============================
   Footer
============================ */
      .footer {
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 40px 6vw 60px;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--muted);
      }
    </style>
  </head>
  <body>
    <div class="grain"></div>

    <nav class="nav">
      <span class="nav-mark">SAI</span>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <header class="hero">
      <div class="hero-text">
        <p class="eyebrow">// building things for the web</p>
        <h1 class="hero-title">Sai<span class="dot">.</span></h1>
        <p class="hero-sub">
          Developer crafting clean interfaces and small, precise interactions —
          one axis at a time.
        </p>
        <a href="#work" class="cta"
          >See the work <span class="arrow">↓</span></a
        >
      </div>

      <div class="hero-scene" id="scene">
        <div class="cube" id="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
    </header>

    <!-- ABOUT -->
    <section class="section" id="about">
      <p class="section-label">About</p>
      <p class="about-text">
        I'm Sai — I design and build for the web, treating layout and motion as
        part of the message, not decoration on top of it. This portfolio itself
        is the proof of work: no frameworks, no build step, just HTML, CSS and
        JavaScript doing exactly what they're good at.
      </p>
    </section>

    <!-- SKILLS -->
    <section class="section" id="skills">
      <p class="section-label">Skills</p>
      <div class="skill-grid">
        <div class="skill-card"><span>HTML5</span></div>
        <div class="skill-card"><span>CSS3</span></div>
        <div class="skill-card"><span>JavaScript</span></div>
        <div class="skill-card"><span>Responsive Design</span></div>
        <div class="skill-card"><span>Git &amp; GitHub</span></div>
        <div class="skill-card"><span>UI Motion</span></div>
      </div>
    </section>

    <!-- WORK -->
    <section class="section" id="work">
      <p class="section-label">Selected Work</p>
      <div class="project-grid">
        <article class="project-card">
          <div class="project-face"></div>
          <h3>Project One</h3>
          <p>
            A short line describing what this project does and the problem it
            solves.
          </p>
          <a href="#" class="project-link">View project →</a>
        </article>

        <article class="project-card">
          <div class="project-face"></div>
          <h3>Project Two</h3>
          <p>
            A short line describing what this project does and the problem it
            solves.
          </p>
          <a href="#" class="project-link">View project →</a>
        </article>

        <article class="project-card">
          <div class="project-face"></div>
          <h3>Project Three</h3>
          <p>
            A short line describing what this project does and the problem it
            solves.
          </p>
          <a href="#" class="project-link">View project →</a>
        </article>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact" id="contact">
      <p class="section-label">Contact</p>
      <h2 class="contact-title">Let's build something.</h2>
      <a href="mailto:you@example.com" class="cta">you@example.com</a>
      <div class="socials">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </section>

    <footer class="footer">
      <span>© <span id="year"></span> Sai. Built with HTML, CSS &amp; JS.</span>
    </footer>

    <script>
      // ============================
      // Footer year
      // ============================
      document.getElementById("year").textContent = new Date().getFullYear();

      // ============================
      // Respect reduced motion
      // ============================
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // ============================
      // Hero cube — tracks cursor within the scene
      // ============================
      const scene = document.getElementById("scene");
      const cube = document.getElementById("cube");

      if (scene && cube && !prefersReducedMotion) {
        const baseX = -24; // matches CSS rotateX
        const baseY = 35; // matches CSS rotateY
        const range = 18; // how far the cube tilts toward the cursor

        scene.addEventListener("mousemove", (e) => {
          const rect = scene.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
          const py = (e.clientY - rect.top) / rect.height; // 0 -> 1

          const rotY = baseY + (px - 0.5) * range * 2;
          const rotX = baseX - (py - 0.5) * range * 2;

          cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          cube.style.animation = "none"; // pause float while interacting
        });

        scene.addEventListener("mouseleave", () => {
          cube.style.transform = "";
          cube.style.animation = "float 6s ease-in-out infinite";
        });
      }

      // ============================
      // Project & skill cards — subtle tilt on hover, follows pointer
      // ============================
      const tiltCards = document.querySelectorAll(".project-card, .skill-card");

      if (!prefersReducedMotion) {
        tiltCards.forEach((card) => {
          const maxTilt = 8;

          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            const rotY = (px - 0.5) * maxTilt * 2;
            const rotX = -(py - 0.5) * maxTilt * 2;

            card.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          });

          card.addEventListener("mouseleave", () => {
            card.style.transform = "";
          });
        });
      }

      // ============================
      // Scroll-reveal for sections
      // ============================
      const revealTargets = document.querySelectorAll(".section");

      revealTargets.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = "translateY(0)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      revealTargets.forEach((el) => observer.observe(el));
    </script>
  </body>
</html>
