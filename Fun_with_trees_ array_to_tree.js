
const TreeNode = function(value, left, right) {
    this.value = value;
    // this.left = left;
    // this.right = right;
};

function arrayToTree(array) {
    if (array && array.length) {

        const node = new TreeNode(array[0]);
        let current;
        const queue = [];

        queue.push(node);
        current = queue.shift();
        for (let i = 1; i <= array.length - 1; i++) {
            
            if (!current.left && current.left !== 0) {
                current.left = new TreeNode(array[i]);
                queue.push(current.left);
            } else {
                current.right = new TreeNode(array[i]);
                queue.push(current.right);
                current = queue.shift();
            }
        }
        return node;
         
    } else {
        return undefined;
    }
    
}

const tree = arrayToTree([17, 0, -4, 3, 15]);
console.log(tree);

