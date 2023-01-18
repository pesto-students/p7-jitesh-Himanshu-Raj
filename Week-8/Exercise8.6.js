class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    this.s1.push(x);
  }

  dequeue() {
    if (this.s2.length === 0) {
      if (this.s1.length === 0) {
        console.log("Queue is empty");
        return;
      }
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
}

const queue = new Queue();

const input = [1, 2, 1, 3, 2, 1, 4, 2];
//const input = [4, 1, 2, 2, 2, 1, 4];
let output = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 1) {
    queue.enqueue(input[i + 1]);
    i++;
  } else if (input[i] === 2) {
    output.push(queue.dequeue());
  }
}
console.log(output);
