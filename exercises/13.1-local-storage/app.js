const output = document.getElementById("output");

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const removeBtn = document.getElementById("removeBtn");
const clearBtn = document.getElementById("clearBtn");

// ================================
// Helper Functions
// ================================

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// ================================
// Sample Object
// ================================

const settings = {
    theme: "dark",
    fontSize: 16
};

// ================================
// Save
// ================================

saveBtn.addEventListener("click", () => {
    saveToStorage("settings", settings);
    output.textContent = "Settings saved!";
});

// ================================
// Load
// ================================

loadBtn.addEventListener("click", () => {
    const savedSettings = getFromStorage("settings", {
        theme: "light",
        fontSize: 14
    });

    output.textContent =
        `Theme: ${savedSettings.theme}, Font Size: ${savedSettings.fontSize}`;
});

// ================================
// Remove
// ================================

removeBtn.addEventListener("click", () => {
    removeFromStorage("settings");
    output.textContent = "Settings removed!";
});

// ================================
// Clear
// ================================

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    output.textContent = "Storage cleared!";
});