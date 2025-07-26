// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor ingresa un email válido');
            return false;
        }
        
        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        
        // Aquí iría la lógica para enviar el formulario
        alert('Mensaje enviado con éxito!');
        this.reset();
    });
}

// Animación para las secciones
function animateSections() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}
// Animar barras de habilidades al hacer scroll
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.progress-bar');
    
    if (isElementInViewport(skillsSection)) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

window.addEventListener('scroll', animateSkills);

// Inicializar animaciones
window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);

// Elimina cualquier animación que pueda estar ocultando las barras
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        // Fuerza el ancho completo inmediatamente
        const width = bar.getAttribute('aria-valuenow') + '%';
        bar.style.width = width;
        
        // Opcional: Añade animación al cargar la página
        bar.style.transition = 'none';
        setTimeout(() => {
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease';
                bar.style.width = width;
            }, 50);
        }, 100);
    });
});