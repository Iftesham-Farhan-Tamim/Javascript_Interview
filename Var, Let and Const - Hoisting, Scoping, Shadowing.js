// var vs let vs const
// scope

// scope : a scope is a certain region of a program where a defined variable 
// exists and can be recognized and beyond that it can not be recognized
// so there can be a multiple types of scope for example global scope, block scope
// functional scope

// var is functional scope but let and const are block scope


// // it will work.
// {
//     let a = 5;
//     console.log(a);
// }

// // it will not work (ReferenceError: a is not defined)
// {
//     let a = 5;
// }
// console.log(a);

// ............................................................................................

// // variable shadowing

// function test() {
//     let a = "hello";

//     if(true) {
//         let a = "hello";
//         console.log(a);
//     }

//     console.log(a);
// }

// test();  // hello hello


// function test() {
//     let a = "hello";

//     if(true) {
//         let a = "world";
//         console.log(a);
//     }

//     console.log(a);
// }

// test();  // world hello


// // this will not work (SyntaxError: Identifier 'b' has already been declared)
// function test() {
//     var a = "hello";
//     let b = "bye";

//     if (true) {
//         let a = "hi";
//         var b = "goodbye";
//         console.log(a);
//         console.log(b);
//     }
// }
// test(); 
// leson : shadowing var --> let/const (it's ok)
//         shadowing let/const --> var (it's not ok)
//         shadowing let/const --> let/const (it's ok)
//         shadowing var --> var (it's ok)

// ............................................................................................

// // Declaration

// // This will not work (SyntaxError: Identifier 'a' has already been declared)
// let a;
// let a;

// // This will not work (SyntaxError: Missing initializer in const declaration)
// const a;
// const a;

// // This will work
// let a;
// {
//     let a;
// }

// ............................................................................................

// // Declaration without initialisation

// // This will not work (SyntaxError: Missing initializer in const declaration)
// const a;
// console.log(a);

// // This will work 
// const a = 5;
// console.log(a);  // 5

// ............................................................................................

// // Re-Initialisation

// // This will work
// var a = 5;
// a = 6;

// // This will work
// let a = 5;
// a = 6;

// // This will not work (TypeError: Assignment to constant variable)
// const a = 5;
// a = 6;

// ............................................................................................

// // Hoisting ******

// // During the creation phase javaScript engine moves your variable and function declarations
// // to the top of your code and this is known as hoisting 

// // This will work
// var count;
// console.log(count);
// count = 1;

// // This will not work (ReferenceError: count is not defined)
// // This is hoisted in temporal dead zone
// console.log(count);
// count = 1;

// ............................................................................................

// // practise sets ******

// // This will not work (ReferenceError: count is not defined)
// function abc() {
//     console.log(a);

//     var a = 10;
// }
// abc();  // undefined

// // This will not work (ReferenceError: Cannot access 'b' before initialization)
// // b & c hoisted in temporal dead zone
// function abc() {
//     console.log(a, b, c);

//     const c = 30;
//     let b = 20;
//     var a = 10;
// }
// abc();

// // Temporal dead zone: Temporal dead zone is the term to describe the state
// // where variables are in the scope but they are not yet declared