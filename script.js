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
    gsap.utils.toArray('.gsap-fade-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

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

    // --- Project Video Hover with sound after click ---
    let audioUnlocked = false;

    // First user interaction unlocks audio
    document.addEventListener("click", () => {
        audioUnlocked = true;
    }, { once: true });

    const videoCards = document.querySelectorAll('.project-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                if (audioUnlocked) {
                    video.muted = false;
                    video.volume = 1;
                }
                let playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Ignore errors if playback is interrupted
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
                video.muted = true; // Reset to muted for next hover
            });
        }
    });

    // --- Contact Form Handling (AJAX) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerText = 'Envoi...';
            formStatus.classList.add('hidden');
            formStatus.className = 'hidden text-center text-sm p-3 rounded-sm'; // Reset classes

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            fetch('send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                formStatus.innerText = result.message;
                formStatus.classList.remove('hidden');
                
                if (result.success) {
                    formStatus.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-200');
                    contactForm.reset();
                } else {
                    formStatus.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-200');
                }
            })
            .catch(error => {
                formStatus.innerText = "Une erreur est survenue. Veuillez réessayer.";
                formStatus.classList.remove('hidden');
                formStatus.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-200');
                console.error('Error:', error);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            });
        });
    }
});
