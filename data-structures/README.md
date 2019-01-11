## Linked List

Reference - Wikipedia (I know, I know, but its got a good intro)

A linked list is a linear collection of data elements (also known as nodes) where one node points to the next by means of a pointer. Their order is not determined by their physical placement in memory but determined through the pointers where each element points to the next to give us our sequence.
Linked Lists allow for efficient insertion or removal of elements from any position in the sequence during iteration.

### Benefits over Arrays

1. List elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
2. Data items need not be stored contiguously in memory or on disk. This property makes restructuring an array at run time a very expensive operation.

### Disadvantages

1. Use more memory than arrays since pointers also need to be stored in addition to the data.
2. Always have to read the nodes from the beginning in a sequential manner to get to the node we want (sequential access)
3. Since nodes are stored incontiguously in memory, it greatly increases the time period required to access individual elements in the list.
4. Lists with reverse traversing properties (doubly linked list) needs additional storage for a back pointer.

So, a node has - (1) data, and (2) pointer

[Singly Linked List](./SinglyLinkedList.md)
