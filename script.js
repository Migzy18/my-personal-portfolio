const backToTOPButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTOPButton.style.display = 'block'; }
    else {
        backToTOPButton.style.display = 'none';
    }
});

backToTOPButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll( ".about, .army, .projects, .contact" );
    
const revealObserver = new IntersectionObserver( function (entries) { entries.forEach(function (entry) {if (entry.isIntersecting) {entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}});},
{threshold: 0.1});
    

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});

/* Mobile Navigation Menu */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navlinks');

menuToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✖" : "☰"; });

navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰"; }); });
            