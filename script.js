function convertTemp() {

    const input = document.getElementById("temperature");
    const unit = document.getElementById("unit");
    const result = document.getElementById("result");
    const formula = document.getElementById("formula");

    const temperature = parseFloat(input.value);

    // Check for empty or invalid input
    if (isNaN(temperature)) {

        result.textContent = "Enter a valid value";
        formula.textContent = "Please enter a number first.";

        return;
    }

    let convertedTemperature;

    if (unit.value === "CtoF") {

        // Celsius to Fahrenheit
        convertedTemperature =
            (temperature * 9 / 5) + 32;

        result.textContent =
            `${convertedTemperature.toFixed(2)} °F`;

        formula.textContent =
            `${temperature} °C = ${convertedTemperature.toFixed(2)} °F`;

    } else {

        // Fahrenheit to Celsius
        convertedTemperature =
            (temperature - 32) * 5 / 9;

        result.textContent =
            `${convertedTemperature.toFixed(2)} °C`;

        formula.textContent =
            `${temperature} °F = ${convertedTemperature.toFixed(2)} °C`;
    }
}


function resetConverter() {

    document.getElementById("temperature").value = "";

    document.getElementById("unit").value = "CtoF";

    document.getElementById("result").textContent = "--";

    document.getElementById("formula").textContent = "";
}


// Convert when Enter key is pressed
document
    .getElementById("temperature")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            convertTemp();
        }

    });