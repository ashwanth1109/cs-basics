### Doubly Linked List

Doubly Linked Lists have two pointers (next, prev) along with the data

1. Node class

```javascript
class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
```

2. LinkedList class

```javascript
class LinkedList {
    constructor() {
        this.head = this.tail = new Node();
    }
}
```

3. Method to set head

```javascript
setHead(item) {
    this.head.data = item;
}
```

4. Method to add node

```javascript
addNode(item, node = new Node(item)) {
    if (!this.head.data) this.head = this.tail = node;
    else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
}
```

5. Method to add Nodes

```javascript
addNodes(items) {
    for (const item of items) {
        const node = new Node(item);
        [this.tail.next, node.prev, this.tail] = [node, this.tail, node];
    }
}
```

6. Method to add Node at a specific position

```javascript
addNodeAtPosition(item, pos, node = new Node(item), current = this.head) {
    for (let i = 1; i < pos - 1; i++) current = current.next;
    [node.next, current.next] = [current.next, node];
}
```

7. Method to remove Node at specific position

```javascript
removeNodeAtPosition(pos, current = this.head) {
    for (let i = 1; i < pos - 1; i++) current = current.next;
    const nextNode = current.next.next;
    [nextNode.prev, current.next] = [current, nextNode];
}
```

8. Method to reverse list

```javascript
reverse(currentNode = this.head, prevNode = null, nextNode = null) {
    while (currentNode) {
        nextNode = currentNode.next;
        [currentNode.next, currentNode.prev] = [prevNode, nextNode];
        [prevNode, currentNode] = [currentNode, nextNode];
    }
    [this.tail, this.head] = [this.head, prevNode];
}
```

9. Method to swap two nodes

```javascript
swapTwoNodes(pos1, pos2, current = this.head) {
    [pos1, pos2] = [Math.min(pos1, pos2), Math.max(pos1, pos2)];
    for (let i = 1; i < pos1; i++) current = current.next;
    const node1 = current;
    for (let i = pos1; i < pos2; i++) current = current.next;
    const node2 = current;
    [node1.data, node2.data] = [node2.data, node1.data];
}
```

10. Method to get length of list

```javascript
getLength(current = this.head, count = 1) {
    while (current.next !== null) {
        current = current.next;
        count++;
    }
    return count;
}
```

11. Method to check if list is empty

```javascript
isListEmpty() {
    return this.getLength() === 1 && this.head.data === null;
}
```

12. Method to implement a function on all nodes

```javascript
implementFunc(func, current = this.head) {
    while (current !== null) {
        func(current);
        current = current.next;
    }
}
```

