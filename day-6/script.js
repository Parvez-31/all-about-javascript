// QUESTION: 1
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));

// QUESTION: 2
// function countVowelsAndConastants(str) {
//   str = str.toLowerCase();

//   let vowel = "aeiou";
//   let vowelCount = 0;
//   let constantCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] >= "a" && str[i] <= "z") {
//       if (vowel.includes(str[i])) {
//         vowelCount++;
//       } else {
//         constantCount++;
//       }
//     }
//   }

//   return { vowelCount, constantCount };
// }

// console.log(countVowelsAndConastants("hello world"));

// QUESTION: 3
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("parvez"));
// // without reverse , manual logic
// function x(str) {
//   let storeWord;
//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     storeWord = str[i];
//   }
//   return storeWord;
// }
// console.log(x("hossien"));
