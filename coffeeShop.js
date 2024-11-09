import { animateText } from './textAnimation.js';

let continueClick = 0;
let textAnimating = false; // Flag to control animation state

const storyParts = [
    "The coffee shop is a warm shelter from the storm outside. The sound of rain tapping against the windows mingles with the aroma of freshly brewed coffee.",
    "As you find a seat in the corner, the barista calls out a name, handing over a steaming cup of coffee. The atmosphere in the shop is warm and cozy, but there's a sense of adventure brewing in your heart. Outside, the rain intensifies, and you feel it's the perfect time for introspection or perhaps, a new discovery.",
    "The lights flicker for a moment as a sudden gust rattles the windows. A hush falls over the patrons, and the barista announces that the shop will be closing soon due to the worsening storm. You look outside, watching as streets begin to flood, glistening under the dim streetlights.",
    "An announcement on the radio crackles through the coffee shop, warning people to seek shelter immediately. As the barista starts cleaning up, you realize you need to make a decision quickly before the storm worsens further.",
    "You glance out the window, spotting a faintly lit subway entrance a block away. Nearby, the neon lights of a small, rundown hotel flicker invitingly. As the wind howls, you weigh your options: brave the subway or find refuge at the hotel."
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

    if (continueClick < storyParts.length - 1) {
        animateText("animated-text", storyParts[continueClick], 25, () => {
            textAnimating = false; // Reset animation state
            toggleContinueButton(false); // Re-enable button
        });
        continueClick += 1;
    } else {
        animateText("animated-text", storyParts[continueClick], 25, () => {
            textAnimating = false;
            toggleContinueButton(false);
            showDecisionButtons();  // Show decision buttons on the last part
        });
        continueClick += 1;
    }
}

function showDecisionButtons() {
        // Hide the Continue button and show the decision buttons
    document.getElementById("continueButton").style.display = 'none';
    
    // Create "Go to Hotel" and "Go to Subway" buttons
    const hotelButton = document.createElement("button");
    hotelButton.innerText = "Go to Hotel";
    hotelButton.onclick = () => window.location.href = 'hotel.html';
    hotelButton.classList.add("decision-button");

    const subwayButton = document.createElement("button");
    subwayButton.innerText = "Go to Subway";
    subwayButton.onclick = () => window.location.href = 'subwayEntrance.html';
    subwayButton.classList.add("decision-button");

    const buttonContainer = document.getElementById("transparentBox");
    buttonContainer.appendChild(hotelButton);
    buttonContainer.appendChild(subwayButton);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("continueButton").addEventListener("click", continueStory);
    document.getElementById("stopButton").addEventListener("click", stopStory);

    const doorbellAudio = document.getElementById('doorbell-audio');
    doorbellAudio.play();
    animateText("animated-text", storyParts[0], 25, () => {
        textAnimating = false; // Animation flag reset
        toggleContinueButton(false); // Ensure button is enabled after first story part
    });
});