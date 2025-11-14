// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle smooth scroll for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 8px 0 rgba(60, 64, 67, 0.3), 0 4px 12px 2px rgba(60, 64, 67, 0.15)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        observer.observe(card);
    });

    // Observe workflow steps
    const workflowSteps = document.querySelectorAll('.workflow-step');
    workflowSteps.forEach(step => {
        observer.observe(step);
    });

    // Observe about and goal sections
    const sections = document.querySelectorAll('.about-content, .goal-content');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add parallax effect to hero image on scroll
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                if (scrolled < heroHeight) {
                    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            }
        });
    }

});

