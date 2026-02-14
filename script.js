// CONFIGURACIÓN: Fecha de aniversario
const fechaMery = new Date('2025-11-11T00:00:00');

function iniciarReloj() {
    const ahora = new Date();
    const diferencia = ahora - fechaMery;

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diferencia / 1000 / 60) % 60);
    const s = Math.floor((diferencia / 1000) % 60);

    document.getElementById('timer').innerText = 
        `${d} días, ${h}h ${m}m ${s}s`;
}

// Dibuja el árbol con corazones en forma de copa
function animarArbol() {
    const contenedor = document.getElementById('hearts-container');
    
    // Coordenadas relativas para formar una copa de corazón
    const puntos = [
        {x: 0, y: -60}, {x: -20, y: -75}, {x: 20, y: -75},
        {x: -40, y: -85}, {x: 40, y: -85}, {x: 0, y: -95},
        {x: -25, y: -105}, {x: 25, y: -105}, {x: -55, y: -100},
        {x: 55, y: -100}, {x: 0, y: -120}, {x: -30, y: -130},
        {x: 30, y: -130}, {x: -15, y: -140}, {x: 15, y: -140}
    ];

    puntos.forEach((p, i) => {
        setTimeout(() => {
            const h = document.createElement('div');
            h.classList.add('heart-leaf');
            h.innerHTML = '❤️';
            h.style.left = `calc(50% + ${p.x}px)`;
            h.style.top = `${p.y + 150}px`;
            contenedor.appendChild(h);
        }, i * 250); // Aparecen uno tras otro como en el video
    });
}

// Ejecución
setInterval(iniciarReloj, 1000);
animarArbol();
iniciarReloj();
