const preorder = function (root) {
  const visited = [];

  function preorderTraversal(node) {
    if (!node) return;

    visited.push(node.val);

    for (let i = 0; i < node.children.length; i++) preorderTraversal(node.children[i]);
  }

  preorderTraversal(root);

  return visited;

};
