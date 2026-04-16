/* ================================================================
   ZEAL by Kasana – main.js (Reference-Matched)
   ================================================================ */

'use strict';

/* ── Custom Cursor ──────────────────────────────────────────────── */
const cursor = document.getElementById('customCursor');
if (cursor && window.innerWidth > 768) {
  let cx = -100, cy = -100;
  window.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
  });
  document.addEventListener('mouseleave', () => cursor.style.display = 'none');
  document.addEventListener('mouseenter', () => cursor.style.display = 'block');

  function updateCursor() {
    cursor.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);
}

/* ── Navbar: scroll glass effect + active link tracking ─────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  const btt = document.getElementById('backToTop');
  if (btt) {
    if (window.scrollY > 500) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }

  const sections = document.querySelectorAll('section[id], header[id]');
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Back-to-top ────────────────────────────────────────────────── */
const bttBtn = document.getElementById('backToTop');
if (bttBtn) {
  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Smooth scroll ──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Mobile menu ────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-links');

function closeMenu() {
  hamburger?.classList.remove('open');
  navList?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
function openMenu() {
  hamburger?.classList.add('open');
  navList?.classList.add('open');
  hamburger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });
}

document.addEventListener('click', e => {
  if (navList?.classList.contains('open') && !navList.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ── Scroll Reveal ──────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

/* ── Gallery Filtering ──────────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

if (filterBtns.length > 0 && galleryItems.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
}

/* ── Lightbox ───────────────────────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');
let lbIndex = 0;

function getVisibleItems() {
  return Array.from(galleryItems).filter(item => !item.classList.contains('hide'));
}

function openLightbox(index) {
  const visible = getVisibleItems();
  if (index < 0 || index >= visible.length) return;
  lbIndex = index;
  const item = visible[index];
  const img = item.querySelector('img');
  const title = item.querySelector('.gi-info-text h4')?.textContent || '';
  const cat = item.querySelector('.gi-info-text span')?.textContent || '';

  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.querySelector('h4').textContent = title;
  lbCaption.querySelector('span').textContent = cat;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  lbPrev.style.display = lbIndex > 0 ? '' : 'none';
  lbNext.style.display = lbIndex < visible.length - 1 ? '' : 'none';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lbImg.src = '';
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    const visible = getVisibleItems();
    const visibleIndex = visible.indexOf(item);
    openLightbox(visibleIndex);
  });
});

lbClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
lbPrev?.addEventListener('click', e => {
  e.stopPropagation();
  openLightbox(lbIndex - 1);
});
lbNext?.addEventListener('click', e => {
  e.stopPropagation();
  openLightbox(lbIndex + 1);
});

document.addEventListener('keydown', e => {
  if (!lightbox?.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1);
  if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
});

/* ── Contact Form AJAX Handling ─────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const successMsg  = document.getElementById('form-success-msg');
const errorMsg    = document.getElementById('form-error-msg');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const phone   = contactForm.querySelector('[name="phone"]');
    const email   = contactForm.querySelector('[name="email"]');
    const message = contactForm.querySelector('[name="message"]');
    const btn     = document.getElementById('submit-btn');
    const span    = btn ? btn.querySelector('span') : null;
    let valid = true;

    // Validation
    [phone, email, message].forEach(field => {
      if (field && field.required && !field.value.trim()) { shakeField(field); valid = false; }
    });

    if (email && email.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email.value)) { shakeField(email); valid = false; }
    }

    if (!valid) return;

    // AJAX Submission
    if (btn) {
      btn.disabled = true;
      if (span) span.textContent = 'Sending...';
    }
    
    // Hide previous error
    if (errorMsg) { errorMsg.style.display = 'none'; errorMsg.textContent = ''; }

    const formData = new FormData(contactForm);

    fetch('/contact-process', {
      method: 'POST',
      body: formData
    })
    .then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await response.json() : null;

      if (!response.ok) {
        throw new Error(data?.error || `Server Error (${response.status})`);
      }
      return data;
    })
    .then(data => {
      if (data && data.success) {
        // Hide form and show success
        contactForm.style.display = 'none';
        if (successMsg) {
          successMsg.style.display = 'flex';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error(data?.error || 'Unknown error occurred.');
      }
    })
    .catch(error => {
      console.error('Submission Error:', error);
      if (btn) btn.disabled = false;
      if (span) span.textContent = 'Submit Enquiry';
      if (errorMsg) {
        errorMsg.textContent = error.message;
        errorMsg.style.display = 'block';
        errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert('Error: ' + error.message);
      }
    });
  });
}

function shakeField(field) {
  field.style.borderColor = '#EF4444';
  field.animate([
    { transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' },
    { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }
  ], { duration: 360, easing: 'ease-in-out' });
  setTimeout(() => field.style.borderColor = '', 2000);
}

/* ── Hero Slider ────────────────────────────────────────────────── */
const slides  = document.querySelectorAll('.hero-slide');
const dots    = document.querySelectorAll('.hero-dot');
const prevBtn = document.getElementById('heroPrev');
const nextBtn = document.getElementById('heroNext');
let current = 0;
let sliderTimer;

function goToSlide(index) {
  slides[current].classList.remove('active');
  if (dots[current]) dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  if (dots[current]) dots[current].classList.add('active');
}

function startAutoSlide() { sliderTimer = setInterval(() => goToSlide(current + 1), 5000); }
function stopAutoSlide() { clearInterval(sliderTimer); }

if (slides.length) {
  startAutoSlide();
  prevBtn?.addEventListener('click', () => { stopAutoSlide(); goToSlide(current - 1); startAutoSlide(); });
  nextBtn?.addEventListener('click', () => { stopAutoSlide(); goToSlide(current + 1); startAutoSlide(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => { stopAutoSlide(); goToSlide(parseInt(dot.dataset.slide)); startAutoSlide(); });
  });
}

/* ── Keyboard nav for hero ──────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (lightbox?.classList.contains('active')) return;
  if (e.key === 'ArrowLeft' && slides.length) { stopAutoSlide(); goToSlide(current - 1); startAutoSlide(); }
  if (e.key === 'ArrowRight' && slides.length) { stopAutoSlide(); goToSlide(current + 1); startAutoSlide(); }
});

/* ── Staggered Delays ───────────────────────────────────────────── */
document.querySelectorAll('.space-card').forEach((card, i) => card.style.transitionDelay = `${i * 0.15}s`);
document.querySelectorAll('.connect-card').forEach((card, i) => card.style.transitionDelay = `${i * 0.1}s`);
document.querySelectorAll('.reason-card').forEach((card, i) => card.style.transitionDelay = `${i * 0.12}s`);
document.querySelectorAll('.inv-card').forEach((card, i) => card.style.transitionDelay = `${i * 0.1}s`);
document.querySelectorAll('.nearby-item').forEach((item, i) => item.style.transitionDelay = `${i * 0.05}s`);

/* ── Resize handler ─────────────────────────────────────────────── */
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); }, { passive: true });
document.documentElement.classList.add('js-loaded');