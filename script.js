const fechaAniversario = new Date('2025-11-11T00:00:00');

function actualizarContador() {
    const ahora = new Date();
    const diff = ahora - fechaAniversario;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerText = 
        `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Generar corazones para el árbol
function crearArbol() {
    const canopy = document.getElementById('canopy');
    const posiciones = [
        {t: -10, l: 0}, {t: -20, l: 15}, {t: -20, l: -15},
        {t: -40, l: 30}, {t: -40, l: -30}, {t: -40, l: 0},
        {t: -60, l: 45}, {t: -60, l: -45}, {t: -60, l: 20}, {t: -60, l: -20}
    ];

    posiciones.forEach((pos, i) => {
        setTimeout(() => {
            const h = document.createElement('span');
            h.classList.add('heart');
            h.innerHTML = '❤️';
            h.style.top = pos.t + 'px';
            h.style.left = `calc(50% + ${pos.l}px)`;
            canopy.appendChild(h);
        }, i * 200);
    });
}

setInterval(actualizarContador, 1000);
crearArbol();
actualizarContador();