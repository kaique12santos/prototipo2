// script.js
document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById("revealButton");
    const surpriseMessage = document.getElementById("surpriseMessage");
    const videoContainer = document.getElementById("videoContainer");
    const fireworksContainer = document.getElementById('fireworks-container');
    const sideGifs = document.querySelectorAll(".gif");

    revealButton.addEventListener("click", () => {
        surpriseMessage.classList.remove("hidden");
        videoContainer.classList.remove("hidden"); // Exibe o vídeo
        sideGifs.forEach(gif => {
            gif.classList.remove("hidden"); // Exibe todos os gifs laterais
        });
        revealButton.style.display = "none";
        startFireworks(5000);
    });
    function startFireworks(duration) {
        const interval = 100; // Intervalo menor para aumentar a intensidade (em ms)
        const endTime = Date.now() + duration;

        const fireworkInterval = setInterval(() => {
            if (Date.now() > endTime) {
                clearInterval(fireworkInterval);
                return;
            }
            createFireworks();
        }, interval);
    }
    function createFireworks() {
        const numParticles = 50; // Mais partículas para cada explosão
        const colors = ['#FF0000', '#00FF00', '#0000FF']; // Cores: Vermelho, Verde, Azul

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Define uma cor aleatória para a partícula
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;

            // Define posições aleatórias para cada explosão na tela
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 150; // Aumenta o raio para dispersar mais partículas
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            // Define a posição inicial da explosão aleatoriamente na tela
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;

            // Aplica variáveis CSS para movimentação
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);

            fireworksContainer.appendChild(particle);

            // Remove a partícula após a animação
            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }
    }
});
