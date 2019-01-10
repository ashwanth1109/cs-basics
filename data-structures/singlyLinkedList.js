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

    addNode(item) {
        let currentNode = this.head;
        let newNode = new Node(item);
        while (currentNode.next !== null) currentNode = currentNode.next;
        currentNode.next = newNode;
    }

    addNodes(items) {
        let currentNode = this.head;
        while (currentNode.next !== null) currentNode = currentNode.next;
        for (const item of items) {
            const newNode = new Node(item);
            currentNode.next = newNode;
            currentNode = currentNode.next;
        }
    }

    getElementAtN(n) {
        let currentNode = this.head;
        for (let i = 1; i < n; i++) currentNode = currentNode.next;
        return currentNode.data;
    }

    returnAsString() {
        let currentNode = this.head;
        let string = "";
        while (currentNode.next !== null) {
            string += currentNode.data + " => ";
            currentNode = currentNode.next;
        }
        return string + currentNode.data;
    }

    addNodeAfterN(n, item) {
        let currentNode = this.head;
        let newNode = new Node(item);
        for (let i = 1; i < n; i++) currentNode = currentNode.next;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    removeItemfromList(item) {
        let currentNode = this.head;
        let prevNode;
        while (currentNode.data !== item) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
    }
}

const linkedList1 = new LinkedList(1);
linkedList1.addNode(2);
linkedList1.addNodes([3, 4, 5, 6, 7, 8, 9, 10]);
// ------------------------------------------------------------
// Linked List - 1 => 2 => 3 => 4 => 5
// ------------------------------------------------------------
console.log(linkedList1.getElementAtN(8)); // 8
linkedList1.addNodeAfterN(5, 5.5);
linkedList1.removeItemfromList(5.5);
console.log(linkedList1.returnAsString());
