// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Animation on Scroll ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-navy-dark/95', 'py-2');
            navbar.classList.remove('py-4', 'bg-navy-dark/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-navy-dark/95', 'py-2');
            navbar.classList.add('py-4', 'bg-navy-dark/90');
        }
    });

    // --- Hero Section Animations ---
    const tlHero = gsap.timeline();
    
    tlHero.from('.hero-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Parallax Effect for Hero Background
    gsap.to('#hero-bg', {
        scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });

    // --- Section Title Reveals ---
    // Select all elements with 'gsap-fade-up' class
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%', // Start animation when top of element hits 85% of viewport height
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Left Fade
    gsap.utils.toArray('.gsap-fade-left').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Right Fade
    gsap.utils.toArray('.gsap-fade-right').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });



    // --- Project Cards Stagger ---
    // (Handled by class gsap-fade-up generally, but let's make cards stagger if they are in the grid)
    // Note: The general rule above handles them, but specific staggering can be added if needed.
    
    // --- Project Video Hover ---
    const videoCard = document.querySelector('.project-card');
    const video = document.getElementById('project-video-1');

    if (videoCard && video) {
        videoCard.addEventListener('mouseenter', () => {
            let playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // This error is expected if the user mouses out before playback starts.
                    // We can safely ignore it.
                });
            }
        });

        videoCard.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});