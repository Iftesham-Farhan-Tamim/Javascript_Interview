// map, filter and reduce

// what is map() ?
// --> The map method is used for for creating a new array from existing one by 
// --> applying a function to each one of the elements of the first array.

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((num, i, arr) => {
//     return num * 3;
// });
// console.log(multiplyThree);

// ............................................................................................

// what is filter() ?
// --> so the filter methode takes each element in an array and it applies a conditional 
// --> statement against it, if the conditional returns ture the element gets pushed into 
// --> the output arrayif the conditional returns false the element does not get pushed 
// --> into the output array. In short filter returns only those elements from the array .
// --> which fulfill the provided criteria

// const nums = [1, 2, 3, 4];

// const moreThanTwo = nums.filter((num) => {
//     return num > 2;
// });
// console.log(moreThanTwo);

// ............................................................................................

// what is reduce() ?
// --> The reduce method reduces an array of values down to just one value just like map 
// --> and filter reduce also executes the callback for each element of the array.

// If there is no initial value, it takes first element of array as value for accumulator

// const nums = [1,2,3,4];

// const sum = nums.reduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0);
// console.log(sum);  // 10

// ............................................................................................

// Polyfill for map()

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.myMap((num, i, arr) => {
//     return num * 3;
// }, 0);
// console.log(multiplyThree);  

// ............................................................................................

// Polyfill for filter()

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)) temp.push(this[i]);
//     }

//     return temp;
// };

// const nums = [1, 2, 3, 4];

// const moreThanTwo = nums.myFilter((num) => {
//     return num > 2;
// });
// console.log(moreThanTwo);

// ............................................................................................

// Polyfill for reduce()

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;

//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }

//     return accumulator;
// };

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0);
// console.log(sum);  // 10
// ............................................................................................

// // Practise sets

// // Difference between map and for each (map vs foreach)

// --> These both are array functions to loop through the items of the array

// --> Use map() when you need to transform data and create a new array.

// --> Use forEach() when you simply want to iterate through an array and perform 
// --> actions (like side effects) without needing a return value, Returns undefined.

// const arr = [2, 5, 3, 4, 7];

// const mapResult = arr.map((ar) => {
//     return ar+2;
// });

// const forEachResult = arr.forEach((ar) => {
//     return ar+2;
// });

// const forEachResult1 = arr.forEach((ar, i) => {
//     arr[i] = ar + 3;
// });

// console.log(mapResult, forEachResult, forEachResult1);  // [4, 7, 5, 6, 9] undefined

// ............................................................................................

// // map, filter and reduce - O/P Based Questions
// // Question 1 - Return only name of students in Capital

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 },
//     { name: "kaushal", rollNumber: 16, marks: 35 },
//     { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

// // let names = [];
// // for(let i=0; i<students.length; i++) {
// //     names.push(students[i].name.toUpperCase());
// // }

// const names = students.map((stu) => stu.name.toUpperCase());

// console.log(names);


// // question 2 - Return only details of those who scored more than 60 marks

// const details = students.filter((stu) => stu.marks > 60);
// console.log(details);


// // question 3 - More than 60 marks and rollNumber greater than 15

// const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);
// console.log(details);


// // question 4 - More than 60 marks and rollNumber greater than 15

// const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(sum);


// // question 5 - Return only names of students who scored more than 60.

// const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(names);


// // question 6 - Return total marks for students with marks greater than 60
// //              after 20 marks have been added to those who scored less than 60.

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 60) {
//         stu.marks += 20;
//     }

//     // console.log(stu);
//     return stu;
// })
//  .filter((stu) => stu.marks > 60)
//  .reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalMarks);