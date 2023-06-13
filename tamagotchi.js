// Matriz que representa la pantera
const pantherMatrix = [
    ["█", "▒", "█", "▒", "▒", "█", "▒", "█"],
    ["█", "▒", "▒", "█", "▒", "▒", "▒", "█"],
    ["█", "█", "▒", "▒", "▒", "▒", "█", "█"],
    ["█", "█", "█", "▒", "▒", "█", "█", "█"],
    ["█", "█", "█", "▒", "▒", "█", "█", "█"],
    ["█", "▒", "▒", "▒", "▒", "▒", "▒", "█"],
    ["█", "▒", "█", "▒", "▒", "█", "▒", "█"],
    ["█", "▒", "█", "█", "█", "█", "▒", "█"]
];

// Función para imprimir la pantera
function printPanther() {
    const pantherImage = document.getElementById("panther-image");
    pantherImage.innerHTML = pantherMatrix.map(row => row.join(" ")).join("\n");
}

// Actualizar valores de los medidores
function updateStats() {
    document.getElementById("hunger-value").textContent = hunger;
    document.getElementById("happiness-value").textContent = happiness;
    document.getElementById("energy-value").textContent = energy;
}

// Función para alimentar al Tamagotchi
function feed() {
    if (hunger < 100) {
        hunger += 10;
        updateStats();
    }
}

// Función para jugar con el Tamagotchi
function play() {
    if (happiness < 100) {
        happiness += 10;
        updateStats();
    }
}

// Función para descansar al Tamagotchi
function rest() {
    if (energy < 100) {
        energy += 10;
        updateStats();
    }
}

// Event Listeners para los botones
document.getElementById("feed-button").addEventListener("click", feed);
document.getElementById("play-button").addEventListener("click", play);
document.getElementById("
