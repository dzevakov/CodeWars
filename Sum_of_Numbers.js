// Given two integers a and b, which can be positive or negative,
// find the sum of all the numbers between including them too and return it.
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b) {
  function sum (num1, num2) {
        let sumOfArray = 0;
        for(let i = num1; i <= num2; i++) {
            sumOfArray = sumOfArray + i;
        }
        return sumOfArray;
   }

   let result;

    if(b - a > 0) {
        result = sum(a, b);
    } else if(b - a < 0) {
        result = sum(b, a);
    } else {
        result = a;
    }
    return result;
}


console.log(getSum(1, 0) == 1);   // 1 + 0 = 1
console.log(getSum(1, 2) == 3);// 1 + 2 = 3
console.log(getSum(0, 1) == 1);// 0 + 1 = 1
console.log(getSum(1, 1) == 1);// 1 Since both are same
console.log(getSum(-1, 0) == -1); // -1 + 0 = -1
console.log(getSum(-2, 2) == 2); // -1 + 0 + 1 + 2 = 2