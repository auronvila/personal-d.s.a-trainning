type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  private length: number = 0;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const head = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = undefined;
    }
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  size(): number {
    return this.length;
  }
}

