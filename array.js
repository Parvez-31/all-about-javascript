// const fruits = ["apple", "mango", "grapes", "litchi"];

// Array property
// console.log(fruits.length);

// Method: -> Push()
// Push method allows us to add new element at the last index of the array.

// let f1 = fruits.push("watermelon");
// console.log(f1);
// console.log(fruits);
// fruits.push("kiwi");
// console.log(fruits);

// Method: -> Pop()
// allows us to remove an element from the last index of the array.
// let f2 = fruits.pop();
// console.log(f2);
// console.log(fruits);

// Method: -> shift()
// shift method allows us to remove an element from the first index of the array.
// let f3 = fruits.shift();
// console.log(f3);
// console.log(fruits);

// Method: -> unshift()
// unshift method allows us to add method add the first index of an array.
// let f4 = fruits.unshift("orange");
// console.log(f4);
// console.log(fruits);

// Method: -> Slice()
// Sliced a portion of an array.
// let updatedArray = fruits.slice(-4, -2);
// console.log(updatedArray);
// console.log(fruits);

// Method: -> Splice()
// allows us to insert, delete new elements from any middle index of an array.
// let splicedArray = fruits.splice(3, 1, "coconut", "strawberry");
// console.log(splicedArray);
// console.log(fruits);

// Method: -> toString()
// toString method allows us to covert an array to a string.
// let color = ["red", "pink", "ornage", "yellow"];
// let c1 = color.toString();
// console.log(c1);
// console.log(color);

// Method: -> join()
// join method allows us to specify the seperator used to between the converted string values.
// let c2 = color.join("|");
// console.log(c2);
// console.log(color);

// Method: -> indexOf()
// indexof method returns the index of the first match.
// let newArray = ["burger", "pizza", "doughnut", "chips", "burger"];
// let n1 = newArray.indexOf("burger");
// let n2 = newArray.indexOf("nuggest");
// console.log(newArray);
// console.log(n1);
// console.log(n2);

// Method: -> lastIndexOf()
// lastIndexOf method returns the index of the last match.
// let n3 = newArray.lastIndexOf("burger");
// console.log(n3);

// Method: ->  Find all method
// Find method allows us to return the first match from an array that passed a given test condition.
// let numArray = [20, 24, 28, 26, 38, 48, 32, 78, 10];
// let output = numArray.find(findNum);

// findLast method allows us to return the last match element that has passed a certain test condition.
// let output1 = numArray.findLast(findNum);

// findLastIndex method returns the index of the last matched element that has passed a certain test condition.
// let output2 = numArray.findIndex(findNum);

// let output3 = numArray.findLastIndex(findNum);

// function findNum(value) {
//   return value > 25;
// }

// console.log(numArray);
// console.log(output);
// console.log(output1);
// console.log(output2);
// console.log(output3);

// Method: -> filter()
// filter method doesn't modify the original array, rather it's return a new array with the filtered values that has passed a certain test condition.

// let fillArray = [50, 60, 67, 88, 80, 90];
// let check = fillArray.filter((val) => {
//   return val >= 70;
// });

// console.log(fillArray);
// console.log(check);

// Method: -> forEach()
// The forEach() method is used to execute a provided function once for each elements in an array. It does not return a new array , it is mainly used for performing actions like logging, updating values, or calling functions.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num);
// });

// Method: -> map()
// The map() method creates a new array by appling a function to each elements of an existing array. It does not change the original array.

// let number = [1, 2, 3, 4, 5];
// let doubledNumbers = number.map((num) => {
//   return num * 2;
// });

// console.log(doubledNumbers);

// Method: -> reduce()
// The reduce method() reduces an array to a single value by applying a function to each element, while keeping track of an accumulator. It is commonly used for sums, totals, average and combining values.

// let num1 = [1, 2, 3, 4, 5];
// let sum = num1.reduce((total, num) => {
//   return total + num;
// }, 0);

// console.log(sum);

// Method: -> reduceRight()
// The reduceRight() just work like reduce. but it processes the array from right to left (last element to first), It reduces the array to a single value.

// let num2 = [1, 2, 3, 4, -5];

// let result = num2.reduceRight((total, num) => {
//   return total + num;
// });

// console.log(result);

// Method: -> keys()
// The keys method returns a new Array Iterator object that contains the keys (indexes) of each element in an array.

// let fruity = ["apple", "bannana", "mango"];
// let keysIterator = fruity.keys();
// for (let key of keysIterator) {
//   console.log(key);
// }

// Method: -> entries()
// The entries method returns a new array iterator object that contains key-value pairs (index and element) for each item in an array.

// let ftr = ["apple", "bannana", "mango", "litchi"];
// for (let [key, value] of ftr.entries()) {
//   console.log(`${key} : ${value}`);
// }

// Method: -> from()
// The Array.from() method creates a new array from an array-like or iterable object, such as a string, Set, Map or arguments.

// let text = "hello";
// let letters = Array.from(text);
// console.log(letters);

// Method: -> some()
// The some method checks if at least one element in an array satisfies a given collection and it returns true and false.

// let numero = [1, 3, , 5, 6];
// let hasEvenNumbers = numero.some((num) => {
//   return num % 2 === 0;
// });

// console.log(hasEvenNumbers);

// Method: -> every()
// The every method checks whether all elements in an array satisfy a given conditions.

// let n = [11, 13, 17, 25, 30];
// let allOdd = n.every((num) => {
//   return num % 2 !== 0;
// });

// console.log(allOdd);

// map
// const doubleNumber = (number) => {
//   let newArr = [];
//   for (let i = 0; i < number.length; i++) {
//     newArr.push(number[i] * 2);
//   }
//   return newArr;
// };

// const arr = [2, 3, 4, 5, 6, 7, 8];
// console.log(doubleNumber(arr));

// const result = numbers.map((item) => item * 2);
// console.log(result);

// const numbers = [2, 3, 5, 6, 7, 8];
// const addFive = numbers.map((item) => item + 5);
// const halves = addFive.map((item) => item / 2);
// console.log(addFive);
// console.log(halves);

// const friends = ["Tom", "jon", "oliver", "michel"];
// const nameLength = friends.map((friend) => friend.length);
// const firstLetter = friends.map((friend) => friend[0]);
// console.log(nameLength);
// console.log(firstLetter);
