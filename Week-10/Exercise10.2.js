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

  validateBST(root, minValue, maxValue) {
    if (!root) return true;
    if (root.val <= minValue || root.val >= maxValue) return false;
    return (
      validateBST(root.left, minValue, root.val) &&
      validateBST(root.right, root.val, maxValue)
    );
  }
}

const bt = new BinaryTree();
bt.root = new TreeNode(2);
bt.root.left = new TreeNode(1);
bt.root.right = new TreeNode(3);

console.log(bt.validateBST());
