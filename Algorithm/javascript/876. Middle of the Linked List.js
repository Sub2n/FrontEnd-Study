const middleNode = function(head) {
    const list = [];
    let curNode = head;

    while(curNode) {
        list.push(curNode);
        curNode = curNode.next;
    }

    const middle = list.length % 2 ? Math.floor(list.length / 2) : list.length / 2;

    return list[middle];
};