// ------------------------------------------------------------
// define the node class with data and a next pointer
// ------------------------------------------------------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(item1 = null) {
        this.head = new Node(item1);
    }

    append(item) {
        let currentNode = this.head;
        let newNode = new Node(item);
        while (currentNode.next !== null) currentNode = currentNode.next;
        currentNode.next = newNode;
    }
}

const linkedList1 = new LinkedList(1);

console.log(linkedList1);
