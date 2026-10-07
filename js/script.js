// ===== Display =====
let display = document.getElementById("display");

// ===== All Buttons =====
let buttons = document.querySelectorAll(".btn");

// ===== Clear Button =====
let clear = document.getElementById("clear");

// ===== Delete Button =====
let deleteBtn = document.getElementById("delete");


// ===== Number & Operator Buttons =====
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        let value = button.innerText;

        // Equal button
        if (value === "=") {
            calculate();
        }

        // Clear button
        else if (value === "AC") {
            display.value = "";
        }

        // Delete button
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Operators
        else if (value === "×") {
            display.value += "*";
        }

        else if (value === "÷") {
            display.value += "/";
        }

        else if (value === "−") {
            display.value += "-";
        }

        // Percentage
        else if (value === "%") {
            display.value = display.value / 100;
        }

        // Numbers & others
        else {
            display.value += value;
        }

    });

});


// ===== Calculate Function =====
function calculate() {

    try {

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }

}