document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggler = document.getElementById('darkModeToggler');
    const body = document.body;
    const header = document.querySelector('header');
    const heroText = document.querySelector('.hero-text');

    // Function to set theme based on preference
    const setTheme = (theme) => {
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    };

    // Toggle theme
    darkModeToggler.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        setTheme(currentTheme);
    });

    // Check for saved theme in local storage or user's preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark-mode');
    } else {
        setTheme('light-mode');
    }

    // Scroll listener for header and hero text parallax
    window.addEventListener('scroll', () => {
        // Header style change on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hero text parallax effect
        if (heroText) {
            const scrollPosition = window.pageYOffset;
            heroText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
});
