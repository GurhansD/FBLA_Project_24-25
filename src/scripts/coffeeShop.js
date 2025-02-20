// Coffee Shop Scene Module
// Handles the interactive narrative and transitions for the coffee shop scene

import { animateText } from '/src/scripts/textAnimation.js';

// State variables for scene progression
let continueClick = 1; // Tracks current story part index
let textAnimating = false; // Flag to control animation state


// Story content for the coffee shop scene
const storyParts = [
    // Opening description of the coffee shop
    "The coffee shop is a warm shelter from the storm outside. The sound of rain tapping against the windows mingles with the aroma of freshly brewed coffee.",
    
    // Introduction of the atmosphere and mood
    "As you find a seat in the corner, the barista calls out a name, handing over a steaming cup of coffee. The atmosphere in the shop is warm and cozy, but there's a sense of adventure brewing in your heart. Outside, the rain intensifies, and you feel it's the perfect time for introspection or perhaps, a new discovery.",
    
    // Build up to the transition point
    "The lights flicker for a moment as a sudden gust rattles the windows. A hush falls over the patrons, and the barista looks you directly in the eye...",
    
    // Final transition text
    "Wake up... Wake up... Wake up..."
];


/**
 * Toggles the Continue button's disabled state
 * @param {boolean} state - True to disable, false to enable
 */
function toggleContinueButton(state) {
    document.getElementById("continueButton").disabled = state;
}


/**
 * Handles the stop story functionality
 * Shows a thank you message and redirects to main menu
 */
function stopStory() {
    alert("Thanks for Playing!!!");
    window.location.href = 'index.html';
}


/**
 * Handles the Continue button click
 * Progresses the story by displaying the next part with animation
 */
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

/**
 * Plays thunder sound effect and transitions to hotel scene
 * Uses volume setting from local storage
 */
function playThunderAndTransition() {
    const thunderAudio = new Audio('/assets/audios/thunderAudio.mp3');
    thunderAudio.volume = localStorage.getItem('volume') || 0.7;
    thunderAudio.play();
    
    // Transition to hotel scene after audio finishes
    thunderAudio.addEventListener('ended', () => {
        window.location.href = '/pages/hotel.html';
    });
}


/**
 * Handles the final story transition
 * Hides continue button and initiates scene transition
 */
function showDecisionButtons() {
    // Hide the Continue button
    document.getElementById("continueButton").style.display = 'none';
    
    // Initiate transition sequence
    playThunderAndTransition();
}



// Initialize event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set up continue button click handler
    const continueButton = document.getElementById("continueButton");
    continueButton.addEventListener("click", continueStory);
    
    // Set up stop button click handler
    document.getElementById("stopButton").addEventListener("click", stopStory);


    // Play doorbell sound effect with volume from local storage
    const doorbellAudio = document.getElementById('doorbell-audio');
    doorbellAudio.volume = localStorage.getItem('volume') || 0.7;
    doorbellAudio.play();


    // Initialize first story part animation
    toggleContinueButton(true); // Disable button during initial animation
    const textSpeed = localStorage.getItem('textSpeed') || 25; // Get text speed from local storage
    
    animateText("animated-text", storyParts[0], textSpeed, () => {
        textAnimating = false; // Reset animation flag
        toggleContinueButton(false); // Enable button after animation
    });

});
