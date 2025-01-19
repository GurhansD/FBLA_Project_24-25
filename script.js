// Automatically play the rain audio and manage mute/unmute icon
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("rain-audio");
    const volumeControl = document.getElementById("volume");
    
    // Ensure audio plays immediately with minimal browser restrictions
    const playAudio = () => {
        // Attempt to play audio
        audio.play().catch(error => {
            // If autoplay is still blocked, set a very low volume as a workaround
            audio.volume = 0.1;
            audio.play();
        });
    };

    // Set initial audio properties
    audio.loop = true;
    audio.volume = localStorage.getItem('volume') || 0.7; // Set initial volume from local storage

    // Attempt to play immediately
    playAudio();

    // Load saved settings
    window.onload = () => {
        const savedVolume = localStorage.getItem('volume') || 0.7;
        audio.volume = savedVolume; // Set initial volume
    };

    // Volume control functionality
    volumeControl.oninput = () => {
        const newVolume = volumeControl.value;
        localStorage.setItem('volume', newVolume);
        audio.volume = newVolume; // Update audio volume immediately
    };
});

// Start story function
function startStory() {
    console.log("Start story is clicked");
    // Redirects user to the coffee shop page to get story started
    window.location.href = 'coffeeShop.html';
}

// Add event listener for the start button
document.getElementById("startButton").addEventListener("click", startStory);
