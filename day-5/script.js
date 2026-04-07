// QUESTION: => 1
// function fn(originalStr) {
//   let reverseStr = originalStr.split("").reverse().join("");

//   if (originalStr === reverseStr) {
//     return true;
//   }
//   return false;
// }

// console.log(fn("level"));

// QUESTION: => 2
// const factorial = (n) => {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };

// console.log(factorial(5));

// QUESTION: => 3

// const arraySort = function (arr) {
//   console.log(arr.sort((a, b) => a - b));
// };
// arraySort([1, 4, 56, 55, 5, 6, 3]);

// QUESTION: => 4
// function greet() {
//   console.log("hello");
// }

// function higherOrderFn(greet) {
//   greet();
//   greet();
//   greet();
// }
// higherOrderFn(greet);

// QUESTION: => 5
// function createAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const hello10 = createAdder(10);
// console.log(hello10);
// console.log(hello10(5));

// const hello11 = createAdder(9);
// console.log(hello11(4));

// QUESTION: => 6
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };
// const multi = (a, b) => {
//   return a * b;
// };

// const clacu = [add, sub, multi];
// clacu.forEach((fn) => {
//   console.log(fn(4, 5));
// });

// QUESTION: => 7
// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multipl(x, y) {
//   return x * y;
// }

// console.log(calculate(10, 8, multipl));
// console.log(calculate(10, 5, add));
