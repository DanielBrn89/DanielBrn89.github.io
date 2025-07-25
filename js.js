// Validación de formulario (requisito mínimo)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Ingresa un email válido');
    return;
  }
  alert('Formulario enviado (simulado)');
});

// Animación al hacer scroll (requisito)
window.addEventListener('scroll', function() {
  document.querySelectorAll('.fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});