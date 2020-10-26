'use strict';

const initData = [1,1,1,1,1,1,10,1,1,1,1];

const result = {};
initData.forEach(item => {
    if((item in result) === false) {
        result[item] = 1;
    } else {
        result[item] = result[item] + 1;
    }
});

for(let item in result) {
    if((result[item] & 1) === 1) {
        console.log(`${item} is odd.`);
    }
}