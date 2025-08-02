document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggler = document.getElementById('darkModeToggler');
    const body = document.body;

    const updateButtonText = () => {
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggler.textContent = isDarkMode ? 'Enable Blue Theme' : 'Enable Black Theme';
    };
    // Function to set theme based on preference
    const setTheme = (theme) => {
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateButtonText();
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
    updateButtonText();

    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Modal Logic
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-button');
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const content = doc.querySelector('main').innerHTML;
                    modalBody.innerHTML = content;
                    modal.style.display = 'block';
                })
                .catch(err => {
                    console.error('Failed to fetch page: ', err);
                    modalBody.innerHTML = `<p>Sorry, the content could not be loaded. Please try refreshing the page.</p><p>You can also try to open it in a new tab: <a href="${url}" target="_blank">${url}</a></p>`;
                    modal.style.display = 'block';
                });
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Hamburger Menu Logic
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        const isExpanded = nav.classList.contains('nav-open');
        hamburgerMenu.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                hamburgerMenu.setAttribute('aria-expanded', false);
            }
        });
    });

    // Quote of the Day Logic
    const fetchQuote = () => {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');

        if (quoteText && quoteAuthor) {
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    quoteText.textContent = `“${data.content}”`;
                    quoteAuthor.textContent = `— ${data.author}`;
                })
                .catch(error => {
                    console.error('Error fetching the quote:', error);
                    quoteText.textContent = '“The only way to do great work is to love what you do.”';
                    quoteAuthor.textContent = '— Steve Jobs';
                });
        }
    };

    fetchQuote();
});
