class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = new Node();
    }

    setHead(item) {
        this.head.data = item;
    }

    addNode(item, node = new Node(item)) {
        if (!this.head.data) this.head = this.tail = node;
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    addNodes(items) {
        for (const item of items) {
            const node = new Node(item);
            [this.tail.next, node.prev, this.tail] = [node, this.tail, node];
        }
    }

    addNodeAtPosition(item, pos, node = new Node(item), current = this.head) {
        for (let i = 1; i < pos - 1; i++) current = current.next;
        [node.next, current.next] = [current.next, node];
    }

    removeNodeAtPosition(pos, current = this.head) {
        for (let i = 1; i < pos - 1; i++) current = current.next;
        const nextNode = current.next.next;
        [nextNode.prev, current.next] = [current, nextNode];
    }

    reverse(currentNode = this.head, prevNode = null, nextNode = null) {
        while (currentNode) {
            nextNode = currentNode.next;
            [currentNode.next, currentNode.prev] = [prevNode, nextNode];
            [prevNode, currentNode] = [currentNode, nextNode];
        }
        [this.tail, this.head] = [this.head, prevNode];
    }

    swapTwoNodes(pos1, pos2, current = this.head) {
        [pos1, pos2] = [Math.min(pos1, pos2), Math.max(pos1, pos2)];
        for (let i = 1; i < pos1; i++) current = current.next;
        const node1 = current;
        for (let i = pos1; i < pos2; i++) current = current.next;
        const node2 = current;
        [node1.data, node2.data] = [node2.data, node1.data];
    }

    getLength(current = this.head, count = 1) {
        while (current.next !== null) {
            current = current.next;
            count++;
        }
        return count;
    }

    isListEmpty() {
        return this.getLength() === 1 && this.head.data === null;
    }

    implementFunc(func, current = this.head) {
        while (current !== null) {
            func(current);
            current = current.next;
        }
    }

    displayList(
        node = this.head,
        list = "" + node.data === null ? "" : node.data
    ) {
        while (node.next !== null) {
            node = node.next;
            list += " <=> " + node.data;
        }
        return list;
    }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNodes([2, 3, 4, 5, 7, 8, 9, 10]);
linkedList.addNodeAtPosition(6, 6);
linkedList.removeNodeAtPosition(8);
linkedList.reverse();
linkedList.swapTwoNodes(3, 6);
console.log(linkedList.displayList());
console.log(linkedList.getLength());
const linkedList2 = new LinkedList();
console.log(linkedList2.isListEmpty());
linkedList2.addNode(1);
console.log(linkedList2.isListEmpty());

const multNodesBy10 = node => (node.data *= 10);
linkedList.implementFunc(multNodesBy10);
console.log(linkedList.displayList());
