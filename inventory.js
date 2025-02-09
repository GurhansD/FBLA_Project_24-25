let inventory = [];

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
    inventory.push(item);
    updateInventoryDisplay();
}
