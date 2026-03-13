// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.feature, .info-card, .stat-box, .benefit-item, .contact-detail-card, .card, .fact-card, .legend-item, .admin-panel'
);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${(i % 6) * 0.07}s, transform 0.55s ease ${(i % 6) * 0.07}s`;
    observer.observe(el);
  });
}

// Volunteer (public) form
const volunteerForm = document.getElementById('volunteerForm');
const volunteerStatus = document.getElementById('volunteerStatus');
if (volunteerForm) {
  volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(volunteerForm));
    if (!data.name || !data.email || !data.phone || !data.area) {
      volunteerStatus.textContent = 'Please fill all required fields.';
      volunteerStatus.style.color = '#c62828';
      return;
    }
    volunteerStatus.textContent = `Thank you, ${data.name}! We'll be in touch soon.`;
    volunteerStatus.style.color = '#16a34a';
    volunteerForm.reset();
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    if (!data.name || !data.email || !data.subject || !data.message) {
      contactStatus.textContent = 'Please fill all required fields.';
      contactStatus.style.color = '#c62828';
      return;
    }
    contactStatus.textContent = `Message received, ${data.name}! We'll get back to you within 2 working days.`;
    contactStatus.style.color = '#16a34a';
    contactForm.reset();
  });
}

// Admin — Add Event
const addEventForm = document.getElementById('addEventForm');
const eventSuccess = document.getElementById('eventSuccess');
if (addEventForm) {
  addEventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(addEventForm));
    if (!data.title || !data.type || !data.location || !data.date) return;
    eventSuccess.classList.add('show');
    addEventForm.reset();
    setTimeout(() => eventSuccess.classList.remove('show'), 4000);
  });
}

// Admin — Add Volunteer
const addVolunteerForm = document.getElementById('addVolunteerForm');
const volunteerAdminSuccess = document.getElementById('volunteerAdminSuccess');
if (addVolunteerForm) {
  addVolunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(addVolunteerForm));
    if (!data.name || !data.email || !data.phone || !data.area || !data.joined) return;
    volunteerAdminSuccess.classList.add('show');
    addVolunteerForm.reset();
    setTimeout(() => volunteerAdminSuccess.classList.remove('show'), 4000);
  });
}
