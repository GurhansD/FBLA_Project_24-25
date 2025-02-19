// Enhanced scoring and tracking functionality
(function() {
    // Initialize score
    let score = 100;
    const deathCount = parseInt(localStorage.getItem('deathCount') || '0');
    score = Math.max(0, score - (deathCount * 4));
    localStorage.setItem('score', score);

    // Reset score and death count
    function resetStats() {
        localStorage.removeItem('score');
        localStorage.removeItem('deathCount');
    }

    // Display score on victory page
    function displayScore() {
        const scoreDisplay = document.getElementById('scoreDisplay');
        if (scoreDisplay) {
            scoreDisplay.textContent = `${score}/100`;
        }
    }

    // Add reset functionality to main menu buttons
    document.addEventListener('DOMContentLoaded', function() {
        const mainMenuButtons = document.querySelectorAll('[onclick*="index.html"]');
        mainMenuButtons.forEach(button => {
            const originalOnClick = button.onclick;
            button.onclick = function() {
                resetStats();
                if (originalOnClick) originalOnClick();
            };
        });
    });

    // Export functions for use in other scripts
    window.scoreSystem = {
        resetStats,
        displayScore
    };

    // Automatically display score on victory page
    if (window.location.pathname.includes('victoryPage')) {
        document.addEventListener('DOMContentLoaded', function() {
            displayScore();
        });
    }
})();
