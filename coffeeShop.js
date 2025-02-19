import { animateText } from './textAnimation.js';

let continueClick = 1;
let textAnimating = false; // Flag to control animation state

const storyParts = [
    "The coffee shop is a warm shelter from the storm outside. The sound of rain tapping against the windows mingles with the aroma of freshly brewed coffee.",
    "As you find a seat in the corner, the barista calls out a name, handing over a steaming cup of coffee. The atmosphere in the shop is warm and cozy, but there's a sense of adventure brewing in your heart. Outside, the rain intensifies, and you feel it's the perfect time for introspection or perhaps, a new discovery.",
    "The lights flicker for a moment as a sudden gust rattles the windows. A hush falls over the patrons, and the barista looks you directly in the eye...",
    "Wake up... Wake up... Wake up..."
];

// Function to disable and re-enable the Continue button
function toggleContinueButton(state) {
    document.getElementById("continueButton").disabled = state;
}

// Stop button logic
function stopStory() {
    alert("Thanks for Playing!!!");
    window.location.href = 'index.html';
}

// Function to display new story text when Continue is clicked
function continueStory() {
    if (textAnimating) return; // Prevent further clicks during animation

    const animatedTextElement = document.getElementById("animated-text");
    animatedTextElement.innerHTML = ""; // Clear previous text
    textAnimating = true; // Start animation state
    toggleContinueButton(true); // Disable button

    const textSpeed = localStorage.getItem('textSpeed') || 25; // Get text speed from local storage

    if (continueClick < storyParts.length - 1) {
        animateText("animated-text", storyParts[continueClick], textSpeed, () => {
            textAnimating = false; // Reset animation state
            toggleContinueButton(false); // Re-enable button
        });
        continueClick += 1;
    } else {
        animateText("animated-text", storyParts[continueClick], textSpeed, () => {
            textAnimating = false;
            toggleContinueButton(false);
            showDecisionButtons();  // Show decision buttons on the last part
        });
        continueClick += 1;
    }
}

function playThunderAndTransition() {
    const thunderAudio = new Audio('./thunderAudio.mp3');
    thunderAudio.volume = localStorage.getItem('volume') || 0.7;
    thunderAudio.play();
    
    thunderAudio.addEventListener('ended', () => {
        window.location.href = 'hotel.html';
    });
}

function showDecisionButtons() {
    // Hide the Continue button and show the decision buttons
    document.getElementById("continueButton").style.display = 'none';
    
    // Play thunder audio and transition to hotel
    playThunderAndTransition();
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const continueButton = document.getElementById("continueButton");
    continueButton.addEventListener("click", continueStory);
    document.getElementById("stopButton").addEventListener("click", stopStory);

    const doorbellAudio = document.getElementById('doorbell-audio');
    doorbellAudio.volume = localStorage.getItem('volume') || 0.7; // Set volume from local storage
    doorbellAudio.play();

    // Disable the continue button before animation starts
    toggleContinueButton(true);

    const textSpeed = localStorage.getItem('textSpeed') || 25; // Get text speed from local storage
    animateText("animated-text", storyParts[0], textSpeed, () => {
        textAnimating = false; // Animation flag reset
        toggleContinueButton(false); // Enable button after animation completes
    });
});
