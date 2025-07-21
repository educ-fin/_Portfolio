    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Form submission
// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_37bmd1j', 'template_7lsnbjs', this)
//         .then(function() {
//             alert('Message envoyé avec succès !');
//             document.getElementById('contact-form').reset();
//         }, function(error) {
//             alert('Une erreur est survenue : ' + error.text);
//         });
// });


    document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Optionnel : Afficher un loader pendant l'envoi
    Swal.fire({
        title: 'Envoi en cours...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    emailjs.sendForm('service_37bmd1j', 'template_7lsnbjs', this)
        .then(function() {
            Swal.fire({
                icon: 'success',
                title: 'Message envoyé !',
                text: 'Votre message a été envoyé avec succès.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#28a745'
            });
            document.getElementById('contact-form').reset();
        }, function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Une erreur est survenue : ' + error.text,
                confirmButtonText: 'OK',
                confirmButtonColor: '#dc3545'
            });
        });
});

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // === SLIDER MULTIPLE POUR CHAQUE .project-image ===
    document.querySelectorAll('.project-image').forEach(projectImage => {
        const imgs = projectImage.querySelectorAll('img');
        if (imgs.length === 0) return;

        let index = 0;
        imgs[0].classList.add('active');

        setInterval(() => {
            imgs[index].classList.remove('active');
            index = (index + 1) % imgs.length;
            imgs[index].classList.add('active');
        }, 3000); // Change toutes les 3 secondes
    });
