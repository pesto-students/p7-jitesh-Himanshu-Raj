class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  levelOrder = (root) => {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
      let level = [];
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(level);
    }
    return result;
  };
}

const bt = new BinaryTree();
bt.root = new TreeNode(3);
bt.root.left = new TreeNode(9);
bt.root.right = new TreeNode(20);
bt.root.right.left = new TreeNode(15);
bt.root.right.right = new TreeNode(7);

console.log(bt.levelOrder(bt.root));
