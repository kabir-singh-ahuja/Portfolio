// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));

// Nav bg on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
nav.style.background = window.scrollY > 60
    ? 'rgba(8,11,15,.97)'
    : 'rgba(8,11,15,.85)';
}, { passive: true });

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
});
});