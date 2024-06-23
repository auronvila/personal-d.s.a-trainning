import {Queue} from './index';

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.size());    // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: undefined (queue is now empty)
