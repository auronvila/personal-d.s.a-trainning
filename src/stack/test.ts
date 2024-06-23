import {Stack} from "./index";

const stack = new Stack<{ val: number, va: number }>()

stack.push({val: 1, va: 2})
stack.push({val: 3, va: 4})
stack.push({val: 5, va: 6})

console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
