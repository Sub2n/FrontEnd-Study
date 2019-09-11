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

console.log(preorder({
  "$id": "1",
  "children": [{
    "$id": "2",
    "children": [{
      "$id": "5",
      "children": [],
      "val": 5
    }, {
      "$id": "6",
      "children": [],
      "val": 6
    }],
    "val": 3
  }, {
    "$id": "3",
    "children": [],
    "val": 2
  }, {
    "$id": "4",
    "children": [],
    "val": 4
  }],
  "val": 1
}));

console.log(preorder({
  "$id": "1",
  "children": [{
    "$id": "2",
    "children": [{
      "$id": "3",
      "children": [],
      "val": 8
    }, {
      "$id": "4",
      "children": [],
      "val": 5
    }],
    "val": 1
  }],
  "val": 8
}))