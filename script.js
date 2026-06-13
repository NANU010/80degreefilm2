// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== SKILL BARS =====
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.getAttribute('data-width');
      entry.target.style.width = targetWidth + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(el => skillObserver.observe(el));

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeUp 0.5s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ===== CONTACT FORM =====
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all required fields.');
    return;
  }

  submitBtn.querySelector('span').textContent = 'Message Sent! ✓';
  submitBtn.style.background = '#2a7a2a';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.querySelector('span').textContent = 'Send Message →';
    submitBtn.style.background = '';
    submitBtn.disabled = false;
    document.getElementById('f-name').value = '';
    document.getElementById('f-email').value = '';
    document.getElementById('f-event').value = '';
    document.getElementById('f-msg').value = '';
  }, 3000);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '10px 40px';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.padding = '15px 40px';
    navbar.style.boxShadow = 'none';
  }
});

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});