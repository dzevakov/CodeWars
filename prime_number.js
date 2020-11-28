function checkNumber(n) {
    if(n < 2) {
        return false;
    } else if(n === 2 || n === 3) {
        return true;
    } else if (n % 2 == 0) {
        return false; 
    }

    let devisor = 3;
    const limit = Math.sqrt(n);

    while (devisor <= limit) {
        if(n % devisor === 0) {
            return false;
        }
        devisor += 2;
    }
    return true;
}

console.log(checkNumber(4));