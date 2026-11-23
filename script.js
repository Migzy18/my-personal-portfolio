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