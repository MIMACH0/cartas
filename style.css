:root {
    --rosa-neon: #ff007f;
    --rosa-suave: #ffb3c1;
    --fondo-oscuro: #0a0a0a;
}

body {
    margin: 0;
    height: 100vh;
    background-color: var(--fondo-oscuro);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    color: white;
    overflow: hidden;
}

/* Fondo con efecto de luces */
.background-hearts {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #ff007f1a 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: -1;
}

.carta-container {
    background: rgba(255, 255, 255, 0.95);
    width: 340px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 30px var(--rosa-neon);
    text-align: center;
    color: #333;
    animation: aparecerCarta 1.5s ease-out;
}

/* Animación del Árbol */
.tree-canvas {
    position: relative;
    height: 160px;
    margin-bottom: 20px;
}

.trunk {
    width: 10px;
    height: 50px;
    background: #5d4037;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
}

.heart-leaf {
    position: absolute;
    color: #ff4d6d;
    font-size: 18px;
    transform: scale(0);
    animation: brotarCorazon 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes brotarCorazon {
    to { transform: scale(1); }
}

/* Estilo del Texto */
.target-name {
    font-family: 'Dancing Script', cursive;
    color: #e91e63;
    font-size: 1.6rem;
    margin-bottom: 15px;
}

.text-lines p {
    font-size: 0.95rem;
    margin: 5px 0;
    opacity: 0;
    animation: aparecerTexto 1s ease-out forwards;
}

#line1 { animation-delay: 1s; }
#line2 { animation-delay: 2s; }
.signature { 
    font-weight: bold; 
    color: #ff4d6d; 
    animation-delay: 3s !important;
}

.counter-box {
    margin-top: 25px;
    background: #fff0f3;
    padding: 15px;
    border-radius: 12px;
    border: 1px dashed #ff4d6d;
}

#timer {
    font-weight: bold;
    color: #e91e63;
    font-size: 0.9rem;
    margin-top: 5px;
}

@keyframes aparecerCarta {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes aparecerTexto {
    to { opacity: 1; }
}
