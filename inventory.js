// Simplified Inventory System
(function() {
    // Initialize inventory
    let inventory = JSON.parse(localStorage.getItem('inventory') || '[]');

    // Add inventory button and box
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

    // Update inventory display
    function updateInventory() {
        const inventoryList = document.getElementById('inventoryList');
        inventoryList.innerHTML = '';

        if (inventory.length === 0) {
            inventoryList.innerHTML = '<p>No items in inventory</p>';
        } else {
            inventory.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.style.display = 'flex';
                itemDiv.style.alignItems = 'center';
                itemDiv.style.margin = '10px 0';

                if (item === 'Flashlight (weak batteries)') {
                    itemDiv.innerHTML = `
                        <img src="pixelFlashlight.jpg" alt="Flashlight" style="width:32px;height:32px;margin-right:10px;">
                        <span>Flashlight</span>
                    `;
                } else if (item === 'Jump Shoes') {
                    itemDiv.innerHTML = `
                        <img src="pixelShoe.png" alt="Jump Shoes" style="width:32px;height:32px;margin-right:10px;">
                        <span>Jump Shoes</span>
                    `;
                } else {
                    itemDiv.textContent = item;
                }

                inventoryList.appendChild(itemDiv);
            });
        }
    }

    // Toggle inventory visibility
    inventoryButton.onclick = function() {
        updateInventory();
        inventoryBox.style.display = inventoryBox.style.display === 'none' ? 'block' : 'none';
    };

    // Add item to inventory
    window.addItemToInventory = function(item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    // Remove item from inventory
    window.removeItemFromInventory = function(item) {
        const index = inventory.indexOf(item);
        if (index !== -1) {
            inventory.splice(index, 1);
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    // Clear inventory
    window.clearInventory = function() {
        inventory = [];
        localStorage.removeItem('inventory');
    };
})();
