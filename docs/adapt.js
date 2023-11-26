// Script para mejorar la adaptabilidad y el scroll
document.addEventListener("DOMContentLoaded", function() {
    // Asegurar que el contenido sea visible después de cargar
    document.body.style.display = "block";

    // Agregar clases de scroll
    let lastScroll = 0;
    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll) {
            // Hacer scroll hacia abajo
            document.body.classList.add("scroll-down");
            document.body.classList.remove("scroll-up");
        } else {
            // Hacer scroll hacia arriba
            document.body.classList.add("scroll-up");
            document.body.classList.remove("scroll-down");
        }
        lastScroll = currentScroll;
    });
});