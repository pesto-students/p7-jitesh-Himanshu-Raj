class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverseList() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

// example usage
const list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);
list.head.next.next.next.next.next = new Node(6);

console.log("Original List: ");
let temp = list.head;
while (temp) {
  console.log(temp.data);
  temp = temp.next;
}

list.reverseList();

console.log("Reversed List: ");
temp = list.head;
while (temp) {
  console.log(temp.data);
  temp = temp.next;
}
