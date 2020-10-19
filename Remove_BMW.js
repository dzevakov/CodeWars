// Your task is to write a function that takes one parameter
// str that MUST be a string and removes all capital and small
// letters B, M and W. If data of the wrong data type was sent
// as a parameter the function must throw an error
// (IllegalArgumentException in Groovy): "This program only
// works for text."

function removeBMW(str){
    if(typeof(str) !== 'string') {
        throw new Error("This program only works for text.");
    }

    let newStr = str.replace(/b+/gi, '');
    newStr = newStr.replace(/m+/gi, '');
    newStr = newStr.replace(/w+/gi, '');
    return newStr;  
}

console.log(removeBMW('bmwvolvoBMW'));
console.log(removeBMW('blablahblah'));
console.log(removeBMW(132));