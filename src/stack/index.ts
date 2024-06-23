type Node<T> = {
  value: T,
  prev?: Node<T>
}

// LIFO
export class Stack<T> {
  private length = 0;
  private head?: Node<T>;

  constructor() {
    this.length = 0
  }


  push(item: T) {
    const node = {value: item, prev: this.head} as Node<T>
    this.head = node;
    this.length++
  }


  pop() {
    if (!this.head || this.length <= 0) {
      return undefined; // Stack is empty
    }
    const head = this.head;
    this.head = this.head?.prev;
    this.length--
    return head?.value;
  }


  peek() {
    return this.head?.value
  }
}
