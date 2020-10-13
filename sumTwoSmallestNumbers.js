// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

const arr = [45, 8, -12, 19, 22, 35.4, 48];

function sumTwoSmallestNumbers(numbers) {  
const sortedArray = numbers.filter(item => item > 0)
            .filter(item => Number.isInteger(item))
            .sort((a, b) => {return a - b;});
const firstNumber = sortedArray.shift();
const finalResult = firstNumber + sortedArray.shift();

return finalResult;
}

console.log(sumTwoSmallestNumbers(arr));