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

