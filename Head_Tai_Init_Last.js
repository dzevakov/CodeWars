const list = [1, 2, 3, 4, 5];


let head = (list) => {
    return list.slice(0, 1);
};
let tail = (list) => {
    return list.slice(1);
};
let init = (list) => {
    return list.slice(0, -1);
};
let last = (list) => {
    return list.slice(-1);
};

console.log(head(list), tail(list), init(list), last(list), list);
