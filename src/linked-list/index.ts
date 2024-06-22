type Node<T> = {
  val: T;
  next: Node<T> | null;
}

export class LinkedList<T> {
  private length: number = 0;
  private head: Node<T> | null = {} as Node<T>;

  constructor() {
    this.length = 0;
  }

  addItem(item: T) {
    const node = {val: item, next: null} as Node<T>;
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }


  removeItem() {
    if (!this.head || this.length === 0) {
      return undefined
    }
    const head = this.head;
    this.head = this.head.next
    this.length--
    return head.val;
  }

  peek() {
    return this.head?.val;
  }
}
