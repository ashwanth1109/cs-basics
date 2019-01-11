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

    removeAtN(n) {
        let currentNode = this.head,
            prevNode;
        for (let i = 1; i < n; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
    }

    removeMNodesFromN(m, n) {
        let currentNode = this.head,
            prevNode;
        for (let i = 1; i < n; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        for (let i = 1; i < m; i++) currentNode = currentNode.next;
        prevNode.next = currentNode.next;
    }

    reverseList() {
        let currentNode = this.head,
            prevNode = null,
            nextNode;
        while (currentNode.next !== null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        currentNode.next = prevNode;
        this.head = currentNode;
    }

    swapTwoNodes(n1, n2) {
        // n1 and n2 are positions
        let currentNode = this.head;
        [n1, n2] = [Math.max(n1, n2), Math.min(n1, n2)]; // n1 always greater than n2
        for (let i = 1; i < n2; i++) currentNode = currentNode.next;
        const firstNode = currentNode;
        for (let i = 1; i < n1 - n2; i++) currentNode = currentNode.next;
        const secondNode = currentNode.next;
        [firstNode.data, secondNode.data] = [secondNode.data, firstNode.data];
    }

    getLength() {
        let currentNode = this.head;
        let counter = 1;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }

    isListEmpty() {
        return this.getLength() === 1 && this.head.data === null;
    }

    implementFunc(func) {
        let currentNode = this.head;
        func(this.head);
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            func(currentNode);
        }
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
linkedList1.removeAtN(7);
linkedList1.removeMNodesFromN(4, 5);
linkedList1.removeAtN(5);
linkedList1.addNodes([5, 6, 7, 8, 9, 10]);
linkedList1.reverseList();
linkedList1.reverseList();
linkedList1.swapTwoNodes(2, 3);
console.log(linkedList1.returnAsString());
console.log(linkedList1.getLength());
console.log(linkedList1.isListEmpty());

const multDataBy10 = node => (node.data *= 10);
linkedList1.implementFunc(multDataBy10);
console.log(linkedList1.returnAsString());
