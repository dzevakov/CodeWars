const str = "k(a3(b(a2(c))))zz"; //"kabaccbaccbacczz"

const simpleCalc = (data) => {
   const splitedData = data.split('').reverse();
   let result = '';
   splitedData.forEach(item => {
      if(Number.isNaN(+item)) {
         result = result + item;
      } else {
         let intermediateResult = '';
         for(let i = 1; i <= item; i++) {
            intermediateResult = intermediateResult + result;
         }
         result = intermediateResult;
      }
   });
   return result.split('').reverse().join('');
};

const calculate = (input) => {
      const firstBracket = input.indexOf('('),
            lastBracket = input.lastIndexOf(')');
      if (firstBracket && lastBracket !== -1) {
         const newData = input.slice(firstBracket + 1, lastBracket);
         const result = calculate(newData);
         return simpleCalc(`${input.slice(0, firstBracket)}${result}${input.slice(lastBracket + 1)}`);
      } else {
         return simpleCalc(input);
      }
};

console.log(calculate('k(a3(b(a2(c))))zz'));