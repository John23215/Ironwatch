// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

const darkTheme = {
  '--bg-color': '#0d1117',
  '--text-color': '#c9d1d9',
  '--accent-blue': '#58a6ff',
  '--accent-purple': '#8a3ffc',
  '--glass-bg': 'rgba(13, 17, 23, 0.6)',
  '--glass-border': 'rgba(255, 255, 255, 0.1)',
  '--shadow-glow-blue': '#58a6ff88',
  '--shadow-glow-purple': '#8a3ffc88',
};

const lightTheme = {
  '--bg-color': '#f0f0f3',
  '--text-color': '#222222',
  '--accent-blue': '#3b82f6',
  '--accent-purple': '#8b5cf6',
  '--glass-bg': 'rgba(255, 255, 255, 0.6)',
  '--glass-border': 'rgba(0, 0, 0, 0.1)',
  '--shadow-glow-blue': '#3b82f688',
  '--shadow-glow-purple': '#8b5cf688',
};

function setTheme(theme) {
  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty(key, value);
  }
}

function toggleTheme() {
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
  if (currentBg === darkTheme['--bg-color']) {
    setTheme(lightTheme);
    themeToggleBtn.textContent = '🌞';
  } else {
    setTheme(darkTheme);
    themeToggleBtn.textContent = '🌗';
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize with dark theme
setTheme(darkTheme);
themeToggleBtn.textContent = '🌗';

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Entrance animations on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.container, .hero-content, .feature-card, .command-card, .discord-embed').forEach(el => {
  observer.observe(el);
});

// Carousel functionality for showcase
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

updateCarousel();

// Particle background animation
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particlesArray;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000);
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(88, 166, 255, 0.5)';
    ctx.shadowColor = 'rgba(138, 63, 252, 0.7)';
    ctx.shadowBlur = 10;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
    if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  initParticles();
});

initParticles();
animateParticles();
