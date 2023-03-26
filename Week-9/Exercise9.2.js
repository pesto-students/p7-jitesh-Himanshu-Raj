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

  rotate(k) {
    if (k == 0) return;

    let current = this.head;

    let count = 1;
    while (count < k && current != null) {
      current = current.next;
      count++;
    }

    if (current == null) return;

    let kthNode = current;
    while (current.next != null) current = current.next;

    current.next = this.head;
    this.head = kthNode.next;
    kthNode.next = null;
  }

  push(new_data) {
    let new_node = new Node(new_data);
    new_node.next = this.head;
    this.head = new_node;
  }
}

// example usage
const list = new LinkedList();
list.head = new Node(2);
list.head.next = new Node(4);
list.head.next.next = new Node(7);
list.head.next.next.next = new Node(8);
list.head.next.next.next.next = new Node(9);

console.log("Original List: ");
let temp = list.head;
while (temp) {
  console.log(temp.data);
  temp = temp.next;
}

list.rotate(3);

console.log("Rotated List: ");
temp = list.head;
while (temp) {
  console.log(temp.data);
  temp = temp.next;
}
