export function animateText(elementId, text, speed, callback) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Animation complete, invoke callback
        }
    }

    element.innerHTML = ""; // Clear previous text
    type();
}