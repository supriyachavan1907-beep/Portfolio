document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const toggleSwitch = document.querySelector('#mode-switch');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Sparkle Effect Logic
    const sparkleContainer = document.getElementById('sparkle-container');
    let lastSparkleTime = 0;
    const sparkleInterval = 50; // ms between sparkles to prevent too many DOM elements

    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastSparkleTime > sparkleInterval) {
            createSparkle(e.clientX, e.clientY);
            lastSparkleTime = currentTime;
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Randomize size slightly
        const size = Math.random() * 4 + 2; // 2px to 6px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Randomize position slightly around cursor
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        
        sparkle.style.left = `${x + offsetX}px`;
        sparkle.style.top = `${y + offsetY}px`;
        
        // Randomize color occasionally for "tech" feel
        if (Math.random() > 0.8) {
            sparkle.style.backgroundColor = '#bd34fe'; // Purple
            sparkle.style.boxShadow = '0 0 10px #bd34fe';
        }

        sparkleContainer.appendChild(sparkle);

        // Remove element after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Optional: Add random background sparkles
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }, 500);
});
