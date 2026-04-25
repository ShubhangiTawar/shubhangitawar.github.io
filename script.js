document.addEventListener('DOMContentLoaded', () => {
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Custom Cursor (Desktop only)
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Only activate custom cursor if device has pointer (not touch)
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Instantly move the dot
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay to the outline using animate API for smooth trailing effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect on links
        const links = document.querySelectorAll('a, .btn');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(227, 38, 54, 0.15)'; // Alizarin red highlight
            });
            link.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    } else {
        // Hide on touch devices
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }

    // Navbar Scrolled State
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Handle Kalakriti Kutch multiple PDF opening
    const kalakritiLink = document.getElementById('kalakriti-link');
    if (kalakritiLink) {
        kalakritiLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Open the first PDF
            window.open('images/page1-150.pdf', '_blank');
            // Open the second PDF with a slight delay
            setTimeout(() => {
                window.open('images/page151-235.pdf', '_blank');
            }, 100);
        });
    }

});
