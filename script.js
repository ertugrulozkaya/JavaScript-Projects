// Basic JavaScript for the portfolio website

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Portfolio website loaded successfully!');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position to scroll to, considering the fixed header height
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active class (optional, basic version)
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Optional: Update active nav link based on scroll position
    // (More complex implementation might be needed for accuracy)
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('main section');
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Adjust offset as needed
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        // Ensure 'Home' is active if scrolled to the very top
        if (window.pageYOffset < sections[0].offsetTop - headerHeight - 50) {
             navLinks.forEach(link => link.classList.remove('active'));
             document.querySelector('header nav ul li a[href="#home"]').classList.add('active');
        }
    });

});