document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggler = document.getElementById('darkModeToggler');
    const body = document.body;
    const header = document.querySelector('header');

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const updateButtonText = () => {
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggler.setAttribute('aria-label', isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
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

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark-mode'); // Default to dark theme
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
            // Check if the link is an external link
            if (link.hasAttribute('target')) {
                return;
            }

            e.preventDefault();
            const url = link.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const content = doc.querySelector('body').innerHTML;
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

    // Clock Logic
    const clockElement = document.getElementById('clock');
    const updateClock = () => {
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            clockElement.innerHTML = `${dateString} | ${timeString}`;
        }
    };

    updateClock();
    setInterval(updateClock, 1000);

    // Quote of the day
    const fetchQuote = () => {
        const quoteContainer = document.getElementById('quote-container');
        if (quoteContainer) {
            fetch('https://api.goprogram.ai/inspiration')
                .then(response => response.json())
                .then(data => {
                    quoteContainer.innerHTML = `
                        <p id="quote-text">"${data.quote}"</p>
                        <p id="quote-author">- ${data.author}</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching quote:', error);
                    quoteContainer.innerHTML = '<p>Could not load quote at this time.</p>';
                });
        }
    };

    fetchQuote();

    // Crypto News Logic
    const fetchCryptoNews = () => {
        const newsContainer = document.getElementById('crypto-news-container');
        if (newsContainer) {
            const rssUrl = 'https://www.coindesk.com/arc/outboundfeeds/rss/';
            fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.items) {
                        let articles = data.items.slice(0, 4); // Get first 4 articles
                        let html = '<div class="news-articles-grid">';
                        articles.forEach(article => {
                            const imageUrl = article.enclosure && article.enclosure.link ? article.enclosure.link : 'static/images/news-placeholder.jpg';
                            html += `<a href="${article.link}" target="_blank" rel="noopener noreferrer" class="news-article">
                                        <img src="${imageUrl}" alt="">
                                        <h3>${article.title}</h3>
                                     </a>`;
                        });
                        html += '</div>';
                        newsContainer.innerHTML = html;
                    }
                })
                .catch(error => {
                    console.error('Error fetching crypto news:', error);
                    newsContainer.innerHTML = '<p>Could not load crypto news at this time.</p>';
                });
        }
    };

    fetchCryptoNews();

    // AI News Logic
    const fetchAiNews = () => {
        const newsContainer = document.getElementById('ai-news-container');
        if (newsContainer) {
            const rssUrl = 'http://feeds.feedburner.com/venturebeat/SZYF';
            fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.items) {
                        let articles = data.items.slice(0, 4); // Get first 4 articles
                        let html = '<div class="news-articles-grid">';
                        articles.forEach(article => {
                            const imageUrl = article.enclosure && article.enclosure.link ? article.enclosure.link : 'static/images/news-placeholder.jpg';
                            html += `<a href="${article.link}" target="_blank" rel="noopener noreferrer" class="news-article">
                                        <img src="${imageUrl}" alt="">
                                        <h3>${article.title}</h3>
                                     </a>`;
                        });
                        html += '</div>';
                        newsContainer.innerHTML = html;
                    }
                })
                .catch(error => {
                    console.error('Error fetching AI news:', error);
                    newsContainer.innerHTML = '<p>Could not load AI news at this time.</p>';
                });
        }
    };

    fetchAiNews();

    // Crypto Prices Logic
    const fetchCrypto = () => {
        const cryptoContainer = document.getElementById('crypto-container');
        if (cryptoContainer) {
            const cryptoIds = 'bitcoin,ethereum,ripple,cardano,solana,dogecoin,tether,phantasma';
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd`)
                .then(response => response.json())
                .then(data => {
                    let html = '<div class="crypto-grid">';
                    for (const id in data) {
                        const price = data[id].usd;
                        let symbol = id.toUpperCase().replace('-', '');
                        if (id === 'phantasma') symbol = 'SOUL';
                        if (id === 'tether') symbol = 'USDT';
                        html += `<div class="crypto-item" data-symbol="${symbol}">
                                    <span class="crypto-name">${id.charAt(0).toUpperCase() + id.slice(1)}</span>
                                    <span class="crypto-price">$${price.toLocaleString()}</span>
                                 </div>`;
                    }
                    html += '</div>';
                    cryptoContainer.innerHTML = html;

                    // Add click listeners to crypto items
                    const cryptoItems = document.querySelectorAll('.crypto-item');
                    cryptoItems.forEach(item => {
                        item.addEventListener('click', () => {
                            const symbol = item.getAttribute('data-symbol');
                            openChartModal(symbol);
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching crypto prices:', error);
                    cryptoContainer.innerHTML = '<p>Could not load cryptocurrency prices at this time.</p>';
                });
        }
    };

    fetchCrypto();

    // Refresh Buttons Logic
    const refreshNewsButton = document.getElementById('refresh-news');
    const refreshCryptoButton = document.getElementById('refresh-crypto');

    if (refreshNewsButton) {
        refreshNewsButton.addEventListener('click', () => {
            fetchCryptoNews();
            fetchAiNews();
        });
    }

    if (refreshCryptoButton) {
        refreshCryptoButton.addEventListener('click', fetchCrypto);
    }

    // Chart Modal Logic
    const chartModal = document.getElementById('chartModal');
    const chartContainer = document.getElementById('chart-container');
    const closeChartModal = chartModal.querySelector('.close-button');

    const openChartModal = (symbol) => {
        chartContainer.innerHTML = `<iframe
            height="400"
            style="width: 100%;"
            src="https://www.tradingview.com/widgetembed/?symbol=${symbol}USD&interval=1D&hidesidetoolbar=0&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=user_portfolio&utm_medium=widget&utm_campaign=chart&utm_term=${symbol}USD"
        ></iframe>`;
        chartModal.style.display = 'block';
    };

    closeChartModal.addEventListener('click', () => {
        chartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == chartModal) {
            chartModal.style.display = 'none';
        }
    });

});
