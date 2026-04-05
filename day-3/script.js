//QUESTION: 1
// function checkOddEven(num) {
//   if (Math.floor(num / 2) * 2 === num) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// checkOddEven(9);

//QUESTION: 2
// function getGrader(score) {
//   let grader =
//     score >= 90
//       ? "A"
//       : score >= 80
//         ? "B"
//         : score >= 70
//           ? "C"
//           : score >= 60
//             ? "D"
//             : "F";
//   console.log("Grade:", grader);
// }

// getGrader(85);

//QUESTION: 3
// let x = 3;
// let y = "3";

// console.log(x == y);
// console.log(x === y);

// let x = 0;
// let y = false;

// console.log(x == y);
// console.log(x === y);

//QUESTION: 4
// let a = 5;
// let b = 10;
// console.log(a, b);

// a = a + b; // 15
// b = a - b; // 5
// a = a - b; // 10

// console.log(a, b);

//QUESTION: 5
// const leapYear = (year) => {
//   if ((year % 4 === 0 && year !== 100) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is a not a leap year`);
//   }
// };

// leapYear(2023);

//QUESTION: 6
// let a = null;
// let b = undefined;
// let result = a ?? b;
// console.log(result);

// let a = null;
// let b = undefined;
// let c = "hello";
// let result = a ?? b ?? c;
// console.log(result);

//QUESTION: 7

//QUESTION: 8
// let a = "hello";
// let b = NaN;
// let c = 12;
// let result = a && b && c;
// console.log(result);

// let length = 10;
// let breadth = 0;
// let result = length > 0 && breadth > 0 && length * breadth;
// console.log(result || "Invalid dimantions");
