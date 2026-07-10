// Özel İmleç (Custom Cursor) Mantığı
const cursor = document.querySelector('.custom-cursor');
const hoverLinks = document.querySelectorAll('.hover-link');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
});

// Scroll Etkileşimleri (Header karartma ve İçerik Gelişi)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal - Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Sadece bir kere çalışması için
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
