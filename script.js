/* ============================================================
   FOCURA — Landing Page Scripts
   - Sticky nav shadow
   - Mobile menu toggle
   - Smooth scroll with offset
   - Active nav link highlight
   - Scroll reveal animation
   - Deep-link handling (URL hash)
============================================================ */
(function () {
  'use strict';

  /* ---------- Sticky nav shadow ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll offset (height of sticky nav + a bit) ---------- */
  var NAV_OFFSET = 88;

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka menu navigasi');
  }

  function openMenu() {
    links.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Tutup menu navigasi');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      if (links.classList.contains('open')) closeMenu();
      else openMenu();
    });
  }

  /* ---------- Smooth scroll for all internal anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var targetId = a.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.length < 2) return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      var top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top: top, behavior: 'smooth' });

      if (history.pushState) history.pushState(null, '', targetId);
    });
  });

  /* ---------- Close menu when clicking outside ---------- */
  document.addEventListener('click', function (e) {
    if (!links || !links.classList.contains('open')) return;
    if (links.contains(e.target) || toggle.contains(e.target)) return;
    closeMenu();
  });

  /* ---------- Highlight active nav link on scroll ---------- */
  var sections   = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActive(id) {
    navAnchors.forEach(function (a) {
      var isActive = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', isActive);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, {
      rootMargin: '-' + (NAV_OFFSET + 20) + 'px 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Scroll reveal animation ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback for very old browsers
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Handle URL hash on page load ---------- */
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function () {
        var top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 120);
    }
  }
})();
