let displayValue = "0";
let operands = [];
let operator = [];

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".calc-row");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => parseInput(e));
});

function parseInput(e) {
  if (parseInt(displayValue) > 0 && !isNaN(Number(e.target.textContent))) {
    if (display.textContent === "0") {
      display.textContent = e.target.textContent;
    } else {
      display.textContent += e.target.textContent;
    }
  } else if (e.target.textContent === "=") {
    operands.push(parseInt(display.textContent));

    display.textContent = evaluate(operands, operator);
    operands = [];
    operator = [];
    displayValue = "0";
  } else if (e.target.textContent === "C" || e.target.textContent === "←") {
    operator = [];
    operands = [];
    display.textContent = "0";
  } else if (isNaN(Number(e.target.textContent))) {
    operands.push(parseInt(display.textContent));
    operator.push(e.target.textContent);
    display.textContent = "0";
  } else {
    display.textContent = e.target.textContent;
    displayValue = e.target.textContent;
  }
  e.stopPropagation();
}

function evaluate(oprnd, oprtor) {
  let duro = "";
  for (let i = 0; i < oprnd.length; i++) {
    duro += oprnd[i];
    if (i < oprtor.length) {
      if (oprtor[i] == "x") {
        duro += "*";
      } else if (oprtor[i] == "÷") {
        duro += "/";
      } else {
        duro += oprtor[i];
      }
    }
  }
  return eval(duro);
}
