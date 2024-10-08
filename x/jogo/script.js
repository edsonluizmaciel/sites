const carro = document.getElementById('carro');
const obstaculo = document.getElementById('obstaculo');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isGameOver = false;

// Movimentação do carro
document.addEventListener('keydown', (event) => {
    const carroPos = parseInt(window.getComputedStyle(carro).getPropertyValue('left'));
    if (event.key === 'ArrowLeft' && carroPos > 0) {
        carro.style.left = carroPos - 20 + 'px';
    } else if (event.key === 'ArrowRight' && carroPos < 260) {
        carro.style.left = carroPos + 20 + 'px';
    }
});

// Criação do obstáculo
function startGame() {
    let obstaculoPos = -80;
    const intervalo = setInterval(() => {
        if (isGameOver) {
            clearInterval(intervalo);
            return;
        }
        
        obstaculoPos += 10;
        obstaculo.style.top = obstaculoPos + 'px';
        
        // Reiniciar obstáculo
        if (obstaculoPos > 600) {
            obstaculoPos = -80;
            score++;
            scoreDisplay.innerText = 'Pontuação: ' + score;
        }
        
        // Verificação de colisão
        const carroRect = carro.getBoundingClientRect();
        const obstaculoRect = obstaculo.getBoundingClientRect();
        
        if (
            carroRect.x < obstaculoRect.x + obstaculoRect.width &&
            carroRect.x + carroRect.width > obstaculoRect.x &&
            carroRect.y < obstaculoRect.y + obstaculoRect.height &&
            carroRect.height + carroRect.y > obstaculoRect.y
        ) {
            isGameOver = true;
            alert('Game Over! Sua pontuação: ' + score);
        }
    }, 100);
}

startGame();
