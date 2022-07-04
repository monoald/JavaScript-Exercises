function findSumNumbers(result, number1, number2) {
  const sum = parseFloat(result);
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  if (isNaN(sum) || isNaN(num1) || isNaN(num2)) {
    return 'You must enter a number'
  }
  return num1 + num2 == sum;
}

const result = 50;
const number1 = 'q20';
const number2 = '30';

const ans = findSumNumbers(result, number1, number2);
console.log(ans);