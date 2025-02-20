/**
 * Scoring and Tracking Module
 * Handles player score calculation, death tracking, and score display
 */
(function() {
    /**
     * Initialize score based on death count
     * Base score is 100, reduced by 4 points per death
     */

    let score = 100;
    const deathCount = parseInt(localStorage.getItem('deathCount') || '0');
    score = Math.max(0, score - (deathCount * 4));
    localStorage.setItem('score', score);

    /**
     * Resets all game statistics
     * Clears score and death count from localStorage
     */

    function resetStats() {
        localStorage.removeItem('score');
        localStorage.removeItem('deathCount');
    }

    /**
     * Displays final score on victory page
     * Updates the scoreDisplay element with current score
     */

    function displayScore() {
        const scoreDisplay = document.getElementById('scoreDisplay');
        if (scoreDisplay) {
            scoreDisplay.textContent = `${score}/100`;
        }
    }

    /**
     * Adds reset functionality to main menu buttons
     * Resets stats when returning to main menu
     */

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

    /**
     * Exposes public functions for use in other scripts
     * @namespace scoreSystem
     */

    window.scoreSystem = {
        resetStats,
        displayScore
    };

    /**
     * Automatically displays score when victory page loads
     */

    if (window.location.pathname.includes('victoryPage')) {
        document.addEventListener('DOMContentLoaded', function() {
            displayScore();
        });
    }
})();
