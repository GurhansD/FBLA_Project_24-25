// Enhanced Save System for Midnight Monsoon
const saveSystem = {
    // Save current page state
    saveCheckpoint: function() {
        const currentPage = window.location.pathname.split('/').pop();
        // Only save if it's a story page (not victory/lose pages)
        if (!currentPage.includes('losePage') && 
            !currentPage.includes('victoryPage') &&
            !currentPage.includes('index')) {
            localStorage.setItem('lastCheckpoint', currentPage);
        }
    },

    // Load saved checkpoint
    loadCheckpoint: function() {
        const savedPage = localStorage.getItem('lastCheckpoint');
        if (savedPage) {
            window.location.href = savedPage;
            return true;
        }
        alert('No saved checkpoint found!');
        return false;
    },

    // Initialize save system
    init: function() {
        // Save state when navigating to a new page
        const navButtons = document.querySelectorAll('button[onclick*="location.href"]');
        navButtons.forEach(button => {
            const originalOnClick = button.onclick;
            button.onclick = (e) => {
                this.saveCheckpoint();
                originalOnClick(e);
            };
        });

        // Add load checkpoint button to lose page
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

        // Save initial state when starting the game
        if (window.location.pathname.includes('index')) {
            localStorage.removeItem('lastCheckpoint');
        }
    }
};

// Initialize save system when page loads
document.addEventListener('DOMContentLoaded', () => saveSystem.init());
