console.log(false || 'Krasko');
console.log(false || 1);
console.log(false || 1 || 2);

// let userColor = 'blue';
let userColor = null;
let defaultColor = 'red';
let currentColor = userColor || defaultColor;

console.log(currentColor);