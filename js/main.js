document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navbar toggling
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Set active link in navbar based on current page filename
    const currentPath = window.location.pathname;
    const page = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Handle case for index.html or empty href as home page
        if (href === page || (page === 'index.html' && href === './index.html') || (page === '' && href === './index.html')) {
            link.classList.add('active');
        } else {
            // Check relative paths
            const cleanHref = href.replace('./', '');
            if (page === cleanHref) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
