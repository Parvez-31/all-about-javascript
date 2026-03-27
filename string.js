// What is string in js?
// String in js is used to store text value.

// let username = "parvez hossien tarafder";
// let usernamelength = username.length;
// console.log(usernamelength);

// js always returns length of a string as lastindex + 1.

// method: -> slice method
// let data = "hello world!!";
// let d = data.slice(0, 8);
// console.log(data);
// console.log(d);

// note:
// in slice method end position is calculated but value is not included.
// slice method accepts two parameters(start positon, end positon)
// slice method is used to extract a part from a string.

// let d1 = data.slice(6);
// console.log(d1);

// let d2 = data.slice(-8, -4);
// console.log(d2);

// let d3 = data.slice(-3);
// console.log(d3);

// method: -> substring method
// let text = "hello monkey";
// let t1 = text.substring(5, 10);
// console.log(t1);

// note:
// like slice method, substring is also used to extract a certain part of a string.
// substring doesn't accept start or end position in negative index.

// method: -> replace method
// let rt = "welcome to flipkart";
// let rt1 = rt.replace("flipkart", "mintra");
// console.log(rt);
// console.log(rt1);

// method:  -> trim method
// let a = "            hello world                ";
// console.log(a.length);
// let a1 = a.trimstart();
// console.log(a1.length);
// console.log(a1);
// let a2 = a.trimend();
// console.log(a2);
// both -trimstart and trimend
// let a3 = a.trim();
// console.log(a3.length);

// method: -> replaceall method
// let t4 = "i love cupcakes as cupcakes are delicious.";
// let t5 = t4.replaceall(/cupcakes/gi, "pastries");
// console.log(t4);
// console.log(t5);

// method: -> concat method
// let c1 = "superman";
// let c2 = "batman";
// let c3 = c1.concat(" ", c2);
// console.log(c3);

// topic: -> template string
// console.log(`hello world!! i am your beloved ${c1} and ${c2}`);

// method: -> search method
// let h = "let find the 'find' word in the text";
// let h1 = h.search(/find/gi);
// console.log(h);
// console.log(h1);

// method: -> indexof method
// let h2 = h.indexof("find");
// console.log(h2);

// let h3 = h.search("hello");
// console.log(h3);

// let h4 = h.indexof("hello");
// console.log(h4);

// method: -> lastindexof
// let txt1 = "the world text in this text is very confusing text";
// let rtxt1 = txt1.lastindexof("text");
// console.log(txt1);
// console.log(rtxt1);

// method: -> startwith
// let txt2 = txt1.startswith("the");
// let txt3 = txt1.startswith("hello");
// console.log(txt2);
// console.log(txt3);

// method: -> endswith
// let txt4 = txt1.endswith("rain");
// let txt5 = txt1.endswith("text");
// console.log(txt4);
// console.log(txt5);

// method: -> includes
// let txt6 = txt1.includes("this");
// let txt7 = txt1.includes("you");
// console.log(txt6);
// console.log(txt7);

// method: -> split method
// let hello = "hello world";
// let sp = hello.split("*");
// console.log(sp);

// const city = "kolk ata";
// console.log(city.length);
// console.log(city[0]);
// console.log(city.includes("o"));
// console.log(city.indexof("at"));
// console.log(city.indexof("xz"));

// const num = [11, 56, 23, 88, 22];
// num[1] = 99;
// console.log(num);

// const city = "mumbai";
// console.log(city.indexof("b"));
// const division = "basirhat";
// console.log(division.includes("h"));
// const name = "parvez";
// console.log(name[name.length - 1]);
// const programming = "javascript";
// console.log(programming.indexof("rip"));
// const x = "python";
// console.log(x.length);

// const subject = "chemistry";
// const book = "chemistry";
// if (subject.tolowercase() === book.tolowercase()) {
//   console.log("i am reading book");
// } else {
//   console.log("hudai page ultai");
// }

// const username = "user m mad";
// console.log(username.touppercase());
// const username = "user m mad";
// console.log(username.tolowercase());

// const email = "user@example.com";
// console.log(email.tolowercase());

// const language = "javascript";
// console.log(language.tolowercase().includes("script"));

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

// const realfriend = ["parvez", "rahim", "sajit", "fahi"];
// const result = realfriend.join("*");
// console.log(result);
// console.log(realfriend);

// const first = "parvez";
// const middle = "hossien";
// const last = "tarafder";
// const name = first + middle + last;
// console.log(name);

// const str1 = "hello";
// const str2 = "world";
// const result = str1.concat(" ", str2);
// console.log(result);
// console.log("i".concat(" love", " javascript"));

// const friend = "rahim,parvez,mota,afroja";
// const result = friend.split(",");
// console.log(result);

// const realfriend = ["parvez", "rahim", "sajit", "fahi"];
// const result = realfriend.join(",");
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
// const repetedstr = str.repeat(4);
// console.log(repetedstr);

// const num = 123;
// const str = num.toString();
// console.log(typeof str);
// console.log(typeof num);

// const text = "I love programming, programming is fun";
// const result = text.replace("programming", "coding");
// console.log(result);
// const result = text.replaceAll("programming", "coding");
// console.log(result);

// const str = "I am learning web dev";
// let reverse = "";
// for (let letter of str) {
//   reverse = letter + reverse;
// }

// console.log(reverse);
