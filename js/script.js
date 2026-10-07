let display = document.querySelector(".input");
let buttons = document.querySelectorAll(".btn1");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "AC") {

            display.value = "";

        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            display.value = eval(display.value);
        }
        else if (value === "+") {
            display.value += "+";
        }
        else if (value === "−") {
            display.value += "-";
        }
        else if (value === "×") {
            display.value += "*";
        }
        else if (value === "÷") {
            display.value += "/";
        }
        else if (value === "%") {
            display.value = display.value / 100;
        }
        else {
            display.value += value;
        }

    });

});