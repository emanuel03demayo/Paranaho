
                                document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);

    const h1 = document.querySelector('h1');

    // MODIFICAR: Nombre y edad por defecto si no se especifican en la URL.
    // Ejemplo de URL: index.html?nombre=Ana&edad=30
    const nameOnCake = urlParams.get('nombre') || "Naho";
    const age = urlParams.get('edad') || "15";

    // MODIFICAR: Texto principal que se escribe solo.
    const textToType = "¡Feliz Cumpleaños Naho!";
    // MODIFICAR: Velocidad de la escritura (en ms). Menor es más rápido.
    const typingSpeed = 140;
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const nameContainer = document.querySelector('.cake-name');

    if (nameContainer) {
        nameContainer.textContent = nameOnCake;
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    function createStars() {
        const container = document.getElementById('stars-container');
        if (!container) return;
        // MODIFICAR: Cantidad de estrellas en el modo noche.
        const starCount = 100;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
        }
    }

    function showPopup() {
        const popup = document.getElementById('popup-message');
        // MODIFICAR: Texto del mensaje emergente de instrucciones.
        popup.textContent = '¡apaga las velas y revienta los globos!';
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2500);
    }

    function typeWriter(text, i) {
        if (i < text.length) {
            h1.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, i), typingSpeed);
        } else {
            h1.classList.remove('typing-cursor');
            setTimeout(showPopup, 500);
        }
    }

    h1.classList.add('typing-cursor');
    typeWriter(textToType, 0);

    createSprinkles();
    createStars();

    function createNumberCandles(ageString) {
        const candlesContainer = document.querySelector('.candles');
        candlesContainer.innerHTML = '';

        for (const digit of ageString) {

            const candleNumber = document.createElement('div');
            candleNumber.classList.add('candle-number', `number-${digit}`);

            const flame = document.createElement('div');
            flame.classList.add('flame');

            candleNumber.appendChild(flame);
            candlesContainer.appendChild(candleNumber);
        }
    }

    function setupFlameListeners() {
        const flames = document.querySelectorAll('.flame');
        let candlesOut = 0;

        flames.forEach(flame => {
            flame.addEventListener('click', () => {
                if (flame.classList.contains('out')) {
                    return;
                }
                flame.classList.add('out');
                const smoke = document.createElement('div');
                smoke.classList.add('smoke');
                flame.parentElement.appendChild(smoke);
                setTimeout(() => smoke.remove(), 1500);
                candlesOut++;
                if (candlesOut === flames.length) {
                    setTimeout(launchConfetti, 500);
                }
            });
        });
    }

    createNumberCandles(age);
    setupFlameListeners();

    function createSprinkles() {
        const container = document.getElementById('sprinkles-container');
        // MODIFICAR: Cantidad y colores de las chispas en el pastel.
        const sprinkleCount = 30;
        const colors = ['#ff7eb9', '#ffc77e', '#7effb2', '#7ec8ff', '#d67eff'];
        for (let i = 0; i < sprinkleCount; i++) {
            const sprinkle = document.createElement('div');
            sprinkle.classList.add('sprinkle');
            sprinkle.style.left = `${Math.random() * 100}%`;
            sprinkle.style.top = `${Math.random() * 100}%`;
            sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sprinkle.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(sprinkle);
        }
    }

    function launchConfetti() {
        // MODIFICAR: Cantidad y colores del confeti.
        const confettiCount = 150;
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'];
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            const x = Math.random() * 100;
            const animDelay = Math.random() * 2;
            const animDuration = 3 + Math.random() * 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 8 + Math.random() * 10;
            confetti.style.left = `${x}vw`;
            confetti.style.top = '-10vh';
            confetti.style.animationDelay = `${animDelay}s`;
            confetti.style.animationDuration = `${animDuration}s`;
            confetti.style.backgroundColor = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            setTimeout(() => {
                confetti.remove();
            }, (animDelay + animDuration) * 1000);
        }
    }

    function createBalloons(count) {
        // MODIFICAR: Mensajes que aparecen al reventar los globos.
        const niceMessages = [
            "¡Eres genial!", "¡Qué tu día brille!", "¡Pide un deseo!",
            "¡Sonríe mucho!", "¡Eres increíble!", "¡Disfruta tu día!",
            "¡Te quiero!", "¡Felicidades!", "¡A celebrar!", "¡Pura magia!"
        ];
        // MODIFICAR: Paleta de colores para los globos.
        const balloonColors = ['#ff7eb9', '#ffc77e', '#7effb2', '#7ec8ff', '#d67eff', '#ff6b6b'];

        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');

            balloon.style.left = `${Math.random() * 90}vw`;
            balloon.style.animationDuration = `${Math.random() * 8 + 8}s`;
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];

            document.body.appendChild(balloon);

            balloon.addEventListener('click', (e) => {

                if (balloon.classList.contains('popped')) return;

                balloon.classList.add('popped');

                const balloonColor = window.getComputedStyle(balloon).backgroundColor;

                createPopParticles(e.clientX, e.clientY, balloonColor);

                balloon.style.transform = 'scale(1.5)';
                balloon.style.opacity = '0';
                balloon.classList.add('popped');
                const message = document.createElement('div');
                message.classList.add('pop-message');
                message.textContent = niceMessages[Math.floor(Math.random() * niceMessages.length)];

                message.style.top = `${e.clientY}px`;
                message.style.left = `${e.clientX}px`;

                document.body.appendChild(message);

                setTimeout(() => {
                    balloon.remove();
                }, 300);

                setTimeout(() => {
                    message.remove();
                }, 2000);
            });

            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }
    }

    // MODIFICAR: Cantidad inicial de globos que aparecen.
    createBalloons(15);
    function createPopParticles(x, y, color) {
        const particleCount = 20;
        const container = document.body;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('pop-particle');

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            particle.style.backgroundColor = color;

            const size = Math.random() * 8 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const endX = (Math.random() - 0.5) * 200;
            const endY = (Math.random() - 0.5) * 200;

            particle.style.setProperty('--end-x', `${endX}px`);
            particle.style.setProperty('--end-y', `${endY}px`);

            container.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 600);
        }
    }
});
                            