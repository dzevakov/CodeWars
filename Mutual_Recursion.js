'use strict';

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))

// F: 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13,
// M: 0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 12,
const arrayF = [],
      arrayM = [];

function M(n) {
    if(n === 0) {
        return 0;
    }
    return n - F(M(n - 1));
}
function F(n) {
    if (n === 0) {
        return 1;
    }
    return n - M(F(n - 1));
}


console.log(F(7));
