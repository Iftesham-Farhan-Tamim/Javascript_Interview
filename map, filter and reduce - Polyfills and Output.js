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

// ............................................................................................

// ............................................................................................

// ............................................................................................

// ............................................................................................

// ............................................................................................

// ............................................................................................

// ............................................................................................
