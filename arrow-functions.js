/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

// const addTwoNumbers = (a, b) => { // When defining arrow functions, Instead of function at the beggining we use const, than equal = parenthases
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); // also a valid way to write the function
const addTwoNumbers2 = (a, b) => a + b; // If your function has a simple logic, Its fine to use one line code function, However if it contains more logic you will need to use the above like arrow function

let sum2 = addTwoNumbers2(2, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message); // function saySomething has 1 single parameter, "message", 
saySomething('Hello There!!');

const sayHello = () => console.log('Hello') // If you have a function that has no parameters at all, you must use empty set of parehesese to let JS know you are declaring a function
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiple string!
    </p>
    `
)
console.log(returnMultipleLines())