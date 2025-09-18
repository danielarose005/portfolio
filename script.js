// Show portfolio when clicking "Get to Know Me"
document.getElementById('get-to-know-btn').addEventListener('click', () => {
  document.getElementById('landing-page').classList.add('d-none');
  document.getElementById('portfolio-site').classList.remove('d-none');
});

// Navbar slide switching
const navButtons = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.slide');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    slides.forEach(s => s.classList.remove('active'));
    slides[btn.dataset.slide].classList.add('active');
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
