// Automatically play the rain audio and manage mute/unmute icon
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("rain-audio");
    const muteButton = document.getElementById("muteButton");
    const muteIcon = document.getElementById("muteIcon");

    // Ensure audio starts playing on page load
    audio.play();
    audio.muted = false; // Ensure it starts unmuted
    muteIcon.src = "muteIcon.png"; // Set initial icon to mute icon

    // Function to toggle mute and update icon
    function muteButtonClick() { 
        audio.muted = !audio.muted; // Toggle mute state
        muteIcon.src = audio.muted ? "unmuteIcon.png" : "muteIcon.png"; // Update icon based on state
    }

    // Add event listener for mute button
    muteButton.addEventListener("click", muteButtonClick);
});

// Function to start the story
function startStory() {
    console.log("Start story is clicked");
    //Redirects user to the coffee shop page to get story started
    window.location.href = 'coffeeShop.html';
}

// Add event listener for the start button
document.getElementById("startButton").addEventListener("click", startStory);