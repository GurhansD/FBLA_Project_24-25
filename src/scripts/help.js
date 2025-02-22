// Help System Module
// This module creates and manages an interactive help overlay for the game

(function() {
    // Create help button
    const helpButton = document.createElement('button');
    helpButton.id = 'helpButton';
    helpButton.textContent = 'Help';
    // Style the help button
    helpButton.style.position = 'fixed';
    helpButton.style.top = '20px';
    helpButton.style.left = '20px';
    helpButton.style.zIndex = '1000';
    helpButton.style.padding = '10px 20px';
    helpButton.style.backgroundColor = '#007bff';
    helpButton.style.color = 'white';
    helpButton.style.border = 'none';
    helpButton.style.borderRadius = '5px';
    helpButton.style.cursor = 'pointer';
    helpButton.style.transition = 'all 0.3s';

    // Create help overlay
    const helpOverlay = document.createElement('div');
    helpOverlay.id = 'helpOverlay';
    helpOverlay.style.display = 'none';
    helpOverlay.style.position = 'fixed';
    helpOverlay.style.top = '0';
    helpOverlay.style.left = '0';
    helpOverlay.style.width = '100%';
    helpOverlay.style.height = '100%';
    helpOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    helpOverlay.style.zIndex = '999';
    helpOverlay.style.display = 'none'; // Initially hidden
    helpOverlay.style.alignItems = 'center';
    helpOverlay.style.justifyContent = 'center';

    // Create help content box
    const helpBox = document.createElement('div');
    helpBox.id = 'helpBox';
    helpBox.style.backgroundColor = 'rgba(0,0,0,0.7)';
    helpBox.style.padding = '30px';
    helpBox.style.borderRadius = '10px';
    helpBox.style.maxWidth = '800px';
    helpBox.style.width = '90%';
    helpBox.style.color = 'white';
    helpBox.style.position = 'relative';

    // Add help content
    helpBox.innerHTML = `
        <h1 style="color: #800080; text-align: center; margin-bottom: 30px; animation: float 3s ease-in-out infinite;">Help Guide</h1>
        <p style="margin-bottom: 20px; line-height: 1.8;">As you navigate through the storm-ravaged city of Vaireaux, here are a few key features to help guide your journey:</p>
        <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Inventory:</strong> At any time, click the Inventory button in the top right corner of the screen to check the items you've acquired. Some items may be essential for survival, so keep track of what you're carrying.</p>
        <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Stopping the Story:</strong> If you need to step away, click the Stop Story button to return to the main page. You can always restart your journey from the beginning or load your last checkpoint.</p>
        <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Death & Checkpoints:</strong> The storm is merciless, and many choices lead to death. If you perish, simply click Load Recent Checkpoint to return to the last saved point in your journey and try a different path.</p>
        <p style="margin-bottom: 20px; line-height: 1.8;"><strong>Your Report:</strong> After making it through the storm you'll receive a final report including your death count and overall score.</p>
        <p style="margin-bottom: 30px; line-height: 1.8;">Choose wisely, adapt to the storm, and see if you have what it takes to escape.</p>
        <div style="text-align: center;">
            <button id="closeHelp" style="padding: 10px 20px; background-color: #800080; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">Close</button>
        </div>
    `;

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Add elements to document
    document.body.appendChild(helpButton);
    helpOverlay.appendChild(helpBox);
    document.body.appendChild(helpOverlay);

    // Toggle help visibility
    function toggleHelp() {
        helpOverlay.style.display = helpOverlay.style.display === 'none' ? 'flex' : 'none';
    }

    // Event listeners
    helpButton.addEventListener('click', toggleHelp);
    document.getElementById('closeHelp').addEventListener('click', toggleHelp);
})();
