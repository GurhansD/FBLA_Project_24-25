export function animateText(elementId, text, speed, callback) {
    const element = document.getElementById(elementId);
    let index = 0;
    let isAnimating = true;

    // Disable buttons during animation
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            isAnimating = false;
            // Re-enable buttons after animation
            buttons.forEach(button => button.disabled = false);
            if (callback) {
                callback(); // Animation complete, invoke callback
            }
        }
    }

    element.innerHTML = ""; // Clear previous text
    type();
}
