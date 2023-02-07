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

  maxDepth(root = this.root) {
    if (!root) return 0;
    return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }
}

const bt = new BinaryTree();

bt.root = new TreeNode(3);
bt.root.left = new TreeNode(9);
bt.root.right = new TreeNode(20);
bt.root.right.left = new TreeNode(15);
bt.root.right.right = new TreeNode(7);

console.log(bt.maxDepth()); // Output: 3
