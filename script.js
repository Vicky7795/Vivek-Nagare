document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'x'); // Will be updated by lucide.createIcons
            // Correct way to toggle with Lucide
            hamburger.innerHTML = '<i data-lucide="x"></i>';
        }
        lucide.createIcons();
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        });
    });

    // Typing Animation Logic
    const textElement = document.getElementById('typing-text');
    const phrases = [
        "Full Stack Developer"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing animation
    if (textElement) {
        setTimeout(type, 1000);
    }

    // Sticky Navbar & Active Section Highlight
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const backToTop = document.getElementById('back-to-top');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky logic
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
            backToTop.classList.add('show');
        } else {
            navbar.classList.remove('sticky');
            backToTop.classList.remove('show');
        }

        // Active link highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Back to Top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('appear');
                
                // Add staggered entrance for children if it's a grid
                if (entry.target.classList.contains('projects-grid') || entry.target.classList.contains('skills-grid')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                    });
                }
            }
        });
    }, observerOptions);

    // Observe reveal and fade-in elements
    document.querySelectorAll('.reveal, .fade-in').forEach(el => observer.observe(el));

    // Experience Section dynamic year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 3D Tilt and Spotlight Logic
    const spotlight = document.querySelector('.spotlight-layer');
    
    document.addEventListener('mousemove', (e) => {
        // Global Spotlight
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--mouse-x', `${x}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y}%`);

        // Card Tilts
        const cards = document.querySelectorAll('.project-card, .skill-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = e.clientX - rect.left;
            const cardY = e.clientY - rect.top;
            
            // Set dynamic spotlight on specific card
            card.style.setProperty('--card-mouse-x', `${cardX}px`);
            card.style.setProperty('--card-mouse-y', `${cardY}px`);

            // Calculate tilt
            if (cardX > 0 && cardX < rect.width && cardY > 0 && cardY < rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = (cardY - centerY) / 10;
                const tiltY = (centerX - cardX) / 10;
                
                card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
            } else {
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            }
        });
    });

    // Reset card tilt when mouse leaves
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerHTML;

            // Simple visual feedback
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Sending...';
            lucide.createIcons();
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! This is a demo submission.');
                submitBtn.innerHTML = '<i data-lucide="check-circle-2"></i> Message Sent!';
                lucide.createIcons();
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    lucide.createIcons();
                }, 3000);
            }, 1500);
        });
    }
});
