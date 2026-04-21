// const user = {
//   fullName: function (city, country) {
//     return `My first name is ${this.firstName} and last name is ${this.lastName} and my city name ${city} and country is ${country}`;
//   },
// };

// const person1 = {
//   firstName: "Gourav",
//   lastName: "Halder",
// };

// const person2 = {
//   firstName: "Parvez",
//   lastName: "Tarafder",
// };

// console.log(user.fullName.apply(person2, ["kolkata", "India"]));

// const wrd = "hello";
// const word = wrd.split(" ");
// console.log(word);

// const letter = "hello";
// const ltr = letter.split("");
// console.log(ltr);

// const indx = "parvez is a good";
// const ind = indx.split(" ", 3);
// console.log(ind);

// const letter = "hello my name is parvez"
// const lette = letter[2].split();
// console.log(lette);

// const date = "2022-02,12"
// const da = date.split(/[-,]/)
// console.log(da);

// let num = "12.5abcd"
// let x = Number(num)
// console.log(x);
//
// let arr = [1, 2, 3, 4, 5, 6, 6, 3, 2];
// let x = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!x.includes(arr[i])) {
//     x.push(arr[i]);
//   }
// }
// console.log(x);
// 1

// let fr = ["apple", "mango", "bannana"]
// let x = ["bannana"]
// let y = []

// for(let i =0; i< fr.length; i++) {
// if(!x.includes(fr[i])) {
//   y.push(fr[i])
// }

// hello world
// hello world

//TODO:
//FIXME:
//NOTE:

// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 2, 1];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// const fruits = ["mango", "apple", "banana"];
// const oneFruit = ["banana"];
// let towFruits = [];
//
// for (let i = 0; i < fruits.length; i++) {
//   if (!oneFruit.includes(fruits[i])) {
//     towFruits.push(fruits[i]);
//   }
// }
// console.log(towFruits);
//
// const sellingPrice = (actualPrise, twoHundredFifty = 250) => {
//   return actualPrise - twoHundredFifty;
// };
//
// console.log(sellingPrice(1000));
//
// const oneHundredYear = (myBirthYear) => {
//   return myBirthYear + 100;
// };
//
// console.log(oneHundredYear(2007));
//
// const mobilePhUse = (everyDayHours, days) => {
//   return days * everyDayHours;
// };
//
// console.log(mobilePhUse(3, 30));
//
// const tenTimes = (number) => {
//   const result = number * 10;
//   return result;
// };
//
// const output = tenTimes(10);
// console.log(output);

// const add = (price1, price2) => {
//   const total = price1 + price2;
//   return total;
// };
//
// const output = add(23, 67);
// console.log(output);
//
// const potato = 56;
// const onion = 45;
// const shirt = 500;
// const pant = 1200;
//
// const add = (price1, price2)=> {
//   return price1 + price2;
// };
//
// const bill1 = add(potato, onion);
// // const bill1 = add(potato , onion)
// const bill2 = add(shirt, pant);
// const total = add(bill1, bill2);
// console.log(total);
//
// const doMath = (num1, num2) => {
//   const sum = num1 + num2;
//   const diff = num1 - num2;
//   const multiply = sum * diff;
//   const result = multiply / 2;
//   return result;
// };
//
// const result = doMath(12, 34);
// console.log(result);

// const isNum = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// const even = isNum(8);
// console.log(even);
//
// const isOdd = (num) => {
//   if (num % 2 === 1) {
//     return true;
//   }
//   return false;
// };
//
// const num1 = isOdd(10);
// console.log(num1);
//
// const num2 = isOdd(7);
// // console.log(num2);
//
// const aboveTen = (num) => {
//   if (num > 10) {
//     return true;
//   }
//   return false;
// };
//
// const ten = aboveTen(11);
// console.log(ten);
//
// const thirteen = (num) => {
//   if (num % 13 === 0) {
//     return true;
//   }
//   return false;
// };
//
// const result = thirteen(50);
// console.log(result);
//
// const rice = 40;
// const curry = 80;
// const drinks = 100;
//
// const totalBill = (item1, item2, item3) => {
//   return item1 + item2 + item3;
// };
//
// const total = totalBill(rice, curry, drinks);
// console.log(total);
//
// const voter = (age) => {
//   if (age > 18) {
//     return "Eligible for voting";
//   }
//   return "Not Eligible";
// };
//
// const result = voter(19);
// // console.log(result);
//
// const sentence = "I am a good boy.";
//
// const stringLength = (sentence) => {
//   return sentence.length;
// };
//
// const result = stringLength(sentence);
// console.log(result);
//
// const average = (num1, num2, num3) => {
//   return (num1 + num2 + num3) / 3;
// };
//
// const result = average(23, 23, 23);
// // console.log(result);
//
// const negNumber = (num) => {
//   if (num < 0) {
//     return num * 1;
//   }
//   return num;
// };
// const result = negNumber(45);
// console.log(result);

// const user1 = {
//   firstName: "Parvez",
//   lastName: "Tarafder",
// };
//
// const user2 = {
//   firstName: "Gourav",
//   lastName: "Halder",
// };
//
// const printFullName = function (city, country) {
//   return `My firstName is ${this.firstName} and lastName is ${this.lastName} and my city is ${city} and country ${country}`;
// };
//
// console.log(printFullName.call(user1, "kolkata", "india"));
// console.log(printFullName.call(user2, "Mumbai", "india"));
// console.log(printFullName.apply(user2, ["Mumbai", "india"]));

// const result = printFullName.bind(user1, "kolkata", "india");
// console.log(result);
// console.log(result());

//TODO:
//string print - ✔️
//string and string length return - ✔️
//check this length is even or odd(true, false) - ✔️
//
// const cityName = (city) => {
//   console.log(city);
// };
//
// cityName("kolkata");
//
// const evenSizeString = (city) => {
//   console.log(city, city.length);
// };
//
// evenSizeString("kolkata");
//
// const evenOdd = (str) => {
//   const size = str.length;
//
//   if (size % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// };
//
// console.log(evenOdd("kolkata"));
//
// const doubleTriple = (num, double) => {
//   if (double === true) {
//     const result = num * 2;
//     return result;
//   } else {
//     const result = num * 3;
//     return result;
//   }
// };
//
// console.log(doubleTriple(2, true));
// console.log(doubleTriple(3, false));
//
// const numberOfElement = (arr) => {
//   let len = arr.length;
//   if (len % 2 === 0) {
//     return even;
//   }
//   return odd;
// };
//
// const len = numberOfElement([23, 4, 52, 3, 5, 78, 98, 23]);
// console.log(len);
//
// const firstLetter = (str) => {
//   let first = str[0];
//   return first;
// };
//
// console.log(firstLetter("Raju"));
//
// const checkNum = (num) => {
//   if (num > 10) {
//     return num / 10;
//   } else {
//     return num * 10;
//   }
// };
//
// console.log(checkNum(2));
//
// const arr = (arrNum) => {
//   // return arrNum;
//   let sum = 0;
//   for (let i = 0; i < arrNum.length; i++) {
//     sum = sum + arrNum[i];
//   }
//   return sum;
// };
//
// console.log(arr([20, 30]));

// const positiveNegative = (n) => {
//   if (n > 0) {
//     return n * 2;
//   } else {
//     return n * 3;
//   }
// };
//
// console.log(positiveNegative(20));
// console.log(positiveNegative(-20));

