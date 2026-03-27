// What is string in js?
// String in js is used to store text value.

// let userName = "Parvez Hossien Tarafder";
// let userNameLength = userName.length;
// console.log(userNameLength);

// Js always returns length of a string as lastindex + 1.

// Method: -> Slice method
// let data = "Hello World!!";
// let d = data.slice(0, 8);
// console.log(data);
// console.log(d);

// NOTE:
// In slice method end position is calculated but value is not included.
// Slice method accepts two parameters(start positon, end positon)
// Slice method is used to extract a part from a string.

// let d1 = data.slice(6);
// console.log(d1);

// let d2 = data.slice(-8, -4);
// console.log(d2);

// let d3 = data.slice(-3);
// console.log(d3);

// Method: -> Substring method
// let text = "Hello Monkey";
// let t1 = text.substring(5, 10);
// console.log(t1);

// NOTE:
// Like slice method, substring is also used to extract a certain part of a string.
// Substring doesn't accept start or end position in negative index.

// Method: -> Replace method
// let rt = "Welcome to Flipkart";
// let rt1 = rt.replace("Flipkart", "Mintra");
// console.log(rt);
// console.log(rt1);

// Method:  -> Trim method
// let a = "            Hello World                ";
// console.log(a.length);
// let a1 = a.trimStart();
// console.log(a1.length);
// console.log(a1);
// let a2 = a.trimEnd();
// console.log(a2);
// both -trimStart and trimEnd
// let a3 = a.trim();
// console.log(a3.length);

// Method: -> ReplaceAll method
// let t4 = "I love cupcakes as CUPCAKES are delicious.";
// let t5 = t4.replaceAll(/cupcakes/gi, "pastries");
// console.log(t4);
// console.log(t5);

// Method: -> Concat method
// let c1 = "Superman";
// let c2 = "Batman";
// let c3 = c1.concat(" ", c2);
// console.log(c3);

// TOPIC: -> Template string
// console.log(`Hello world!! I am your beloved ${c1} and ${c2}`);

// Method: -> Search method
// let h = "Let FIND the 'find' word in the text";
// let h1 = h.search(/find/gi);
// console.log(h);
// console.log(h1);

// Method: -> indexOf method
// let h2 = h.indexOf("find");
// console.log(h2);

// let h3 = h.search("hello");
// console.log(h3);

// let h4 = h.indexOf("hello");
// console.log(h4);

// Method: -> lastIndexOf
// let txt1 = "The world text in this text is very confusing text";
// let rtxt1 = txt1.lastIndexOf("text");
// console.log(txt1);
// console.log(rtxt1);

// Method: -> startWith
// let txt2 = txt1.startsWith("The");
// let txt3 = txt1.startsWith("Hello");
// console.log(txt2);
// console.log(txt3);

// Method: -> endsWith
// let txt4 = txt1.endsWith("rain");
// let txt5 = txt1.endsWith("text");
// console.log(txt4);
// console.log(txt5);

// Method: -> includes
// let txt6 = txt1.includes("this");
// let txt7 = txt1.includes("you");
// console.log(txt6);
// console.log(txt7);

// Method: -> split method
// let hello = "hello world";
// let sp = hello.split("*");
// console.log(sp);

// const city = "kolk ata";
// console.log(city.length);
// console.log(city[0]);
// console.log(city.includes("o"));
// console.log(city.indexOf("at"));
// console.log(city.indexOf("xz"));

// const num = [11, 56, 23, 88, 22];
// num[1] = 99;
// console.log(num);

// const city = "mumbai";
// console.log(city.indexOf("b"));
// const division = "basirhat";
// console.log(division.includes("h"));
// const name = "parvez";
// console.log(name[name.length - 1]);
// const programming = "javascript";
// console.log(programming.indexOf("rip"));
// const x = "python";
// console.log(x.length);

// const subject = "Chemistry";
// const book = "chemistry";
// if (subject.toLowerCase() === book.toLowerCase()) {
//   console.log("i am reading book");
// } else {
//   console.log("hudai page ultai");
// }

// const userName = "user m mad";
// console.log(userName.toUpperCase());
// const userName = "usEr M mad";
// console.log(userName.toLowerCase());

// const email = "User@Example.Com";
// console.log(email.toLowerCase());

// const language = "javaScript";
// console.log(language.toLowerCase().includes("script"));

// const drink = " water";
// const liquid = "water";
// if (drink.trim() === liquid.trim()) {
//   console.log("dami pani");
// } else {
//   console.log("kom dam false pani");
// }

// const address = "basirhatdandirhat";
// const part = address.slice(5, 8);
// console.log(part);

// const address = "basirhatdandirhat";
// const result = address.slice(5);
// console.log(result);

// const sentence = "i am a good boy and hardworking person";
// console.log(sentence.split(" "));
// const result = sentence.split(" ");
// console.log(result);
// console.log(sentence);

// const friend = "rahim,parvez,mota,afroja";
// const result = friend.split(",");
// console.log(result);

// const realFriend = ["parvez", "rahim", "sajit", "fahi"];
// const result = realFriend.join("*");
// console.log(result);
// console.log(realFriend);

// const first = "parvez";
// const middle = "hossien";
// const last = "Tarafder";
// const name = first + middle + last;
// console.log(name);

// const str1 = "hello";
// const str2 = "world";
// const result = str1.concat(" ", str2);
// console.log(result);
// console.log("I".concat(" love", " javascript"));

// const friend = "rahim,parvez,mota,afroja";
// const result = friend.split(",");
// console.log(result);

// const realFriend = ["parvez", "rahim", "sajit", "fahi"];
// const result = realFriend.join(",");
// console.log(result);

// const str = "function if else while";
// const result = str.split(" ");
// console.log(result);

// const language = ["javascript", "python", "java"];
// const result = language.join(";");
// console.log(result);

// const str = " console log debug ";
// const result = str.trim();
// console.log(result);
// console.log(str);

// const str1 = "push";
// const str2 = "pop";
// const str3 = "unshift";
// const str4 = "map";
// const result = str1.concat(",", str2, ",", str3, ",", str4);
// console.log(result);

// const str = "hello javascript developer";
// const result = str.slice(6, 16);
// console.log(result);

// const str = "code more learn more";
// console.log(str.substring(10, 15));

// const str = "hello!";
// const repetedStr = str.repeat(4);
// console.log(repetedStr);
