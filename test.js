// let numbers = [1, 3, 5, 7, 9];
// let a = numbers.forEach((num) => {
//   // console.log(num + 1);
// });

// hoisting
// let hello = function () {
//   console.log("hello world");
// };
// hello();

// push
// const arr = [1, 7];
// const newArr = [8, 9, 10];
// for (let i = 0; i < newArr.length; i++) {
//   arr[arr.length] = newArr[i];
// }

// console.log(arr);

// pop
// const arr = [2, 4, 5, 6, 7];
// const newArr = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

// shift
// const arr = [1, 7, 5, 7, 8, 3];
// const newArr = [];
// for (let i = 1; i < arr.length; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

// unshift
// const arr = [5, 6, 8, 9];
// const newNum = 89;

// let newArr = [];
// newArr[0] = newNum;

// for (let i = 0; i < arr.length; i++) {
//   newArr[newArr.length] = arr[i];
// }
// console.log(newArr);

// slice
// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let start = 0;
// let end = 5;
// let newArr = [];

// for (let i = start; i < end; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

//reduce
// const arr = [1, 2, 3, 4, 5, 6];
// let acc = 0;
// function customReduce(arr) {
//   for (let i = 2; i < arr.length; i++) {
//     acc = acc + arr[i];
//   }
//   return acc;
// }

// console.log(customReduce(arr));
// filter

// const arr = [2, 3, 4, 5, 6, 7, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 4) {
//     newArr[newArr.length] = arr[i];
//   }
// }

// console.log(newArr);

// const hello = async () => {
//   try {
//     let res = await fetch(`https://dummyjson.com/products`);
//     let response = await res.json();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// hello()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const hello1 = () => {
//   var x = 2;
//   console.log(x, y);
// };
// const hello2 = () => {
//   var y = 4;
//   console.log(x, y);
// };

// hello1();
// hello2();

// const data = {
//   name: "rahul",
//   age: 23,
//   skill: ["js", "python"],
//   address: {
//     city: "kolkata",
//     pin: 3043804,
//   },
// };

// console.log(prettyJson);

// function filterKeys(key, value) {
//   if (key === "age") {
//     return undefined;
//   } else {
//     return value;
//   }
// }

// const prettyJson = JSON.stringify(data, filterKeys, 2);
// console.log(prettyJson);

// const addFn = (x) => {
//   return (y) => {
//     return x + y;
//   };
// };

// const result = addFn(10);
// // console.log(result);
// console.log(result(3));

// let a = { name: "parvez" };
// let b = { name: "mota" };

// function n(age, address) {
//   return `hello my name is ${this.name} , age is ${age} and home ${address}`;
// }

// console.log(n.call(a, 34, "basirhat"));
// let a = { name: "parvez" };
// let b = { name: "mota" };

// function n(age, address) {
//   return `hello my name is ${this.name} , age is ${age} and home ${address}`;
// }

// console.log(n.apply(a, [34, "basirhat"]));

// function n(age, address) {
//   return `hello my name is ${this.name} , age is ${age} and home ${address}`;
// }

// let m = n.bind(a, 34, "kolkata");
// console.log(m());

// let hello = {
//   name: "parvez",
//   hello1: function () {
//     console.log(`hello ${this.name}`);
//   },
// };

// let hl = { name: "nill" };

// let x = hello.hello1.bind(hl);
// x();
