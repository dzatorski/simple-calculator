const addFunc = (num1, num2) => num1 + num2;
const subtractFunc = (num1, num2) => num1 - num2;
const multiplyFunc = (num1, num2) => num1 * num2;
const divideFunc = (num1, num2) => num1 / num2;
let operator = ``;
let displayValue = ``;
let firstValue = 0;
let secondValue = 0;
const screen = document.querySelector(`.screen`);
const number1 = document.querySelector(`#num1`);
const number2 = document.querySelector(`#num2`);
const number3 = document.querySelector(`#num3`);
const number4 = document.querySelector(`#num4`);
const number5 = document.querySelector(`#num5`);
const number6 = document.querySelector(`#num6`);
const number7 = document.querySelector(`#num7`);
const number8 = document.querySelector(`#num8`);
const number9 = document.querySelector(`#num9`);
const number0 = document.querySelector(`#num0`);
const dotOperator = document.querySelector(`#numDot`);
const sumButton = document.querySelector(`#operator-plus`);
const minButton = document.querySelector(`#operator-minus`);
const divButton = document.querySelector(`#operator-division`);
const mulButton = document.querySelector(`#operator-multiplication`);
const equalButton = document.querySelector(`#operator-equal`);
const backButton = document.querySelector(`#operator-back`);
const resetButton = document.querySelector(`#operator-reset`);

const refreshScreen = () => {
  screen.textContent = displayValue;
};
const operateFunc = (operator, num1, num2) => {
  if (operator === `plus`) {
    return addFunc(num1, num2);
  } else if (operator === `minus`) {
    return subtractFunc(num1, num2);
  } else if (operator === `multiplication`) {
    return multiplyFunc(num1, num2);
  } else if (operator === `division`) {
    return divideFunc(num1, num2);
  }
};

number1.addEventListener(`click`, () => {
  displayValue = displayValue + `1`;
  refreshScreen();
  return displayValue;
});
number2.addEventListener(`click`, () => {
  displayValue = displayValue + `2`;
  refreshScreen();
  return displayValue;
});
number3.addEventListener(`click`, () => {
  displayValue = displayValue + `3`;
  refreshScreen();
  return displayValue;
});
number4.addEventListener(`click`, () => {
  displayValue = displayValue + `4`;
  refreshScreen();
  return displayValue;
});
number5.addEventListener(`click`, () => {
  displayValue = displayValue + `5`;
  refreshScreen();
  return displayValue;
});
number6.addEventListener(`click`, () => {
  displayValue = displayValue + `6`;
  refreshScreen();
  return displayValue;
});
number7.addEventListener(`click`, () => {
  displayValue = displayValue + `7`;
  refreshScreen();
  return displayValue;
});
number8.addEventListener(`click`, () => {
  displayValue = displayValue + `8`;
  refreshScreen();
  return displayValue;
});
number9.addEventListener(`click`, () => {
  displayValue = displayValue + `9`;
  refreshScreen();
  return displayValue;
});
number0.addEventListener(`click`, () => {
  if (displayValue !== `` || displayValue !== 0) {
    displayValue = displayValue + `0`;
    refreshScreen();
    return displayValue;
  } else return displayValue;
});

dotOperator.addEventListener(`click`, () => {
  if (displayValue !== ``) {
    displayValue = displayValue + `.`;
    refreshScreen();
    return displayValue;
  } else return displayValue;
});

sumButton.addEventListener(`click`, () => {
  firstValue = Number(displayValue);
  operator = `plus`;
  displayValue = ``;
  refreshScreen();
});
minButton.addEventListener(`click`, () => {
  firstValue = Number(displayValue);
  operator = `minus`;
  displayValue = ``;
  refreshScreen();
});
mulButton.addEventListener(`click`, () => {
  firstValue = Number(displayValue);
  operator = `multiplication`;
  displayValue = ``;
  refreshScreen();
});
divButton.addEventListener(`click`, () => {
  firstValue = Number(displayValue);
  operator = `division`;
  displayValue = ``;
  refreshScreen();
});

equalButton.addEventListener(`click`, () => {
  secondValue = Number(displayValue);
  let sum = operateFunc(operator, firstValue, secondValue);
  displayValue = sum;
  refreshScreen();
  return sum;
});

resetButton.addEventListener(`click`, () => {
  firstValue = ``;
  secondValue = ``;
  displayValue = ``;
  refreshScreen();
});

backButton.addEventListener(`click`, () => {
  let cut = displayValue.slice(0, -1);
  displayValue = cut;
  refreshScreen();
});
