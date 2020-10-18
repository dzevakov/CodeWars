// For simplicity, you'll have to capitalize each word,
// check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

const str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    const splitedStr = this.split(' ');

    const newStr = splitedStr.map(function(item) {
            const newItem = item.split('');
            newItem.splice(0, 1, newItem[0].toUpperCase());
            return newItem.join('');
    });

    return newStr.join(' ');
};



console.log(str.toJadenCase());

