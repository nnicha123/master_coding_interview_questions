class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let node = this.root;
      while (node) {
        if (newNode.val < node.val) {
          if (!node.left) {
            node.left = newNode;
            return this;
          } else {
            node = node.left;
          }
        } else {
          if (!node.right) {
            node.right = newNode;
            return this;
          } else {
            node = node.right;
          }
        }
      }
      node = newNode;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(1);
tree.insert(3);
// console.log(tree);

const arrayToTree = (arr) => {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }

    if (arr[i + 1] != null && i + 1 < arr.length) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
    i += 2;
  }
  return root;
};

const isValidBST = (root) => {
  return validate(root, -Infinity, Infinity);
};

const validate = (root, lower, upper) => {
  if (!root) return true;
  if (root.val <= lower || root.val >= upper) return false;
  return (
    validate(root.left, lower, root.val) &&
    validate(root.right, root.val, upper)
  );
};
console.log(isValidBST(tree.root));
console.log(arrayToTree([5, 1, 4, null, null, 3, 6]));
