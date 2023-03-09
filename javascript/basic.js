// if else statements
let mark = 60;
if (mark < 33) {
  console.log("You are fail");
} else if (mark < 60) {
  console.log("You passed but didnt get first class");
} else if (mark == 60) {
  console.log("You got exactly first class mark");
} else {
  console.log("you got above the first class marks");
}
// output: You got exactly first class mark
//--------------------------------------------------------------->>

//javascript operators
/**
 * there are six types of operatiors
 * 1. assignment operators: =, +=, -=, ....... more...
 * 2. arithmetic operators: +, -, *, %, /, ** and more ...
 * 3. comparison: ==, ===, !==, <, >, <=, ? and more ...
 * 4. bitwize: &, |, <<, >>, >>> (unsigned right shift)
 * 5. logical: &&, ||, !
 * 6. type: typeof, instanceof
 */

let num1 = 5,
  num2 = 10,
  sum;
sum = num1 + num2; // arithmetic + assignment
if ((sum & 1) === 1) { // comparison + bitwise
  console.log(sum + " is an odd number");
  console.log(typeof sum); // type
}
// output:
/**
 * 15 is an odd number
 * number
 */
//------------------------------------------------------>>

// functions in javascript
/**
 * there two types of functon in javascipt
 * 1. arrow function
 * 2.
 */
let myArrowFun = (p1, p2) => {
    console.log("first param: " + p1 + ", Second param: " + p2);
}
myArrowFun(4,5);
// output: first param: 4, Second param: 5

function arrSum(myArr) { // this function takes an array as parameter
  let sum = 0;
  myArr.forEach((num) => { // forEach method to iterate every item in the array
    sum += num;
  });
  return sum;
}

const myArr = [1, 5, -8, 0, 100, 7]; // initialize an array
//let sum = arrSum(myArr); // error because sum already declared previous in the same block scope.
sum = arrSum(myArr); // call the function
console.log(sum);
// output: 105
//--------------------------------------------------------------->>

// switch statement
const age = 21;
let comment,
  v = 0,
  f = 1;
switch (age) {
  case 0:
    comment = "You born just now!!";
    break;
  case 21:
    comment = "biyer boyos hoice!!";
    break;
  case 30:
    comment = "You can do anything if you try!!";
    break;
  default:
    comment = "We couldn't find any comments about you!";
}
console.log(comment);
// output: biyer boyos hoice!!
//------------------------------------------------------------------->>

// for loop
let arr = [];
for (let i = 5; i >= 0; i--) {
  arr.push(i);
}
console.log(arr);
// output: [ 5, 4, 3, 2, 1, 0 ]
//------------------------------------------------------>>

//for in loop (used for iterating of index/key of the aray/ objects)
let arrSum2 = 0;
for (let idx in arr) {
  arrSum2 += arr[idx];
}
console.log(arrSum2);
// output: 15

const student = {
  name: "Zahid Hasan",
  roll: 18102027,
  email: "zahid@gmail.com",
  session: "2017-18",
};
let keys = [];
let values = [];
for (let key in student) {
  keys.push(key);
}
console.log(keys);
// output: [ 'name', 'roll', 'email', 'session' ]

for (let val of keys) {
  // for of iterate over the values of an iterable
  values.push(val);
}
console.log(values);
// output: [ 'name', 'roll', 'email', 'session' ]

// type conversion
let str = "012345";
console.log(Number(str)); // output: 12345
console.log(Number(str).toString().length); // output: 5
console.log(+(str + "s")); // output: NaN

// eval() execute statements
console.log(eval("5+5")); // output: 10

// try catch throw
try {
  if (typeof add === "function") {
    add();
  } else {
    throw "function doesn't exist";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("this is default block execute after try/catch operation");
}
// output: funcion doesn't exist

// Hoisting is JavaScript's default behavior of moving declarations to the top. --from w3school

function strictModeFunction(){
  "use strict";
  y= 5;
  console.log(y);
}
// strictModeFunction(); // refErr: y is not declared;

//  <<-----------end of the basic of javascript-------------->>


const b = new Boolean(false);
console.log(typeof b)
if (b) {
  console.log(1);
}
if (b == true) {
  console.log(2);
}