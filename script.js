// CONFIGURACIÓN: Fecha de aniversario
const fechaAniversario = new Date('2025-11-11T00:00:00');

function actualizarReloj() {
    const ahora = new Date();
    const diferencia = ahora - fechaAniversario;

    // Si la fecha es futura (como hoy es Feb 2026, ya pasó)
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById('contador').innerHTML = 
        `${dias}d : ${horas}h : ${minutos}m : ${segundos}s`;
}

// Función para crear el árbol de corazones
function construirArbol() {
    const contenedor = document.getElementById('arbol-corazones');
    const totalCorazones = 15;

    for (let i = 0; i < totalCorazones; i++) {
        setTimeout(() => {
            const corazon = document.createElement('span');
            corazon.classList.add('corazon-arbol');
            corazon.innerHTML = '❤️';
            
            // Posiciones aleatorias para formar la copa del árbol
            const x = Math.random() * 100 - 50; 
            const y = Math.random() * -80 - 20; 
            
            corazon.style.left = `calc(50% + ${x}px)`;
            corazon.style.top = `${y + 110}px`;
            
            contenedor.appendChild(corazon);
        }, i * 250); // Aparecen uno por uno
    }
}

// Iniciar todo
setInterval(actualizarReloj, 1000);
construirArbol();
actualizarReloj();
