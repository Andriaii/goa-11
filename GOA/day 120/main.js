// main.js

// Import the add and subtract functions from mathUtils.js
const { add, subtract } = require('./mathutils');

// Perform calculations and log the results
const sum = add(5, 3);
const difference = subtract(10, 4);

console.log(`The sum of 5 and 3 is: ${sum}`);
console.log(`The difference between 10 and 4 is: ${difference}`);
