function countWords(str) {
    return str.split(/[^a-z`'-\S]/gi).
        filter(x => x).
        filter(x => (x !== "`" && x !== "-" && x !== "'")).
        length;
}

console.log(countWords("Non-whitespac'e  Be sure' that- word`s with chars like -, ', ` are counted right."));