// Automatically play the rain audio and manage mute/unmute icon
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("rain-audio");
    const muteButton = document.getElementById("muteButton");
    const muteIcon = document.getElementById("muteIcon");

    // Ensure audio plays immediately with minimal browser restrictions
    const playAudio = () => {
        // Remove any existing event listeners to prevent multiple bindings
        document.removeEventListener('click', playAudio);

        // Attempt to play audio
        audio.play().catch(error => {
            // If autoplay is still blocked, set a very low volume as a workaround
            audio.volume = 0.1;
            audio.play();
        });
    };

    // Set initial audio properties
    audio.loop = true;
    audio.volume = 0.7;

    // Attempt to play immediately
    playAudio();

    // Add fallback click listener
    document.addEventListener('click', playAudio);

    // Mute toggle functionality
    function muteButtonClick() { 
        audio.muted = !audio.muted;
        muteIcon.src = audio.muted ? "muteIcon.png" : "unmuteIcon.png";
    }

    // Initial mute icon setup
    muteIcon.src = "unmuteIcon.png";
    audio.muted = false;

    // Add mute button listener
    muteButton.addEventListener("click", muteButtonClick);
});

// Start story function
function startStory() {
    console.log("Start story is clicked");
    //Redirects user to the coffee shop page to get story started
    window.location.href = 'coffeeShop.html';
}

// Add event listener for the start button
document.getElementById("startButton").addEventListener("click", startStory);