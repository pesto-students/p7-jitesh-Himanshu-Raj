var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /* Inserts a new Node at front of the list. */
  push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
  }

  // Returns true if there is a loop in linked
  // list else returns false.
  detectLoop(h) {
    if (h == null) return false;

    let slow = new Node();
    let fast = new Node();
    fast = slow = h;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) return true;
    }

    return false;
  }
}

/* Driver program to test above function */
const list = new LinkedList();

list.push(1);
list.push(8);
list.push(3);
list.push(4);

/* Create loop for testing */
head.next.next.next.next = head;

if (list.detectLoop(head)) console.log("Loop Found");
//else console.log("No Loop");
