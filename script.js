const addFunc = (num1, num2) => num1 + num2;
const subtractFunc = (num1, num2) => num1 - num2;
const multiplyFunc = (num1, num2) => num1 * num2;
const divideFunc = (num1, num2) => num1 / num2;
let operator = ``;
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
