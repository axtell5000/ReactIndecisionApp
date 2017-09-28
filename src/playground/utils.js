
console.log('utils.js is running');

const square = (x) => x * x;

export const add = (a, b) => a + b; // can also export lie this

const subtract = (a, b) => a - b;

export default subtract; // can only have one default in file can only be exported like this when using variables or
// 'subtract as default' below. When using classes pre-pending 'export default' is fine

export { square }; // named exports, not an object, can do multiple names at once
