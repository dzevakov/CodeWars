class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  const linkedList = new Node(1, new Node(2, new Node(3)));

  function stringify(list) {
    let result = '';
    while(list) {
      result = result + `${list.data} -> `;
      list = list.next;
    }
    if (list === null) {
      result = result + 'null';
    }
    return result;
  }


  console.log(stringify(linkedList));