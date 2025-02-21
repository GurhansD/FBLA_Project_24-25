/*Background Audio Script*/
// Play rain audio when page loads
document.addEventListener('DOMContentLoaded', function() {
    const rainAudio = document.getElementById('rain-audio');
    // Get volume from localStorage
    const savedVolume = localStorage.getItem('volume');
    // Convert to number and ensure it's between 0 and 1
    const volume = Math.min(Math.max(parseFloat(savedVolume || 0.7), 0), 1);
    rainAudio.volume = volume;

    // Attempt to play audio
    const playAudio = () => {
        rainAudio.play().catch(error => {
            // If autoplay is blocked, show play button
            const playButton = document.createElement('button');
            playButton.textContent = 'Play Music';
            playButton.style.position = 'fixed';
            playButton.style.bottom = '20px';
            playButton.style.left = '20px';
            playButton.style.padding = '10px 20px';
            playButton.style.backgroundColor = '#800080';
            playButton.style.color = 'white';
            playButton.style.border = 'none';
            playButton.style.borderRadius = '5px';
            playButton.style.cursor = 'pointer';
            playButton.style.zIndex = '1000';

            // Add click handler to play audio
            playButton.addEventListener('click', () => {
                rainAudio.play();
                playButton.remove();
            });

            document.body.appendChild(playButton);
        });
    };

    playAudio();
});
// Event listener to initialize audio when the document is ready to ensure it plays
document.addEventListener('DOMContentLoaded', playAudio);