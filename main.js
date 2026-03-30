import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});
