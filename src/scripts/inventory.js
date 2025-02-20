// Inventory System Module
// Manages player inventory including UI, item storage, and persistence

(function() {
    // Initialize inventory from localStorage or empty array

    let inventory = JSON.parse(localStorage.getItem('inventory') || '[]');

    // Create and style inventory toggle button

    // Create inventory toggle button
    const inventoryButton = document.createElement('button');

    inventoryButton.id = 'inventoryToggle';
    inventoryButton.textContent = 'Inventory';
    inventoryButton.style.position = 'fixed';
    inventoryButton.style.top = '20px';
    inventoryButton.style.right = '20px';
    inventoryButton.style.padding = '10px 20px';
    inventoryButton.style.backgroundColor = '#007bff';
    inventoryButton.style.color = 'white';
    inventoryButton.style.border = 'none';
    inventoryButton.style.borderRadius = '5px';
    inventoryButton.style.cursor = 'pointer';
    inventoryButton.style.zIndex = '1000';
    document.body.appendChild(inventoryButton);

    // Create inventory display box
    const inventoryBox = document.createElement('div');

    inventoryBox.id = 'inventoryBox';
    inventoryBox.style.position = 'fixed';
    inventoryBox.style.top = '70px';
    inventoryBox.style.right = '20px';
    inventoryBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    inventoryBox.style.padding = '20px';
    inventoryBox.style.borderRadius = '10px';
    inventoryBox.style.color = 'white';
    inventoryBox.style.zIndex = '999';
    inventoryBox.style.width = '200px';
    inventoryBox.style.display = 'none';
    inventoryBox.innerHTML = '<h3>Inventory</h3><div id="inventoryList"></div>';
    document.body.appendChild(inventoryBox);

    /**
     * Updates the inventory display with current items
     * Handles both empty state and item display with icons
     */

    function updateInventory() {
        // Get reference to inventory list container

        const inventoryList = document.getElementById('inventoryList');
        // Clear existing inventory display

        inventoryList.innerHTML = '';

        // Handle empty inventory state
        if (inventory.length === 0) {

            inventoryList.innerHTML = '<p>No items in inventory</p>';
        } else {
            // Display each item with appropriate icon
            inventory.forEach(item => {

                // Create container for each inventory item
                const itemDiv = document.createElement('div');

                itemDiv.style.display = 'flex'; // Use flexbox for layout

                itemDiv.style.alignItems = 'center';
                itemDiv.style.margin = '10px 0';

                // Special handling for flashlight item
                if (item === 'Flashlight (weak batteries)') {

                    itemDiv.innerHTML = `
                        <img src="/assets/images/pixelFlashlight.jpg" alt="Flashlight" style="width:32px;height:32px;margin-right:10px;">
                        <span>Flashlight</span>
                    `;
                } 
                // Special handling for jump shoes item
                else if (item === 'Jump Shoes') {

                    itemDiv.innerHTML = `
                        <img src="/assets/images/pixelShoe.png" alt="Jump Shoes" style="width:32px;height:32px;margin-right:10px;">
                        <span>Jump Shoes</span>
                    `;
                } 
                // Default handling for other items
                else {

                    itemDiv.textContent = item;
                }

                // Add item to inventory display
                inventoryList.appendChild(itemDiv);
            });
        }
    }

    /**
     * Toggles inventory visibility
     * Updates inventory display before showing
     */

    inventoryButton.onclick = function() {
        // Update display before toggling visibility

        updateInventory();
        inventoryBox.style.display = inventoryBox.style.display === 'none' ? 'block' : 'none';
    };

    /**
     * Adds item to inventory if not already present
     * @param {string} item - The item to add
     */

    window.addItemToInventory = function(item) {
        // Only add if item doesn't already exist

        if (!inventory.includes(item)) {
            inventory.push(item);
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    /**
     * Removes item from inventory if present
     * @param {string} item - The item to remove
     */

    window.removeItemFromInventory = function(item) {
        // Find and remove item if it exists

        const index = inventory.indexOf(item);
        if (index !== -1) {
            inventory.splice(index, 1);
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    /**
     * Clears all items from inventory
     * Also removes from localStorage
     */

    window.clearInventory = function() {
        // Reset inventory and remove from storage

        inventory = [];
        localStorage.removeItem('inventory');
    };
})();
