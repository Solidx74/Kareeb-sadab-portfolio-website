// Kareeb Sadab - Portfolio Scripts

  // nav scroll state
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMobileMenu(){
    navToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  }
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

  // reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // scroll spy
  const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-menu a[href^="#"]');
  const spySections = ['hero','experience','skills','projects','certifications','portfolios','publications','contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allNavLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  spySections.forEach(sec => spyObserver.observe(sec));

  // project filter (animated)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#project-grid .project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed','true');
      const f = btn.dataset.f;
      cards.forEach(card => {
        const show = f === 'all' || card.dataset.cat === f;
        if (show) {
          card.style.display = 'flex';
          requestAnimationFrame(() => card.classList.remove('is-hidden'));
        } else {
          card.classList.add('is-hidden');
          setTimeout(() => { if (card.classList.contains('is-hidden')) card.style.display = 'none'; }, 280);
        }
      });
    });
  });

  // contact form: AJAX submit with feedback
  const cform = document.getElementById('contactForm');
  const cfSubmit = document.getElementById('cfSubmit');
  const cfSubmitLabel = document.getElementById('cfSubmitLabel');
  const cfMsg = document.getElementById('cfMsg');
  cform.addEventListener('submit', async (e) => {
    e.preventDefault();
    cfSubmit.disabled = true;
    cfSubmitLabel.innerHTML = '<span class="spinner"></span> Sending…';
    cfMsg.classList.remove('show','success','error');
    try {
      const res = await fetch(cform.action, {
        method: 'POST',
        body: new FormData(cform),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        cform.reset();
        cfMsg.textContent = "Thanks, I'll get back to you soon.";
        cfMsg.classList.add('show','success');
      } else {
        cfMsg.textContent = 'Something went wrong. Please email me directly instead.';
        cfMsg.classList.add('show','error');
      }
    } catch (err) {
      cfMsg.textContent = 'Network error. Please try again or email me directly.';
      cfMsg.classList.add('show','error');
    } finally {
      cfSubmit.disabled = false;
      cfSubmitLabel.textContent = 'Send Message';
    }
  });

  // ============ THEME TOGGLE ============
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const root = document.documentElement;
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch(e) {}
  }
  (function initTheme(){
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch(e) {}
    if (saved) { applyTheme(saved); }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { applyTheme('dark'); }
  })();
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  // ============ BACK TO TOP ============
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 600);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ STAT COUNTER ============
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  function animateCount(el){
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    const start = performance.now();
    function step(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(target * eased);
      el.textContent = prefix + val + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));
