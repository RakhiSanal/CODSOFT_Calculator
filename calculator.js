let powerOn = true;

function addToScreen(value) {
    if (powerOn)
        document.getElementById("screen").value += value;
}

function clearScreen() {
    if (powerOn)
        document.getElementById("screen").value = "";
}

function backspace() {
    if (powerOn)
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
}

function calculate() {
    if (powerOn) {
        try {
            let result = eval(document.getElementById("screen").value);
            document.getElementById("screen").value = result;
        } catch (error) {
            document.getElementById("screen").value = "Error";
        }
    }
}

function power() {
    powerOn = !powerOn;
    if (!powerOn)
        document.getElementById("screen").value = "";
}