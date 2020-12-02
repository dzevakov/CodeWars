function zero(num) {
    if(num) {
        return num(0);
    } else {
        return 0;
    }
}
function one(num) {
    if(num) {
        return num(1);
    } else {
        return 1;
    }
}
function two(num) {
    if(num) {
        return num(2);
    } else {
        return 2;
    }
}
function three(num) {
    if(num) {
        return num(3);
    } else {
        return 3;
    }
}
function four(num) {
    if(num) {
        return num(4);
    } else {
        return 4;
    }
}
function five(num) {
    if(num) {
        return num(5);
    } else {
        return 5;
    }
}
function six(num) {
    if(num) {
        return num(6);
    } else {
        return 6;
    }
}
function seven(num) {
    if(num) {
        return num(7);
    } else {
        return 7;
    }
}
function eight(num) {
    if(num) {
        return num(8);
    } else {
        return 8;
    }
}
function nine(num) {
    if(num) {
        return num(9);
    } else {
        return 9;
    }
}

function plus(num2) {
    return function calculate(num) {
        return num + num2;
    };
}
function minus(num2) {
    return function calculate(num) {
        return num - num2;
    };
}
function times(num2) {
    return function calculate(num) {
        return num * num2;
    };
}
function dividedBy(num2) {
    return function calculate(num) {
        return Math.floor(num / num2);
    };
}

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);


// function one(num) {
//     if(num) {
//         return num(1);
//     } else {
//         return 1;
//     }
// }
// function two(num) {
//     if(num) {
//         return num(2);
//     } else {
//         return 2;
//     }
// }

// function pl(num2) {
//     return function bm(num) {
//         return num + num2;
//     };
// }

// console.log(one(pl(two())));