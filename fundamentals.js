"use strict"

alert("Hello world");
alert("hello")
alert("world")



// 1. Using var (old way - avoid in modern JS)
var name = "Mouna";
console.log("Name:", name);

// 2. Using let (can be reassigned)
let age = 25;
console.log("Age:", age);

age = 26; // updating value
console.log("Updated Age:", age);

// 3. Using const (cannot be reassigned)
const country = "India";
console.log("Country:", country);

// uppercase constants

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// country = "USA"; ❌ Error (cannot reassign const)

// 4. Different data types
let isStudent = true;           // Boolean
let marks = 95.5;              // Number
let hobbies = ["reading", "coding"]; // Array
let person = {                 // Object
  firstName: "Mouna",
  lastName: "K"
};

console.log(isStudent, marks, hobbies, person);

// 5. Undefined and Null
let x;
console.log("Undefined:", x);

let y = null;
console.log("Null:", y);

// 6. Block scope example
{
  let blockVar = "I exist only inside this block";
  console.log(blockVar);
}

// console.log(blockVar); ❌ Error (not accessible outside)

// 1. alert → shows a message
alert("Welcome to JavaScript!");

// 2. prompt → asks user for input
let userName = prompt("What is your name?");
alert("Hello " + userName);

// prompt with default value
let age1 = prompt("Enter your age:", "18");
alert("Your age is " + age1);

// 3. confirm → asks for OK / Cancel
let isSure = confirm("Do you want to continue?");

if (isSure) {
  alert("You chose OK");
} else {
  alert("You chose Cancel");
}



// 1. String Conversion
let value = 123;

let str1 = String(value);     // explicit conversion
let str2 = value.toString(); // method conversion

console.log("String Conversion:");
console.log(str1, typeof str1); // "123", string
console.log(str2, typeof str2); // "123", string);


// 2. Numeric Conversion
let strNumber = "456";
let invalidNumber = "123abc";

let num1 = Number(strNumber);     // explicit
let num2 = parseInt(strNumber);   // integer
let num3 = parseFloat("3.14");    // float
let num4 = Number(invalidNumber); // NaN

console.log("\nNumeric Conversion:");
console.log(num1, typeof num1); // 456 number
console.log(num2, typeof num2); // 456 number
console.log(num3, typeof num3); // 3.14 number
console.log(num4);              // NaN


// 3. Boolean Conversion
let truthyValue = "Hello";
let falsyValue1 = "";
let falsyValue2 = 0;
let falsyValue3 = null;
let falsyValue4 = undefined;

let bool1 = Boolean(truthyValue);
let bool2 = Boolean(falsyValue1);
let bool3 = Boolean(falsyValue2);
let bool4 = Boolean(falsyValue3);
let bool5 = Boolean(falsyValue4);

console.log("\nBoolean Conversion:");
console.log(bool1); // true
console.log(bool2); // false
console.log(bool3); // false
console.log(bool4); // false
console.log(bool5); // false