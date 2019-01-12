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

