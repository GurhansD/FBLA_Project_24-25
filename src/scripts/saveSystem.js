/**
 * Save System Module
 * Handles checkpoint saving and loading for game progress
 */
const saveSystem = {

    /**
     * Saves current page as checkpoint
     * Excludes victory/lose pages and main menu
     */
    saveCheckpoint: function() {

        const currentPage = window.location.pathname.split('/').pop();
        // Only save story pages, exclude victory/lose pages and main menu

        if (!currentPage.includes('losePage') && 
            !currentPage.includes('victoryPage') &&
            !currentPage.includes('index')) {
            localStorage.setItem('lastCheckpoint', currentPage);
        }
    },

    /**
     * Loads last saved checkpoint
     * @returns {boolean} True if checkpoint loaded, false otherwise
     */
    loadCheckpoint: function() {

        const savedPage = localStorage.getItem('lastCheckpoint');
        if (savedPage) {
            window.location.href = savedPage;
            return true;
        }
        alert('No saved checkpoint found!');
        return false;
    },

    /**
     * Initializes save system
     * Sets up navigation handlers and load checkpoint button
     */
    init: function() {
        // Save state before navigating to new pages

        // Add save checkpoint handler to navigation buttons
        const navButtons = document.querySelectorAll('button[onclick*="location.href"]');
        navButtons.forEach(button => {
            const originalOnClick = button.onclick;
            button.onclick = (e) => {
                this.saveCheckpoint();
                originalOnClick(e);
            };
        });

        // Add load checkpoint button to lose page if applicable

        // Only add load button to lose page
        if (window.location.pathname.includes('losePage')) {

            const loadButton = document.createElement('button');
            loadButton.textContent = 'Load Recent Saved Checkpoint';
            loadButton.onclick = () => {
                if (this.loadCheckpoint()) {
                    alert('Loading your last saved checkpoint...');
                }
            };
            loadButton.style.marginTop = '20px';
            document.querySelector('#transparentBox').appendChild(loadButton);
        }

        // Clear checkpoint when starting new game from main menu

        if (window.location.pathname.includes('index')) {
            localStorage.removeItem('lastCheckpoint');
        }
    }
};

// Initialize save system when page finishes loading
document.addEventListener('DOMContentLoaded', () => saveSystem.init());
