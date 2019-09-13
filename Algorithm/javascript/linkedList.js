class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data = null) {
    this.first = new ListNode(data);
  }

  // 리스트 조작 메소드들
  insertNext(listnode, data) {
    if (first) {
      newNode = new ListNode(data);
      temp = listnode.next;
      listnode.next = newNode;
      newNode.next = temp;
    } else {
      first.next = new ListNode(data);
    }
  }
}