// Slide titles for hover tooltips
const slideTitles = [
  "Cover",
  "Purpose & Problem",
  "Root Cause",
  "Market",
  "Solution",
  "Workflow",
  "Competitive Advantage",
  "MVP",
  "Business Model",
  "Go-To-Market",
  "Financing Requirements",
  "Team & Vision"
];

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function() {
      const bullets = document.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach((bullet, index) => {
        bullet.setAttribute('title', slideTitles[index]);
      });
    },
  },
});

// For safety, in case init hook is too soon
setTimeout(() => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet, index) => {
    bullet.setAttribute('title', slideTitles[index]);
  });
}, 500);

// Language Toggle
const enBtn = document.getElementById('en-btn');
const cnBtn = document.getElementById('cn-btn');

function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

enBtn.addEventListener('click', () => setLanguage('en'));
cnBtn.addEventListener('click', () => setLanguage('cn'));

// Default language
setLanguage('en');
