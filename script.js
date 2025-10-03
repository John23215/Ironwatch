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

// Smooth scroll for nav links
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

// Carousel functionality
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
