const counterText = document.getElementById("counter-text");
const addButton = document.getElementById("button-add");
const subtractButton = document.getElementById("button-subtract");

let counterVal = 0;

function updateCounter() {
    counterText.textContent = counterVal;
}

addButton.addEventListener("click", () => {
    counterVal++;
    updateCounter();
});

subtractButton.addEventListener("click", () => {
    if (counterVal > 0) {
        counterVal--;
    }
    updateCounter();
});

updateCounter();