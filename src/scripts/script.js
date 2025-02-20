/**
 * Audio Management Module
 * Handles rain audio playback and volume control
 */
document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("rain-audio");
    const volumeControl = document.getElementById("volume");
    
    /**
     * Attempts to play audio with fallback for browser restrictions
     * Uses low volume as workaround for autoplay restrictions
     */

    const playAudio = () => {
        // Attempt to play audio
        audio.play().catch(error => {
            // If autoplay is still blocked, set a very low volume as a workaround
            audio.volume = 0.1;
            audio.play();
        });
    };

    /**
     * Initialize audio properties
     * Sets loop and initial volume from local storage
     */

    audio.loop = true;
    audio.volume = localStorage.getItem('volume') || 0.7; // Set initial volume from local storage

    // Attempt to play audio immediately on load

    playAudio();

    /**
     * Load saved volume settings when page loads
     */

    window.onload = () => {
        const savedVolume = localStorage.getItem('volume') || 0.7;
        audio.volume = savedVolume; // Set initial volume
    };

    /**
     * Handles volume control changes
     * Updates both audio volume and local storage
     */

    volumeControl.oninput = () => {
        const newVolume = volumeControl.value;
        localStorage.setItem('volume', newVolume);
        audio.volume = newVolume; // Update audio volume immediately
    };
});

/**
 * Handles story start functionality
 * Redirects to coffee shop scene
 */

function startStory() {
    console.log("Start story is clicked");
    // Redirect to coffee shop scene to begin story

    window.location.href = '/pages/coffeeShop.html';
}

/**
 * Initialize start button event listener
 */

document.getElementById("startButton").addEventListener("click", startStory);
