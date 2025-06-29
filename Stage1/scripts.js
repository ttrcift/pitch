// Initialize fullPage.js
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: [
    'cover', 'vision', 'root-cause', 'market',
    'solution', 'workflow', 'advantage', 'mvp',
    'business-model', 'go-to-market', 'investment',
    'team-vision'
  ],
  navigationTooltips: [
    'Cover', 'Vision', 'Root Cause', 'Market',
    'Solution', 'Workflow', 'Advantage', 'MVP',
    'Business Model', 'Go-To-Market', 'Investment',
    'Team & Vision'
  ],
  showActiveTooltip: false
});

// Language Toggle Logic
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
