// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Language switcher
const languageSelect = document.getElementById('language-select');
if (languageSelect) {
  // Load saved language from localStorage
  const savedLanguage = localStorage.getItem('language') || 'en';
  languageSelect.value = savedLanguage;
  applyLanguage(savedLanguage);

  languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
  });
}

function applyLanguage(lang) {
  // Update all elements with data attributes
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update page title
  const titleTag = document.getElementById('title-tag');
  if (titleTag) {
    const titleData = titleTag.getAttribute(`data-${lang}`);
    if (titleData) {
      document.title = titleData;
    }
  }
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Donation form (demo only)
const form = document.getElementById('donationForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic client-side validation
    const data = Object.fromEntries(new FormData(form));
    if (!data.name || !data.email || !data.bloodType || !data.date) {
      statusEl.textContent = 'Please fill all required fields.';
      statusEl.style.color = '#c62828';
      return;
    }

    // Simulate success
    statusEl.textContent = `Thank you, ${data.name}! We'll email you confirmation for ${data.date}.`;
    statusEl.style.color = 'green';
    form.reset();

    // TODO: Connect to a backend or form service (Formspree, Netlify Forms, etc.)
  });
}
