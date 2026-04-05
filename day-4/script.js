// QUESTION: 1
// let firstNum = 12;
// let secondNum = 34;
// let lastNum = 3;
// if (firstNum >= secondNum && firstNum >= lastNum) {
//   console.log(firstNum);
// } else if (secondNum >= firstNum && secondNum >= lastNum) {
//   console.log(secondNum);
// } else {
//   console.log(lastNum);
// }

// QUESTION: 2
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert("to small");
//     break;
//   case 4:
//     alert("exactly");
//     break;
//   case 5:
//     alert("to big");
//     break;
//   default:
//     alert("i don't know such values");
// }

// let num1 = 10;
// let num2 = 20;
// let operator = "*";

// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     if (num2 === 0) {
//       console.log("cannot divide by 0");
//     } else {
//       console.log(num1 / num2);
//     }
//     break;
//   default:
//     console.log("Invalid operator");
// }

// QUESTION: 3
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// QUESTION: 4
// let num = 5;
// let count = 1;
// let result;
// while (count <= 10) {
//   result = num * count;
//   console.log(`${num} * ${count} = ${result} `);
//   count++;
// }

// QUESTION: 5
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// let userInput;
// do {
//   userInput = prompt("type something: type exit to stop");
//   console.log(userInput);
// } while (userInput !== "exit");

// QUESTION: 6
// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// for (let odd of arr) {
//   if (odd % 2 === 1) {
//     console.log(odd);
//   }
// }

// QUESTION: 7
// const user = {
//   name: "parvez",
//   town: "basirhat",
// };

// for (let obj in user) {
//   console.log(`${obj} => ${user[obj]}`);
// }

// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key} => ${value}`);
// }

// QUESTION: 8
// const strNum = "123";
// const arrNum = strNum.split("");
// // console.log(arrNum);
// let sum = 0;
// for (let i = 0; i < Number(arrNum.length); i++) {
//   sum = sum + Number(arrNum[i]);
//   //   console.log(typeof i);
// }

// console.log(sum);

// ------------------------
// const str = "123";
// let sum = 0;
// for (let dig of str) {
//   //   console.log(typeof dig);
//   sum = sum + Number(dig);
// }

// console.log(sum);
// ---------------------------

// let num = 123;
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;
//   sum += digit;
//   num = Math.floor(num / 10);
// }

// console.log(sum);
