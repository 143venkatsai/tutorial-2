const ratioOfTwoNumbers = require("../ratio/index");
const factorailOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorailOfNumber(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
