function createArrayOfTiers(num) {
  const result = [];
  const string = num.toString();
  for(let i = 0; i < string.length; i++){
    result.push(string.slice(0, i + 1));
  }
  return result;
}

console.log(createArrayOfTiers(2017));