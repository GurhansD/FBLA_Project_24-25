/**
 * Creates a typewriter-style text animation
 * @param {string} elementId - ID of element to display text in
 * @param {string} text - The text to animate
 * @param {number} speed - Delay between characters in milliseconds
 * @param {function} callback - Function to call after animation completes
 */
export function animateText(elementId, text, speed, callback) {

    const element = document.getElementById(elementId);
    let index = 0; // Current character position
    let isAnimating = true; // Animation state flag

    // Disable all buttons during animation to prevent interruptions

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    /**
     * Recursive function that types one character at a time
     * Calls itself until all text is displayed
     */
    function type() {

        if (index < text.length) {
            element.innerHTML += text.charAt(index); // Add next character
            index++;
            setTimeout(type, speed); // Schedule next character
        } else {
            isAnimating = false; // Mark animation complete
            // Re-enable buttons now that animation is done

            buttons.forEach(button => button.disabled = false);
            if (callback) {
                callback(); // Execute callback if provided
            }
        }
    }

    element.innerHTML = ""; // Clear any existing content

    type();
}
