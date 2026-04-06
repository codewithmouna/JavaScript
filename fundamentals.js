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