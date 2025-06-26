// Script para el formulario de contacto creativo

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí podrías agregar lógica para enviar el formulario por email o API
        form.reset();
        mensajeExito.style.display = 'block';
        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 3000);
    });

    // Animación de barras de habilidades al entrar en pantalla
    function animateSkillBars() {
        document.querySelectorAll('.habilidad-bar .progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // Detectar si la sección de habilidades está en pantalla
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    let habilidadesAnimated = false;
    function checkHabilidadesSection() {
        const section = document.getElementById('habilidades');
        if (section && !habilidadesAnimated && isInViewport(section)) {
            animateSkillBars();
            habilidadesAnimated = true;
        }
    }

    window.addEventListener('scroll', checkHabilidadesSection);
    window.addEventListener('resize', checkHabilidadesSection);
    checkHabilidadesSection();

    // Loader personalizado con imagen y nombre (como antes)
    const loader = document.getElementById('loader');
    if (loader) {
        loader.innerHTML = `
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Foto Abel Alonzo" style="width: 90px; height: 90px; border-radius: 50%; border: 4px solid #00cfff; background: #fff; box-shadow: 0 2px 16px #001f3f55; margin-bottom: 1.2rem;">
            <h2 class="fw-bold" style="color: #fff; text-shadow: 0 2px 12px #001f3f;">Abel Alonzo</h2>
        `;
        setTimeout(() => {
            loader.classList.add('hide');
        }, 2500);
    }
});
