export function animateText(elementId, text, speed = 25) {
    const textElement = document.getElementById(elementId);
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);  // Speed in milliseconds (default 25ms)
        }
    }

    // Clear existing text before starting animation
    textElement.innerHTML = "";
    typeText();
}