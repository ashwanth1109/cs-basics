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

