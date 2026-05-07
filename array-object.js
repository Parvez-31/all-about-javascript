const students = [
  { id: 1, name: "Amit", age: 20, course: "Math", marks: 85, isActive: true },

  {
    id: 2,
    name: "Riya",
    age: 22,
    course: "Science",
    marks: 92,
    isActive: false,
  },

  { id: 3, name: "Kunal", age: 21, course: "Math", marks: 67, isActive: true },

  {
    id: 4,
    name: "Neha",
    age: 23,
    course: "English",
    marks: 74,
    isActive: true,
  },

  {
    id: 5,
    name: "Rahul",
    age: 20,
    course: "Science",
    marks: 88,
    isActive: false,
  },

  { id: 6, name: "Sneha", age: 22, course: "Math", marks: 95, isActive: true },

  {
    id: 7,
    name: "Arjun",
    age: 21,
    course: "English",
    marks: 60,
    isActive: false,
  },
];

// Calculate the average marks of all students.

// Find the student with the highest marks.

// Get all students enrolled in the Math course.

// Check if any student failed (marks less than 60).

// Create a new array containing only: Name, Course, marks

// Group students by their course.

// Count how many students are active vs inactive.

// Find the second highest marks without sorting the array.

// Find the top scorer in each course.

// Create a ranking array where students are ranked based on marks
// (Highest marks → Rank 1).
// If marks are same, maintain original order.

//QUESTION: 1
// let sum = 0;
// students.forEach((x) => {
//   sum = sum + x.marks;
// });

// let avg = sum / students.length;
// console.log(avg);

//QUESTION: 2
// let top = students[0];
// students.forEach((x) => {
//   if (x.marks > top.marks) {
//     top = x;
//   }
// });

// console.log(top);

//QUESTION: 3
// const math = students.filter((x) => x.course === "Math");
// console.log(math);

//QUESTION: 4
// const failed = students.some((x) => x.marks < 60);
// console.log(failed);

//QUESTION: 5
// const newArray = students.map((x) => {
//   return {
//     name: x.name,
//     course: x.course,
//     marks: x.marks,
//   };
// });

// console.log(newArray);

//QUESTION: 6
// let group = {};
// students.forEach((x) => {
//   if (!group[x.course]) {
//     group[x.course] = [];
//   } else {
//     group[x.course].push(x);
//   }
// });

// console.log(group);

//QUESTION:  7
// let active = 0;
// let inActive = 0;

// students.forEach((x) => {
//   if (x.isActive) {
//     active++;
//   } else {
//     inActive++;
//   }
// });

// console.log(active, inActive);

//QUESTION:  8
// let first = -Infinity;
// let second = -Infinity;

// students.forEach((x) => {
//   if (x.marks > first) {
//     second = first;
//     first = x.marks;
//   } else if (x.marks < first && x.marks > second) {
//     second = x.marks;
//   }
// });

// console.log(second);
