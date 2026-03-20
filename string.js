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