// const nameLength = (firstName, secondName) => {
//   if (firstName.length > secondName.length) {
//     return true;
//   }
//   return false;
// };
//
// console.log(nameLength("ParvezTarafder", "samimMamu"));
//
// const into = (firstNum, secondNum) => {
//   let result = firstNum * secondNum;
//   // console.log(result);
//   if (result > 100) {
//     return result / 2;
//   }
//   return result;
// };
//
// console.log(into(100, 20));
//
// const sumOfNumbers = (number) => {
//   let sum = 0;
//
//   for (let num of number) {
//     if (num % 2 === 0) {
//       sum = num + sum;
//     }
//   }
//   return sum;
// };
// const result = sumOfNumbers([12, 3, 4, 5, 6, 7]);
// console.log(result);
//
// const sumOfNumbers = (number) => {
//   // console.log(number);
//   let sum = 0;
//   for (let num of number) {
//     if (num % 2 !== 0) {
//       sum = sum + num;
//     }
//   }
//   return sum;
// };
//
// console.log(sumOfNumbers([5, 15, 8, 7]));
//
// const smallNumber = (num) => {
//   if (num[0] > num[1]) {
//     return num[1];
//   }
//   return num[0];
// };
//
// console.log(smallNumber([10, 20, 70]));
//
// const checkMyAge = (age) => {
//   if (age < 18) {
//     return 18;
//   } else if (age > 45) {
//     return 45;
//   } else {
//     return age;
//   }
// };
//
// console.log(checkMyAge(50));
//
// const numberOfElement = (num) => {
//   let sum = 0;
//
//   for (let x of num) {
//     if (x % 4 === 0) {
//       sum = sum + x;
//     }
//   }
//   return sum;
// };
//
// console.log(numberOfElement([2, 4, 5, 7, 8, 32, 45]));
//
// const clac = (num) => {
//   if (num < 20) {
//     return num * 2;
//   }
//   return num / 20;
// };
//
// console.log(clac(2));
//
// const arr = (num) => {
//   // console.log(num);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//       sum = num[i] + sum;
//     }
//   }
//   return sum;
// };
//
// console.log(arr([2, -4, 6, 7, -9, 2]));
//
// const arr = (num) => {
//   let into = 1;
//
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 === 0) {
//       into = num[i] * into;
//     }
//   }
//   return into;
// };
//
// console.log(arr([6, 3, 5, 7, 9]));

//TODO:object
//
// const teacher = {
//   name: "parvez",
//   subject: "bengali",
//   age: 27,
//   town: "basirhat",
// };
//
// const tree = {
//   nameOfTheTree: "mango",
//   height: "1.74cm",
//   age: "2 years",
//   fruitName: "mango",
//   "fav fruits": ["mango", "apple", "guava"],
// };
//
// console.log(tree["fav fruits"]);
// console.log(tree["age"]);
//
// const cricketer = {
//   position: 4,
//   specialty: "batter",
//   age: 24,
//   runs: 8000,
// };
//
// console.log(cricketer.position);
// console.log(cricketer["runs"]);
//
// cricketer.position = 1;
// cricketer["runs"] = 9000;
//
// console.log(cricketer.position);
// console.log(cricketer["runs"]);
//
// const college = {
//   name: "parvez",
//   class: [11, 12],
//   events: ["seience fair", "bijoy dibos", "21 feb"],
//   unique: {
//     color: "black",
//     result: {
//       gpa: 5,
//       merit: "top",
//     },
//   },
// };
//
// console.log(college.unique.color);
// console.log(college.unique.result.gpa);
// console.log(college.events[2]);
//
//

// const a = 10;
// let b = 40;

// function xyz(firstNumber) {
//   console.log(firstNumber);
// }
// xyz(b);
//
//
// function gourav() {
//   {
//     var a = 10;
//     console.log(a);
//   }
//
//   console.log(a);
// }
//
// console.log(a);
// gourav();
//
// let a = 23;
//
// function abc() {
//   {
//     let a = 90;
//     console.log(a);
//   }
//   let a = 12;
//
//   console.log(a);
// }
// console.log(a);
// abc();
//
// let arr = [2, 3, 4, 5, 6];
// arr.splice(1, 1, true);
//
// console.log(arr);

// arr.push(23);
// arr.pop();
// arr.unshift(20, 88);
// arr.shift();

// function product(...inputs) {
//   console.log(inputs);
//
//   let i = 2; // 10
//   for (let x of inputs) {
//     i = i * x;
//     console.log(i);
//   }
//   // console.log(i);
// }
//
// product(5, 6);
//
// const player = {
//   name: "parvez",
//   age: 27,
//   sports: "football",
//   team: "Fcb",
// };
//
// console.log(player.team);
//
// const laptop = {
//   brand: "HP",
//   prise: 45000,
//   hardDisc: "1TB",
//   ram: "8gb",
// };
//
// console.log(laptop.brand);
//
// const favPlace = {
//   name: "kolkata",
//   distance: "400km",
//   popularity: "high",
// };
//
// console.log(favPlace.popularity);
//
// const movie = {
//   title: "Inception",
//   director: "Nolan",
//   rating: 9,
// };
//
// console.log(movie["rating"]);
//
// const college = {
//   name: "Basirhat college",
//   established: 1996,
//   groups: ["arts", "science", "commerce"],
// };
//
// console.log(college.groups[1]);
//
// const family = {
//   father: {
//     name: "Habibur Rahaman",
//     age: 60,
//     profession: "Business man",
//   },
//   mother: {
//     name: "Sabina Yasmin",
//     age: 45,
//     profession: "House wife",
//   },
// };
//
// const faterAge = family.father.age;
// const motherAge = family.mother.age;
//
// const ageSum = function (age1, age2) {
//   return age1 + age2;
// };
//
// console.log(ageSum(faterAge, motherAge));

// const computer = {
//   brand: "Lenovo",
//   price: 35000,
//   processor: "intel",
//   ssd: "512gb",
// };
//
// const keys = Object.keys(computer);
// const values = Object.values(computer);
// console.log(keys);
// console.log(values);

// const profile = {
//   name: "Rahim",
//   age: 28,
//   city: "dakha",
// };
//
// const profileKeys = Object.keys(profile);
// const hasName = profileKeys.includes("name");
// console.log(hasName);
//
// if ("name" in profile) {
//   console.log("name exists");
// } else {
//   console.log("No name, No spam");
// }
//
// if (profile.hasOwnProperty("email")) {
//   console.log("email nia boroloki dekai");
// } else {
//   console.log("email chara jibon");
// }
//
// if (profile.city === "dakha") {
//   console.log("jam ar sohor dakha");
// } else {
//   console.log("aram sob gram a");
//
// }

// const person = {
//   name: "alice",
//   age: 25,
//   country: "India",
// };

// const entries = Object.entries(person);
// console.log(entries);

// const profile = {
//   name: "Rahim",
//   age: 29,
//   city: "dakha",
// };
//
// for (const key in profile) {
//   const values = profile[key];
//   console.log(key, values);
// }
//
// const laptop = {
//   brand: "Dell",
//   model: "Inspiron",
//   price: 45000,
// };
//
// for (let laptopDetails in laptop) {
//   console.log(laptopDetails + ":" + laptop[laptopDetails]);
// }
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let a = [];
// let b = [];

// for (let i = 0; i < arr.length; i++) {
// console.log(i);
// console.log("-----------------------");
// console.log(arr[i]);

//   if (arr[i] !== 3) {
//     a.push(arr[i]);
//   }
// }

// console.log(a);
// console.log(b);

// for (let phoneDetails of phone) {
//   console.log(phoneDetails);
// }

//  const namePlace = [
//   {
//     name: "gourav",
//     place: "kolkata",
//     id: 1,
//   },
//   {
//     name: "parvez",
//     place: "basirhat",
//     id: 2,
//   },
//   {
//     name: "ram",
//     place: "mumbai",
//     id: 3,
//   },
//   {
//     name: "visal",
//     place: "kolkata",
//     id: 4,
//   },
// ];
// let x = [];
// for (let a in namePlace) {
//   console.log(a);
//   if (namePlace[a].id !== 2) {
//     x.push(namePlace[a]);
//   }
// }
// console.log(x);

// Filter array method

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = arr.filter((item) => {
//   return item > 4;
// });
// console.log(newArr);

// // map array method

// const newMap = arr.map((item) => {
//   return item * 2;
// });

// console.log(newMap);

// const items = [
//   {
//     name: "book",
//     price: 15,
//   },
//   {
//     name: "pen",
//     price: 4,
//   },
//   {
//     name: "glass",
//     price: 10,
//   },
// ];

// const itemPlus = items.reduce((acc, item) => {
//   const { price } = item;
//   return acc + price;
//   // return (acc = acc + item.price);
// }, 0);

// console.log(itemPlus);

// let a = "I am a good boy"
// let b = a.replace("good", "boy")
// console.log(b);

// let a = " parvez hossien Tarafder ";
// let b = a.trim();
// console.log(b);

// array dest...
//  const a = [1, 2, 3, 4, 5, 6, 7, 8];
// let [b, c, d, e] = a;
// console.log(b, c, d, e);

// object dest....
// const a = {
//   name: "parvez",
//   place: "kolkata",
// };

// let { name, place } = a;
// console.log(name, place);

// const hello = (...item) => {
//   return item;
// };

// console.log(hello(1, 2, 3, 4, 5, 6));

// const phone = {
//   brand: "Samsung",
//   model: "Galaxy S21",
//   price: 85000,
// };

// const key = Object.keys(phone);
// // console.log(key);
// for (let keyValue of key) {
//   console.log(keyValue, phone[keyValue]);
// }

// const bike = {
//   brand: "hero",
//   price: 120000,
//   model: "splendor",
// };

// const value = Object.values(bike);
// console.log(value);

// const books = {
//   book1: "harry poter",
//   book2: "the hobbit",
//   book3: "game of throns",
// };

// for (let booksName in books) {
//   //   console.log(booksName);
//   console.log(books[booksName]);
// }

// const numbers = { a: 20, b: 30, c: 80 };

// let sum = 0;
// for (let number in numbers) {
//   sum = sum + numbers[number];
// }
// console.log(sum);

// const player = {
//   name: "Messi",
//   country: "Argentina",
//   goals: 91,
// };

// const allValues = Object.values(player);
// console.log(allValues);

// const building = {
//   floors: 10,
//   address: {
//     street: "Main road",
//     city: "Kolkata",
//   },
//   type: "Commercial",
// };

// for (let build in building) {
//   console.log(build + ":" + JSON.stringify(building[build]));
// }

// const x = Object.entries(building);
// console.log(x);

// x.forEach(([key, value]) => {
//   console.log(key, value);
// });

// deleting object property

// const person = {
//   name: "alise",
//   age: 25,
//   country: "India",
// };

// delete person.age;

// console.log(person);

// const adminUser = {
//   userName: "admin",
//   email: "admin@example.com",
//   roel: "superadmin",
// };

// Object.freeze(adminUser);

// // attempt to modify the object

// adminUser.roel = "Parvez";
// adminUser.email = 121434434;
// delete adminUser.userName;

// console.log(adminUser);

// // seal
// const user = {
//   userName: "parvez",
//   email: "tarafderparvez@gmail.com",
//   password: 1213232,
// };

// Object.seal(user);

// attempt to modify the object
// user.password = "newpassword";
// user.email = "jsldfsjdflsdjf";
// user.age = 30;
// delete user.userName;

// console.log(user);

// Javascript object protection practice

// const headphone = {
//   brand: "Sony",
//   price: 3000,
//   color: "red",
// };

// Object.freeze(headphone);

// headphone.soundquality = "good";

// console.log(headphone);

// const book = {
//   title: "Harry potter",
//   author: "JK Rowling",
//   pages: 500,
// };

// Object.seal(book);

// book.author = "parvez";

// console.log(book);

// const gadget = {
//   name: "iphone",
//   price: 120000,
//   color: "black",
// };

// delete gadget.color;

// console.log(gadget);

// const animal = {
//   name: "tiger",
//   location: "Sundarbon",
// };

// Object.freeze(animal);
// animal.location = "basirhat";

// console.log(animal);

// const food = {
//   name: "pizza",
//   price: 500,
//   size: "large",
// };

// Object.seal(food);

// food.price = 1000;

// console.log(food);

// Loop

// const numbers = [12, 3, 45, 678, 90];
// for (let number of numbers) {
//   console.log(number);
// }

// const subjects = ["bengali", "english", "math", "geography", "history"];

// for (let subject of subjects) {
//   console.log(subject);
// }

// const foods = ["momo", "rice", "coco", "eggroll", "maggi"];
// for (let food of foods) {
//   console.log(food);
// }

// const dob = [1999, 1988, 1977, 2006, 2007];
// for (let printDob of dob) {
//   console.log(printDob);
// }

// while loop

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i < 5) {
//   console.log("Basirhat high school");
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   console.log("I do programming minimum 3hours every single day.");
//   i++;
// }

// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// let i = 50;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum = i * 3;
//   console.log(sum);
//   i++;
// }

// let i = 111;
// while (i > 110) {
//   console.log(i / 2);
//   i--;
// }

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   //   console.log(i);
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

// let i = 50;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// let sum = 0;
// while (i <= 15) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

// let i = 21;
// let sum = 0;

// while (i <= 50) {
//   sum = sum + i;
//   console.log(sum);
//   i++;
// }

// let i = 20;
// let sum = 0;

// while (i <= 40) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

// for loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 50; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// while (i <= 10) {
//   //   console.log(i);
//   sum = sum + i;
//   console.log(sum);
//   i++;
// }

// const arr = [12, 34, 36, 6, 78, 99];
// console.log(arr[3]);
// for (let x of arr) {
//   console.log(x);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const person = {
//   name: "gourav",
//   age: 22,
//   village: "kolkata",
// };

// console.log(person.name);
// console.log(person["name"]);
// for (let x in person) {
//   console.log(x, person[x]);
// }

// const key = Object.keys(person);
// const value = Object.values(person);
// console.log(value);

// for (let x of key) {
//   console.log(x, person[x]);
// }

// const a = () => {
//   console.log("hello");
//   return;
// };

// const b = (item) => {
//   console.log("function b");
//   item();
// };

// b(a);

// const str = "hello i am parvez";
// const a = str.split(" ");
// console.log(a[2]);

// for (let i = 150; i <= 170; i++) {
//   console.log(i);
// }

// const arr = [21, 5, 6, 7, 8, 9, 65, 44, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let sum = 0;
// for (let i = 25; i <= 75; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 20; i = i + 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 30; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 20; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 40; i <= 80; i++) {
//   if (i % 5 === 0 && i % 7 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 40; i++) {
//   if (i % 13 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// for (let i = 1; i <= 50; i = i + 4) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 6 === 0 || i % 9 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     sum = sum + i;
//   }
// }

// console.log(sum);

// for (let i = 0; i <= 15; i++) {
//   console.log(i);

//   if (i >= 7) {
//     break;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 4 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 30; i++) {
//   console.log(i);

//   if (i === 15) {
//     break;
//   }
// }

// for (let i = 1; i <= 40; i++) {
//   if (i % 7 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 15; i++) {
//   if (i === 9) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 25; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 91; i <= 120; i++) {
//   if (i % 10 === 0) {
//     break;
//   }
//   console.log(i);
// }

// let s = ["parvez", "usa", "xyz", "pxy"];

// console.log(result);

// const fn = (s) => {
//   return s.filter((word) => {
//     return word.includes("p");
//   });
// };
// console.log(fn(s));
// let arr = [];
// for (let i = 0; i < s.length; i++) {
//   if (s[i].includes("p")) {
//     arr.push(s[i]);
//   }
// }
// console.log(arr);

// let st = "i am a good boy";

// let str = [];
// let word = "";
// for (let i = 0; i < st.length; i++) {
//   // console.log(st[i]);
//   if (st[i] !== " ") {
//     word = word + st[i];
//   } else {
//     str.push(word);
//     word = "";
//   }
// }

// console.log(str);

// const data = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25,
//     hobbies: ["reading", "cycling", "painting"],
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA",
//       geo: { lat: 40.7128, lng: -74.006 },
//     },
//     friends: [
//       { id: 11, name: "Bob", age: 26 },
//       { id: 12, name: "Charlie", age: 24 },
//     ],
//   },
//   {
//     id: 2,
//     name: "David",
//     age: 30,
//     hobbies: ["gaming", "hiking"],
//     address: {
//       street: "456 Elm St",
//       city: "Los Angeles",
//       country: "USA",
//       geo: { lat: 34.0522, lng: -118.2437 },
//     },
//     friends: [
//       { id: 21, name: "Eve", age: 29 },
//       { id: 22, name: "Frank", age: 31 },
//     ],
//   },
// ];

// for (let value of data) {
//   // console.log(value);
//   for (let v of Object.values(value)) {
//     console.log(v);
//   }
// }

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);

// }

// TOPIC: => Javascript problem solving part -1

// const inchToFeet = (inch) => {
//   const feet = inch / 12;
//   return feet;
// };
// console.log(inchToFeet(54));

// const inchToFeet = (inch) => {
//   const feetFraction = inch / 12;
//   const feetNumber = parseInt(feetFraction);

//   const inchRemaining = inch % 12;
//   const result = `${feetNumber} ft ${inchRemaining} inch `;
//   return result;
// };

// console.log(inchToFeet(78));

// function mileToKilometer(mile) {
//   return mile * 1.60934;
// }
// console.log(mileToKilometer(5));

// const mileToGoj = (mile) => {
//   return mile * 1760;
// };
// console.log(mileToGoj(13));

// const kilowatToKilokalori = (hours) => {
//   return hours * 860;
// };
// console.log(kilowatToKilokalori(2));

// const hoursToSeconds = (hours) => {
//   const oneHoursToSeconds = 60 * 60;
//   return hours * oneHoursToSeconds;
// };
// console.log(hoursToSeconds(2));

// const centemeterToMeter = (centemeter) => {
//   return centemeter / 100;
// };
// console.log(centemeterToMeter(500));

// const inchToCentemeter = (inch) => {
//   return inch * 2.54;
// };
// console.log(inchToCentemeter(6));

// const poundToKilogram = (pound) => {
//   return pound * 0.453;
// };
// console.log(poundToKilogram(6));

// const gojToMeter = (goj) => {
//   return goj * 0.91;
// };
// console.log(gojToMeter(4));

// const isLeapYear = (year) => {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isLeapYear(2100));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2099));
// console.log(isLeapYear(2091));

// const incomeTax = (incomeAmount) => {
//   if (incomeAmount <= 50000) {
//     return 10;
//   } else if (incomeAmount > 50001 && incomeAmount < 1000000) {
//     return 20;
//   } else if (incomeAmount > 100001 && incomeAmount < 200000) {
//     return 30;
//   } else if (incomeAmount > 200000) {
//     return 40;
//   }
// };

// console.log(incomeTax(70000));

// const packageDelevary = (kg) => {
//   if (kg < 10) {
//     return 100;
//   } else if (kg < 20) {
//     return 300;
//   } else if (kg < 50) {
//     return 1000;
//   } else {
//     return 2000;
//   }
// };
// console.log(packageDelevary(90));

// const marksInput = (mark) => {
//   if (mark >= 80) {
//     return "A";
//   } else if (mark > 70 && mark < 79) {
//     return "B";
//   } else if (mark > 60 && mark < 69) {
//     return "C";
//   } else if (mark >= 50 && mark < 59) {
//     return "D";
//   } else if (mark < 50) {
//     return "F";
//   }
// };
// console.log(marksInput(80));
// const leapYear = (year) => {
//   let count = 0;
//   for (let i = 0; i < year.length; i++) {
//     // console.log(year[i]);
//     if (year[i] % 400 === 0 || (year[i] % 4 === 0 && year[i] % 100 !== 0)) {
//       console.log(year[i]);
//       count = count + 1;
//     }
//   }
//   return count;
// };
// console.log(leapYear([1900, 2300, 2023, 2024, 2400, 5600, 2345]));
// console.log(count);

// const rest = (...item) => {
//   let b = [];
//   //   console.log(item);
//   for (let i = 0; i < item.length; i++) {
//     b.push(item[i] + 2);
//   }
//   return b;
// };

// console.log(rest(1, 2, 3, 4, 5));

// map
// const doubleAll = (...item) => {
//   return item.map((item) => item * 2);
// };
// console.log(doubleAll(1, 2, 3, 4, 5));

// // number to string
// const numberToString = (...item) => {
//   return item.map((item) => String(item));
// };
// console.log(numberToString(1, 2, 3, 4, 5, 6));

// // uppercase
// const uppercase = (...item) => {
//   return item.map((item) => "Mr. " + item.toUpperCase());
// };
// console.log(uppercase("parvez", "nill", "ram"));

// // filter
// const evenNum = (...item) => {
//   return item.filter((item) => item % 2 === 0);
// };
// console.log(evenNum(1, 2, 3, 4, 5, 6));

// // long Words
// const longWords = (...item) => {
//   return item.filter((word) => word.length > 4);
// };

// console.log(longWords("parvez", "nill", "Messi", "pedri", "lamin"));
// // include
// const include = (...item) => {
//   return item.filter((item) => item.includes("e"));
// };
// console.log(include("apple", "leva", "gavi", "barnal", "casado"));

// // adults
// const adults = (...item) => {
//   return item.filter((item) => item.age >= 18);
// };
// console.log(
//   adults(
//     { name: "messi", age: 36 },
//     { name: "pedri", age: 17 },
//     { name: "lamin", age: 12 },
//   ),
// );
// // reduce
// const sumAll = (...item) => {
//   return item.reduce((total, num) => total + num, 0);
// };
// console.log(sumAll(1, 2, 3, 4, 5));

// //findMax
// const findMaxNumber = (...item) => {
//   return item.reduce((max, num) => {
//     return max > num ? max : num;
//   }, item[0]);
// };
// console.log(findMaxNumber(30, 90, 23, 67, 12));

// // make object
// const makeObj = (...item) => {
//   return item.reduce((obj, name, index) => {
//     obj[index] = name;
//     return obj;
//   }, {});
// };
// console.log(makeObj("parvez", "nill", "messi"));

// // evenby reduce
// const sumEven = (...item) => {
//   return item.reduce((total, num) => {
//     if (num % 2 === 0) {
//       return total + num;
//     }
//   });
// };
// console.log(sumEven(1, 2, 3, 4, 5, 6, 7, 8, 9));
// // find
// const findGreaterThanTen = (...item) => {
//   return item.find((item) => item < 10);
// };
// console.log(findGreaterThanTen(53, 40, 5, 90, 34, 45, 1, 8));

// const a = ["nill", "parvez"];
// const b = ["fahi", "mamu"];

// // const c = a.concat(b);
// // const c = [a + "" + "," + "" + b];
// const c = [...a, ...b];
// console.log(c);

// const person = [
//   {
//     name: "parvez",
//     address: "basirhat",
//     pin: 30473047320734,
//     id: 1,
//   },
//   {
//     name: "mota",
//     address: "barasat",
//     pin: 304730897734,
//     id: 2,
//   },
//   {
//     name: "fahi",
//     address: "tentulia",
//     pin: 3047304730844,
//     id: 3,
//   },
//   {
//     name: "samim mamu",
//     address: "katiahat",
//     pin: 3047300483,
//     id: 4,
//   },
//   {
//     name: "afroja",
//     address: "taki",
//     pin: 3047434340,
//     id: 5,
//   },
// ];

// const per = person.map((item, index) => {
//   return item.name === "parvez" ? { ...item, name: "dodo" } : item;
// });

// console.log(per);

// const users = [
//   { name: "parvez", age: 22 },
//   { name: "fahi", age: 18 },
//   { name: "mamu", age: 30 },
// ];

// const ageChange = users.map((item) => {
//   return item.name === "fahi" ? { ...item, age: 21 } : item;
// });

// console.log(ageChange);

// const students = [
//   { name: "rahim", marks: 40 },
//   { name: "karim", marks: 80 },
//   { name: "salam", marks: 30 },
// ];

// const addNewProp = students.map((item) => {
//   if (item.marks < 50) {
//     return { ...item, status: "fail" };
//   } else {
//     return { ...item, status: "pass" };
//   }
// });
// console.log(addNewProp);

// const person = {
//   name: "john",
//   age: 66,
//   address: {
//     street: "kolkata, 1234 lane",
//     city: "kolkata",
//     location: {
//       vill: "basirhat",
//       pin: 232323,
//     },
//   },
//   hobbies: ["drawing", "playing"],
// };

// const deepClone = {
//   ...person,
//   address: {
//     ...person.address,
//     location: {
//       ...person.address.location,
//     },
//   },
//   hobbies: [...person.hobbies],
// };

// deepClone.address.street = "taki road";
// console.log(deepClone);
// console.log(person)

// const deepClone = structuredClone(person);
// console.log(deepClone);

// const oddAverage = (...numbers) => {
//   //   console.log(numbers);
//   let odd = [];
//   for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     if (numbers[i] % 2 === 1) {
//       odd.push(numbers[i]);
//     }
//   }

//   if (odd.length === 0) {
//     return "No odd numbers";
//   }

//   let sum = 0;
//   for (let i = 0; i < odd.length; i++) {
//     sum = sum + odd[i];
//   }

//   let count = odd.length;
//   let average = sum / count;
//   return average;
// };
// console.log(oddAverage(23, 12, 45, 67, 89, 22));

// const oddAverage = (...numbers) => {
//   //   console.log(numbers);
//   const oddNumbers = numbers.filter((item) => item % 2 !== 0);
//   if (oddNumbers.length === 0) return "No odd numbers";
//   const oddNumbersSum = oddNumbers.reduce((acc, item) => acc + item, 0);
//   return Math.floor(oddNumbersSum / oddNumbers.length);
// };

// console.log(oddAverage(23, 4, 56, 7, 89, 12, 34, 56));

// const evenAverage = (...numbers) => {
//   let even = [];
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       even.push(number);
//     }
//   }

//   if (even.length === 0) return "No even numbers";

//   let sum = 0;
//   for (let sumEven of even) {
//     sum = sum + sumEven;
//   }

//   return sum / even.length;
// };
// console.log(evenAverage(12, 34, 56, 79, 1, 5));

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

// let str = sum.toString();
// // console.log(str);
// let newarr = str.split("");

// // console.log(newarr);
// for (let i = 0; i < newarr.length; i++) {
//   console.log(newarr[i]);
// }

// const str = "i am a good boy";
// let word = str.split(" ");
// // console.log(word);
// let

// let name = "parvez";
// let reve = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   reve = reve + name[i];
// }

// // console.log(reve);
// let arr = [];
// for (let i = 0; i < reve.length; i++) {
//   arr.push(reve[i]);
// }

// // console.log(arr);
// function upper(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "v") {
//       result = result + "V";
//     } else {
//       result = result + arr[i];
//     }
//   }
//   return result;
// }

// console.log(upper(arr));

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     newArr.push(arr[i] * 2);
//   }
// }

// console.log(newArr);

// const oddNum = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       return "Odd number found";
//     }
//     return "No odds numbers found";
//   }
// };

// console.log(oddNum(arr));

// const oddAvg = (arr) => {
//   //   console.log(arr);
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
//   let sum = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     sum = sum + newArr[i];
//   }
//   return (sum / newArr.length).toFixed(2);
// };

// console.log(oddAvg(arr));

// const arr = [12, 3, 45, 4, 67, 97, 3, 5];

// const minusOne = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       newArr.push(arr[i] - 1);
//     }
//   }

//   return newArr;
// };

// console.log(minusOne(arr));

// const students = ["abul", "babul", "cabul", "abul", "babul", "dabul"];

// const noDuplicate = (arr) => {
//   let uniqueArr = [];
//   for (let student of arr) {
//     if (!uniqueArr.includes(student)) {
//       uniqueArr.push(student);
//     }
//   }

//   return uniqueArr;
// };
// const result = noDuplicate(students);
// console.log(result);

// const arr = [12, 3, 4, 56, 2, 3, 8, 9, 8, 7];

// const noDuplicateNumber = (arr) => {
//   let uniqueArr = [];
//   for (let num of arr) {
//     if (uniqueArr.includes(num) === false) {
//       uniqueArr.push(num);
//     }
//   }
//   return uniqueArr;
// };

// const result = noDuplicateNumber(arr);
// console.log(result);

// let a = 5;
// let b = 7;

// console.log(a, b);
// const temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// const numbers = [12, 34, 5, 6, 7676, 76, 8, 9];

// numbers[1] = "bablu";
// numbers.push("parvez", "mota");
// console.log(numbers);

// const students = {
//   userName: "parvez",
//   vill: "basirha",
// };

// students.userName = "mom";
// students.pin = 232038;

// console.log(students);

// function add(num1, num2 = 0) {
//   const result = num1 + num2;
//   console.log(num1, num2, result);
//   return result;
// }
// const sum = add(5);
// console.log(sum);

// const sumOfThree = (num1 = 0, num2 = 0, num3 = 0) => {
//   const sum = num1 + num2 + num3;
//   return sum;
// };
// console.log(sumOfThree());

// const saveMoney = (money = 50) => {
//   return money;
// };
// console.log(saveMoney());

// const x = (name = "anonymous", earn = 0) => {
//   console.log(name, earn);
// };
// x();

// function hello(item) {
//   if (item === 0) {
//     return 1;
//   }
//   return item * hello(item - 1);
// }
// console.log(hello(5));
// 9 +

// const data = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25,
//     hobbies: ["reading", "cycling", "painting"],
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA",
//       geo: { lat: 40.7128, lng: -74.006 },
//     },
//     friends: [
//       { id: 11, name: "Bob", age: 26 },
//       { id: 12, name: "Charlie", age: 24 },
//     ],
//   },
//   {
//     id: 2,
//     name: "David",
//     age: 30,
//     hobbies: ["gaming", "hiking"],
//     address: {
//       street: "456 Elm St",
//       city: "Los Angeles",
//       country: "USA",
//       geo: { lat: 34.0522, lng: -118.2437 },
//     },
//     friends: [
//       { id: 21, name: "Eve", age: 29 },
//       { id: 22, name: "Frank", age: 31 },
//     ],
//   },
// ];

// function hello(item) {
//   if (Array.isArray(item)) {
//     item.forEach((sub) => hello(sub));
//   } else if (typeof item === "object" && item !== null) {
//     if (item.name) {
//       console.log("Name:", item.name);
//     }
//     if (item.age) {
//       console.log("Age:", item.age);
//     }
//     if (item.hobbies) {
//       console.log("Hobbies =>");
//       hello(item.hobbies);
//     }
//     if (item.address) {
//       console.log("Address =>");
//       if (item.address.street) {
//         console.log("Street:", item.address.street);
//       }
//       if (item.address.city) {
//         console.log("City:", item.address.city);
//       }
//       if (item.address.country) {
//         console.log("Country:", item.address.country);
//       }
//       if (item.address.geo) {
//         console.log("Geo >");
//         if (item.address.geo.lat) {
//           console.log("Lat:", item.address.geo.lat);
//         }
//         if (item.address.geo.lng) {
//           console.log("Lng:", item.address.geo.lng);
//         }
//       }
//     }
//     if (item.friends) {
//       console.log("Friends => ");
//       hello(item.friends);
//     }
//   } else {
//     console.log(item);
//   }
// }
// hello(data);

// const borgo = (num = 2) => {
//   return num * 2;
// };
// console.log(borgo());

// let books = ["bengali", "english", "math"];
// const favBooks = (allBooks = ["books"]) => {
//   return allBooks;
// };
// console.log(favBooks());

// let obj = {
//   prise: 10,
//   quantity: "full",
// };
// const person = (
//   x = {
//     prise: 20,
//     quantity: "full",
//   },
// ) => {
//   return x.prise;
// };
// console.log(person(obj));

// const double = (arr = [5, 10, 15]) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
//   }
//   return newArr;
// };
// console.log(double());

// const interest = (
//   x = {
//     principal: 1000,
//     rate: 5,
//   },
// ) => {
//   return (x.principal * x.rate) / 100;
// };

// console.log(interest());

// const first = "parvez";
// const last = "hossien";
// const name = first + " " + last + " " + "tarafder";
// console.log(name);

// const a = 10;
// const b = 20;
// const sum = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum);

// const name = "raj";
// const age = 34;
// console.log("Name: " + name + ", Age: " + age);
// console.log(`Name: ${name}, Age: ${age}`);

// const getName = () => {
//   return "sadia";
// };
// const msg = `Na bolle nadia, ase amr ${getName()}`;
// console.log(msg);

// const age = 20;
// const status = `You are ${age >= 18 ? "adult" : "minor"}`;
// console.log(status);

// const user = {
//   name: "parvez",
//   age: 38,
// };

// console.log(`Name: ${user.name} , Age: ${user.age}`);

// const fruit = ["apple", "bananna", "mango"];
// const third = `My third favorite fruit is ${fruit[2]}`;
// // console.log(list);
// const list = fruit.join(", ");
// console.log(list);

// const title = "Welcome";
// const body = "This is dynacmic HTML";
// const html = `<div>
// <h1>${title}</h1>
// <p>${body}</p>
// </div>`;
// console.log(html);

// const greet = (name) => {
//   return `Hello, ${name}.`;
// };
// console.log(greet("Nadia"));

// const firstNum = 100;
// const secondNum = 80;
// const result = `The difference between ${firstNum} and ${secondNum} is ${firstNum - secondNum}`;
// console.log(result);

// const employee = {
//   name: "joy",
//   age: 56,
//   salary: 30000,
// };

// console.log(
//   `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`,
// );

// const fruits = ["mango", "apple", "banana"];
// const third = `My third favorite fruit is ${fruits[2]}`;
// console.log(third);

// const person = {
//   firstName: "Parvez",
//   lastName: "Tarafder",
// };

// const getFullName = (person) => {
//   return `FullName : ${person.firstName} ${person.lastName}`;
// };
// console.log(getFullName(person));

// const animals = ["cat", "dog", "elephant"];
// console.log(`My favorite animals are: ${animals.join(", ")}`);

// const student = {
//   name: "Parvez",
//   age: 26,
//   results: [45, 67, 89],
// };

// const result = `My name ${student.name} and my avg number is ${student.results[0] + student.results[1] + student.results[2] / student.results.length}`;
// console.log(result);

// function add(num1, num2) {
//   return num1 + num2;
// }
// const result = add(13, 22);
// console.log(result);

// const student = {
//   name: "parvez",
//   age: 308,
// };

// const getAge = (age) => age.age;
// console.log(getAge(student));

// const getThird = (number) => number[4];
// const result = getThird([2, 4, 6, 7, 3, 7]);
// console.log(result);

// const getPi = () => Math.PI;
// console.log(getPi());

// const doMath = (x, y, z) => {
//   const sum = x + y + z;
//   const multi = x * y * z;
//   const result = sum + multi;
//   return result;
// };
// console.log(doMath(3, 4, 5));

// const person = {
//   name: "parvez",
//   greetRegular: function () {
//     return `Hello ${this.name}`;
//   },
//   greetArrow: () => {
//     return `Hello ${this.name}`;
//   },
// };

// console.log(person.greetRegular());
// console.log(person.greetArrow());

// const greet = (name = "guest") => name;
// console.log(greet());
// console.log(greet("parvez"));

// wrong
// const getObject = () => {
//   key: "value";
// };

// console.log(getObject());

// right
// const getObject = () => ({ key: "value" });
// console.log(getObject());

// const getFirst = (number) => number[0];
// console.log(getFirst([12, 3, 4, 5, 6, 7]));

// const getMulti = (x, y, z) => x * y * z;
// console.log(getMulti(4, 5, 6));

// const unknown = () => "unknown";
// console.log(unknown());

// const person = {
//   name: "parvez",
//   money: 20,
// };

// const getMoney = (money) => {
//   return money.money / 5;
// };
// console.log(getMoney(person));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const arrSum = (arr) => {
//   return arr[0] + arr[arr.length - 1];
// };
// console.log(arrSum(arr));

// const sum = (firstNumber = 10, secondNumber = 5) => firstNumber + secondNumber;
// console.log(sum());

// const actor = {
//   name: "Parvez",
//   age: 40,
//   phno: 30438204823,
//   money: 384038430,
// };

// const { name, age: boyos, phno, money } = actor;
// console.log(name, boyos, phno, money);

// const num = [12, 34];
// const [first, second] = num;
// console.log(first, second);

// function doubleThem(a, b) {
//   return [a * 2, b * 2];
// }

// const [first, second] = doubleThem(4, 5);
// console.log(first);
// console.log(second);

// const { name, phone = "N/A" } = person;
// console.log(name, phone);

// const person = {
//   name: "amit",
//   age: 34,
//   hobby: "reading",
// };

// function introduction({ name, hobby }) {
//   console.log(name, hobby);
// }

// introduction(person);

// const arr = [1, 2, 3, 4, 5];
// function intorduce([, a, , b]) {
//   console.log(a, b);
// }

// intorduce(arr);

// const product = { name: "Laptop", price: 50000, brand: "Dell" };
// const { brand } = product;
// console.log(brand);

// const color = ["red", "blue", "yellow"];
// const [, second] = color;
// console.log(second);

// const num = [2, 4, 6, 8];
// const [two, ...eight] = num;
// console.log(two, eight[eight.length - 1]);

// function multiply(a, b) {
//   return [a * 3, b * 3];
// }

// const [firstNum, secondNum] = multiply(5, 6);
// console.log(firstNum, secondNum);

// const person = {
//   name: "parvez",
//   city: "kolkata",
// };

// const { name, city, phone = "N/A" } = person;
// console.log(name, city, phone);

// const teacher = {
//   name: "Maria",
//   profession: "Teacher",
// };

// const { name, profession: job } = teacher;
// console.log(name, job);

// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(rest);

// const person = {
//   name: "parvez",
//   city: "kolkata",
//   age: 89,
//   vill: "basirhat",
// };

// const { name, age, ...details } = person;
// console.log(name);
// console.log(age);
// console.log(details);

// function multiply(multiplyer, ...numbers) {
//   console.log(multiplyer, numbers);
// }
// multiply(1, 2, 3, 4, 5);
// multiply(5, 6, 7, 8);

// const product = {
//   name: "Laptop",
//   price: 50000,
//   brand: "Dell",
// };

// const { name, ...details } = product;
// console.log(name);
// console.log(details);

// const programmer = {
//   name: "Parvez",
//   language: "Javascript",
//   experience: 5,
//   specialty: "Frontend dev",
//   tools: "React",
// };

// const { language, specialty, ...details } = programmer;
// console.log(language);
// console.log(specialty);
// console.log(details);

// const arr = [10, 20, 30, 40, 50, 600];
// const [a, b, ...restArr] = arr;
// console.log(a);
// console.log(b);
// console.log(restArr);

// function totalNum(a, b, ...rest) {
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum = sum + rest[i];
//   }
//   return sum;
// }
// console.log(totalNum(1, 2, 3, 4, 5, 6, 7, 8));

// function avg(...rest) {
//   if (rest.length === 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum = sum + rest[i];
//   }
//   return sum / rest.length;
// }

// console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9));

// const max = Math.max(2, 34, 7, 8, 9, 5);
// console.log(max);

// const number = [1, 2, 3, 4, 545, 67, 78, 23];
// const maxNumber = Math.max(...number);
// console.log(maxNumber);

// const bondu = [...friends];
// friends.push(34);
// console.log(bondu);
// console.log(friends);

// const friends = [3, 4, 5, 6, 7];
// const boundu = [...friends, 999];
// console.log(boundu);
// console.log(friends);

// const fruits = ["mango", "bannana"];
// const moreFruits = ["apple", ...fruits, "orange"];
// console.log(moreFruits);

// const arr1 = [1, 2];
// const arr2 = [2, 4];
// const arr1and2 = [...arr1, ...arr2];
// console.log(arr1and2);

// const person = {
//   name: "parvez",
//   vill: "basirhat",
// };

// const clonePerson = { ...person, age: 66 };
// console.log(clonePerson);
// const tech = ["condition", "array", "loop"];
// const arr = ["variable", ...tech];
// console.log(arr);

// const fruits = ["apple", "banana", "mango"];
// const myFruits = [...fruits, "papaya", "orange"];
// console.log(myFruits);

// const frontend = ["javascript"];
// const backend = ["nodejs"];
// const database = ["mongobd"];
// const fullstack = [...frontend, ...backend, ...database];
// console.log(fullstack);

// const website = {
//   name: "my-site",
//   type: "e-commerse",
//   status: "active",
// };

// const updateWebsite = { ...website, theme: "dark" };
// console.log(updateWebsite);

// const person = {
//   name: "arif",
//   age: 40,
//   country: "india",
// };

// delete person.country;
// const personClone = {
//   ...person,
// };
// delete personClone.country;

// console.log(personClone);

// const car = {
//   make: "toyota",
//   model: "corolla",
//   year: 2020,
// };

// const updatedCar = {
//   ...car,
//   year: 2021,
// };

// console.log(updatedCar);
// const a = new Promise((res) => res(20));
// const b = new Promise((res, rej) => rej(30));
// const c = new Promise((res) => res(40));

// let promise = Promise.all([a, b, c])
//   .then((item) => console.log(item))
//   .catch((err) => console.log(err));

// const math = (mark) => {
//   return new Promise((res, rej) => {
//     if (mark >= 40) {
//       res("math passed");
//     } else {
//       rej("math failed");
//     }
//   });
// };
// const english = (mark) => {
//   return new Promise((res, rej) => {
//     if (mark >= 40) {
//       res("english passed");
//     } else {
//       rej("english failed");
//     }
//   });
// };
// const history = (mark) => {
//   return new Promise((res, rej) => {
//     if (mark >= 40) {
//       res("history passed");
//     } else {
//       rej("history failed");
//     }
//   });
// };

// Promise.allSettled([math(20), english(40), history(30)]).then((result) => {
//   console.log("all subjects passed");
//   console.log(result);
// });
//   .catch((err) => {
//     console.log("subject failed");
//     console.log(err, "hello");
//   });

// let a = new Promise((res, rej) => {
//   let count = 0;
//   const id = setInterval(() => {
//     res("succesfull");
//     count++;
//     if (count === 4) {
//       clearInterval(id);
//     }
//   }, 4000);
//   setTimeout(() => {
//     res("succesfull-2");
//   }, 5000);
// });

// let b = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("succesfull-1");
//   }, 2000);
// });

// Promise.any([a, b]).then((value) => console.log(value));

// const person = {
//   name: "parvez",
//   town: "basirhat",
//   address: {
//     city: "kolkata",
//   },
// };

// deep copy
// const deepCopy = structuredClone(person);

// shallow copy
// const shCopy = { ...person, sub: "math" };

// deepCopy.address.city = "delhi";
// deepCopy.name = "nill";
// console.log(deepCopy);
// console.log(person);

// function hello(a, b) {
//   return a + b;
// }

// console.log(hello(3, 5));
// console.log(hello("Parvez", "Tarafder"));

// class Animal {
//   speak() {}
// }

// class Dog extends Animal {
//   speak() {
//     console.log("woof woof");
//   }
// }
// class Cat extends Animal {
//   speak() {
//     console.log("mau mau");
//   }
// }

// function playSound(animal) {
//   animal.speak();
// }

// playSound(new Dog());
// playSound(new Cat());

// class Payment {
//   pay(amount) {
//     console.log(`Processing payment ${amount}`);
//   }
// }

// class CreditCardPayment extends Payment {
//   pay(amount) {
//     console.log(`Paid ${amount} using Credit Card`);
//   }
// }

// class UPIPayment extends Payment {
//   pay(amount) {
//     console.log(`Paid ${amount} using UPI`);
//   }
// }

// class WalletPayment extends Payment {
//   pay(amount) {
//     console.log(`Paid ${amount} using Wallet`);
//   }
// }

// const payments = [
//   new CreditCardPayment(),
//   new UPIPayment(),
//   new WalletPayment(),
// ];

// payments.forEach((p) => p.pay(500));

// class Animal {
//   constructor(name) {
//     if (new.target === Animal) {
//       throw new Error("Error");
//     }
//     this.name = name;
//   }
//   speak() {
//     throw new Error("Method speak() must be implemented");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return `${this.name} barks`;
//   }
// }

// const dog = new Dog("harry");
// console.log(dog.speak());

// const obj1 = { name: "A" };
// const obj2 = { name: "B" };

// function sayName() {
//   console.log(this.name);
// }

// obj1.say = sayName;
// obj2.say = sayName;
// console.log(obj1);
// console.log(obj2);

// obj1.say();
// obj2.say();

// class BankAc {
//   #balance = 0; //private

//   deposite(amount) {
//     if (amount > 0) {
//       this.#balance = this.#balance + amount;
//       console.log("deposite", amount);
//     }
//   }
//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance = this.#balance - amount;
//       console.log("withdrew", amount);
//     } else {
//       console.log("invalid amout");
//     }
//   }
//   getBalace() {
//     return this.#balance;
//   }
// }

// const ac = new BankAc();
// ac.deposite(2000);
// ac.withdraw(700);
// console.log(ac.getBalace());

// let p = {
//   job: "web developer",
// };

// let q = p;
// console.log(p, q);

// q = {
//   job: "backend developer",
// };

// console.log(p, q);

// let p = {
//   job: "web developer",
// };
// let q = p;
// console.log(p, q);

// q.xyz = "backend dev";
// console.log(p, q);

// function changeValue(num) {
//   num = 20;
//   console.log("Inside function", num);
// }

// let x = 10;
// console.log("Before function call", x); // 10
// changeValue(x); // 20
// console.log("After function call", x); // 10

// function updateJob(person) {
//   person.job = "backend dev";
//   console.log("inside function", person);
// }

// let employee = {
//   job: "frontend dev",
// };
// console.log("before function call", employee); // frontedn
// updateJob(employee); // backend
// console.log("after function call", employee); // backend

// let num = 15;
// let copy = num;
// copy = 25;
// console.log(num, copy); // 15, 25

// let arr = [1, 2, 3];
// let arrCopy = arr;
// arrCopy.push(88);
// console.log(arr, arrCopy);

// let language = {
//   name: "js",
//   age: 30,
// };

// let newVersion = language;
// newVersion.location = "Browser";
// console.log(language, newVersion);

// let name;
// console.log(name);

// function add(a, b) {
//   const plus = a + b;
// }

// console.log(add(2, 4));

// function add(a, b, c, d, f) {
//   console.log(a, b, c, d, f);
// }

// add(23, 4);

// function noNegative(a, b) {
//   if (a < 0 || b < 0) {
//     return;
//   }
//   return a + b;
// }
// console.log(noNegative(2, -5));
// Output: undefined;

// const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.salary);
// Output: undefined;

// const arr = [3, 6, 3, 7, 6, 2, 6];
// delete arr[1];
// console.log(arr);
// console.log(arr[1]);

// const students = {
//   name: "parvez",
//   roll: 1,
//   marks: 99,
// };

// console.log(students.marks);

// const arr = [2, 3, 4, 5, 6, 7];
// delete arr[2];
// console.log(arr[2]);

// const x = " ";
// if (x) {
//   console.log("value of x is truthy");
// } else {
//   console.log("value of x is falsy");
// }

// const y = "";
// if (!y) {
//   console.log("value of y is falsy");
// } else {
//   console.log("value of y is true");
// }

// console.log(!!"hello");
// console.log(!!23);
// console.log(!!{});
// console.log(!![]);

// console.log(!!"");
// console.log(!!0);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// const value = 0;
// console.log(!!value);

// if ("false") {
//   console.log("false");
// } else {
//   console.log("true");
// }

// if ({}) {
//   console.log("true");
// } else {
//   console.log(false);
// }

// if ([]) {
//   console.log("true");
// } else {
//   console.log(false);
// }

// console.log(!![]);

// console.log(2 === "2"); // false
// console.log(1 === true); // false
// console.log(null === undefined); // false
// console.log("" === 0); // false
// console.log(false === "0"); // false
// console.log([] === false); // false

// console.log(2 == "2"); // true
// console.log(1 == true); // true
// console.log(null == undefined); // true
// console.log("" == 0); // true
// console.log(false == "0"); // true
// console.log([] == false); // true

// console.log(false == "0"); // true
// console.log(true == "1"); // true
// console.log(true == "10"); // false
// console.log([1, 2] == 12); // false
// console.log([1] == 1); // false
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log({} === {}); // false

// const first = {};
// const second = first;
// console.log(first === second);

// if (true == 1) {
//   console.log("same");
// } else {
//   console.log("different");
// }

// const first = {
//   name: "parvez",
//   home: "basirhat",
// };
// const second = {
//   name: "mota",
//   home: "barasat",
// };

// console.log(first == second);
// console.log(first === second);

// const arr = [];
// const arr1 = arr;
// console.log(arr === arr1);

// function check(num, bool) {
//   return num == bool;
// }
// console.log(check(2, true));

// console.log("" == false);

// console.log(null === undefined);

// function greatting(greattingHandler) {
//   //   console.log(greattingHandler);
//   greattingHandler();
// }
// function morningGreatting() {
//   console.log("good morning");
// }

// greatting(morningGreatting);

// function calculate(a, b, print) {
//   const result = a + b;
//   print(result);
// }
// function printResult(value) {
//   console.log("result is ", value);
// }

// calculate(2, 5, printResult);

// const obj = {
//   name: "parvez",
//   home: "basirhat",
// };

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key);
// }

// function mainFn(obj, result) {
//   for (let [key, value] of Object.entries(obj)) {
//     result(key);
//   }
// }

// function objFn(x) {
//   console.log(x);
// }

// mainFn(obj, objFn);

// function numberProcessor(num, callback) {
//   const result = num / 5;
//   callback(result);
// }
// function callback(value) {
//   console.log(value);
// }

// numberProcessor(10, callback);

// const smart = true;

// if (smart) {
//   let message = "prochur gorom";
//   console.log("batas dau");
// }

// console.log(message);

// function add(a, b) {
//   const plus = a + b;
//   console.log(a, b);
//   return plus;
// }

// console.log(a, b);
// console.log(add(5, 6));

// function bari() {
//   const name = "parvez";

//   function ghor() {
//     console.log(name);
//   }
//   ghor();
// }

// bari();

// const name = "parvez";

// function outer() {
//   const bari = "basirhat";

//   function inner() {
//     const phno = 34038473024;

//     console.log(phno);
//     console.log(bari);
//     console.log(name);
//   }
//   inner();
// }

// outer();

// const taxRate = 15;

// const calulateTax = (income) => {
//   const totalTax = (income * taxRate) / 100;
//   return totalTax;
// };

// console.log(calulateTax(50000));

// const x = () => {
//   let insideSceret = "Internal secret hiding place";
// };

// console.log(insideSceret);

// if (true) {
//   let temperature = "20c";
// }

// console.log(temperature);

// function schoolDetails() {
//   let schoolName = "Dandirhat high school";
//   function displaySchoolName() {
//     console.log(schoolName);
//   }
//   displaySchoolName();
// }

// schoolDetails();

// number constractor
// const num = "45";
// const number = Number(num);
// console.log(typeof number);
