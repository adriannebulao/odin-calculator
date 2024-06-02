const numpadNumbers = document.getElementsByClassName("number");
const numpadDecimal = document.getElementById(".");
const displayOutput = document.getElementById("display");
const clearButton = document.getElementById("ac");
const backspaceButton = document.getElementById("del");
const toggleNegativeButton = document.getElementById("+/-");

let display = "0";

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

const setDisplay = (value) => {
  if (display === "0") {
    if (value === ".") {
      numpadDecimal.disabled = "True";
      display += value;
    } else {
      display = value;
    }
  } else {
    if (value === ".") {
      numpadDecimal.disabled = "True";
      display += value;
    } else {
      display += value;
    }
  }
  updateDisplayOutput();
};

const updateDisplayOutput = () => {
  displayOutput.innerText = display;
};

const getNumber = (e) => {
  setDisplay(e.target.innerText);
};

const backspace = () => {
  if (display.length == 1) {
    display = "0";
    updateDisplayOutput();
  } else {
    if (display[display.length - 1]) {
      numpadDecimal.disabled = "";
    }
    display = display.slice(0, -1);
    updateDisplayOutput();
  }
};

const clear = () => {
  display = "0";
  numpadDecimal.disabled = "";
  updateDisplayOutput();
};

const toggleNegative = () => {
  if (!(display === "0")) {
    if (display[0] === "-") {
      display = display.slice(1);
    } else {
      display = "-" + display;
    }
    updateDisplayOutput();
  }
};

window.addEventListener("load", () => {
  updateDisplayOutput();
});

for (let number of numpadNumbers) {
  number.addEventListener("click", getNumber);
}
clearButton.addEventListener("click", clear);
backspaceButton.addEventListener("click", backspace);
toggleNegativeButton.addEventListener("click", toggleNegative);
