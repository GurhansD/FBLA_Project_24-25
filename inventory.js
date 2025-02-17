// Initialize inventory from localStorage or create empty array
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function toggleInventory() {
    const inventoryBox = document.getElementById('inventoryBox');
    if (inventoryBox.style.display === 'none' || inventoryBox.style.display === '') {
        inventoryBox.style.display = 'block';
        updateInventoryDisplay();
    } else {
        inventoryBox.style.display = 'none';
    }
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = ''; // Clear previous items
    if (inventory.length === 0) {
        inventoryList.innerHTML = '<p>No items in inventory.</p>';
    } else {
        inventory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            inventoryList.appendChild(li);
        });
    }
}

function addItemToInventory(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        // Save updated inventory to localStorage
        localStorage.setItem('inventory', JSON.stringify(inventory));
        updateInventoryDisplay();
    }
}

// Load inventory when the script is loaded
updateInventoryDisplay();
