// =========================================
// INTERACCIONES Y LÓGICA DE NAVEGACIÓN
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. SCROLLSPY (ACTUALIZAR ÍNDICE LATERAL AL HACER SCROLL)
  const sections = document.querySelectorAll('.project-section');
  const navLinks = document.querySelectorAll('.sidebar-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Activa la sección cuando está en la parte superior/media
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

});

// 2. CAMBIO INTERACTIVO DE PASOS CAD
function showCadStep(step) {
  const img = document.getElementById('cad-img');
  const title = document.getElementById('cad-title');
  const desc = document.getElementById('cad-desc');
  const buttons = document.querySelectorAll('.cad-step-btn');

  // Quitar estado activo de todos los botones
  buttons.forEach(btn => btn.classList.remove('active'));

  // Activar botón pulsado
  if (buttons[step - 1]) {
    buttons[step - 1].classList.add('active');
  }

  // Actualizar contenido según el paso seleccionado
  switch(step) {
    case 1:
      img.src = 'Brazo3.jpg';
      title.innerText = 'Modelat CAD v1.0';
      desc.innerText = 'Primera versió del disseny estructural imprès en PLA. Es van identificar punts de fatiga a l\'eix principal de rotació.';
      break;
    case 2:
      img.src = 'Brazo2.jpg'; // Cambia por tu imagen del paso 2
      title.innerText = 'Reforç Estructural v2.0';
      desc.innerText = 'Redisseny de la base articulada augmentant el gruix de paret i afegint coixinets de bola per reduir la fricció.';
      break;
    case 3:
      img.src = 'Brazo4.jpg'; // Cambia por tu imagen del paso 3
      title.innerText = 'Integració de Servos v3.0';
      desc.innerText = 'Ajust final dels acoblaments mecànics per als servomotors i optimització del guiat de cables intern.';
      break;
  }
}
