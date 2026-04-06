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



// 1. Unary, Binary, Operand
let x = 5;

// Unary operator (one operand)
x = -x;
console.log("Unary (-x):", x); // -5

// Binary operator (two operands)
let a = 10, b = 3;
let sum = a + b;
console.log("Binary (a + b):", sum); // 13

// Operand = values operators act on
// In (a + b) → a and b are operands


// 2. Maths Operators
console.log("\nMaths:");
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus
console.log(a ** b); // exponentiation


// 3. String concatenation with +
let str1 = "Hello";
let str2 = "World";
console.log("\nString Concatenation:");
console.log(str1 + " " + str2); // Hello World


// 4. Numeric conversion, unary +
let numStr = "100";
let converted = +numStr;
console.log("\nUnary + Conversion:");
console.log(converted, typeof converted); // 100 number


// 5. Operator precedence
let result = 2 + 3 * 4;
console.log("\nOperator Precedence:");
console.log(result); // 14 (* happens before +)

let result2 = (2 + 3) * 4;
console.log(result2); // 20


// 6. Assignment
let value1 = 10;
value1 = value1 + 5;
console.log("\nAssignment:");
console.log(value1); // 15


// 7. Modify-in-place
let n = 10;
n += 5;  // same as n = n + 5
n *= 2;  // same as n = n * 2
console.log("\nModify-in-place:");
console.log(n); // 30


// 8. Increment / Decrement
let count = 5;

console.log("\nIncrement/Decrement:");
console.log(++count); // pre-increment → 6
console.log(count++); // post-increment → 6 (then becomes 7)
console.log(count);   // 7

console.log(--count); // pre-decrement → 6
console.log(count--); // post-decrement → 6 (then becomes 5)
console.log(count);   // 5


// 9. Bitwise operators
let p = 5;  // 101
let q = 3;  // 011

console.log("\nBitwise:");
console.log(p & q); // AND → 1
console.log(p | q); // OR → 7
console.log(p ^ q); // XOR → 6
console.log(~p);    // NOT → -6
console.log(p << 1); // left shift → 10
console.log(p >> 1); // right shift → 2


// 10. Comma operator
let c = (1, 2, 3);
console.log("\nComma:");
console.log(c); // 3 (last value)

let d = (a = 1, b = 2, a + b);
console.log(d); // 3


// comparisons

// 1. Boolean is the result
console.log("Boolean Results:");
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == 5);  // true
console.log(5 != 5);  // false


// 2. String comparison (lexicographical)
console.log("\nString Comparison:");
console.log("apple" > "banana"); // false
console.log("cat" > "car");      // true (t > r)
console.log("Z" > "a");          // false (uppercase < lowercase in ASCII)


// 3. Comparison of different types
console.log("\nDifferent Types:");
console.log("5" > 2);   // true  ("5" → 5)
console.log("01" == 1); // true  ("01" → 1)
console.log(true == 1); // true
console.log(false == 0); // true


// 4. Strict equality (===)
console.log("\nStrict Equality:");
console.log(5 === "5");  // false (different types)
console.log(5 === 5);    // true
console.log(null === undefined); // false


// 5. Comparison with null and undefined
console.log("\nnull & undefined:");

console.log(null == undefined);  // true (special rule)
console.log(null === undefined); // false

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (null → 0)

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// conditionals

// 1. if statement
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}


// 2. Boolean conversion
console.log("\nBoolean Conversion:");

if ("hello") {   // truthy
  console.log("This runs because string is truthy");
}

if (0) {         // falsy
  console.log("This will NOT run");
}


// 3. else clause
let marks = 40;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// 4. else if (multiple conditions)
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// 5. Conditional operator (ternary ?)
let result = (age >= 18) ? "Adult" : "Minor";
console.log("\nTernary:");
console.log(result);


// 6. Multiple ? (nested ternary)
let message = (score >= 90) ? "A" :
              (score >= 70) ? "B" :
              (score >= 50) ? "C" : "Fail";

console.log("\nNested Ternary:");
console.log(message);


// 7. Non-traditional use of ?
let company = "TCS";

// using ? as alternative to if
(company === "TCS") ? console.log("Good Company") : console.log("Other Company");

// multiple actions (not recommended but possible)
let login = true;

login 
  ? (console.log("Welcome"), console.log("Dashboard loaded"))
  : console.log("Please login");


  // logical-operators

// 1. OR (||)
console.log("OR (||):");

// basic usage
console.log(true || false);  // true
console.log(false || false); // false

// OR finds first truthy value
let result1 = 0 || "" || null || "Hello" || 5;
console.log(result1); // "Hello"

let result2 = null || undefined || 0;
console.log(result2); // 0 (last value if all falsy)


// 2. AND (&&)
console.log("\nAND (&&):");

// basic usage
console.log(true && true);   // true
console.log(true && false);  // false

// AND finds first falsy value
let result3 = 1 && 2 && 0 && 5;
console.log(result3); // 0

let result4 = 1 && 2 && 3;
console.log(result4); // 3 (last value if all truthy)


// 3. NOT (!)
console.log("\nNOT (!):");

// basic usage
console.log(!true);  // false
console.log(!false); // true

// converts to boolean and reverses
console.log(!0);     // true (0 is falsy)
console.log(!"hi");  // false (non-empty string is truthy)

// double NOT (!!) → boolean conversion
console.log(!!"hello"); // true
console.log(!!0);       // false


// 4. Real-world examples

// default value using ||
let userName = "" || "Guest";
console.log("\nDefault Name:", userName); // Guest

// condition check using &&
let isLoggedIn = true;
isLoggedIn && console.log("Welcome user");

// combine multiple conditions
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed entry");
}

// or-precedence

// 1. Comparison with ||

// OR returns first truthy value (not always boolean!)
let result1 = (5 > 3) || (2 > 10);
console.log(result1); // true

// Mixing values
let result2 = 0 || 100;
console.log(result2); // 100 (not true/false)

// With comparison
let age = 16;
let canEnter = (age > 18) || (age === 16);
console.log(canEnter); // true


// ⚠️ Common mistake
let x = 10;

// WRONG ❌
if (x === 5 || 10) {
  console.log("This runs always!");
}

// CORRECT ✅
if (x === 5 || x === 10) {
  console.log("Correct condition");
}



// 2. Operator Precedence

// && has higher precedence than ||
let result3 = true || false && false;
console.log(result3); 
// true (because false && false → false, then true || false)

// Using brackets to change order
let result4 = (true || false) && false;
console.log(result4); // false


// Comparison + logical operators
let result5 = 5 > 3 && 10 > 5;
console.log(result5); // true

let result6 = 5 > 3 || 10 < 5 && false;
console.log(result6);
// true (because && evaluated first)


// 3. Real-world example
let userRole = "admin";

// Access if admin OR editor
if (userRole === "admin" || userRole === "editor") {
  console.log("Access granted");
}

// loops

// 1. while loop
console.log("while loop:");

let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}


// 2. do...while loop
console.log("\ndo...while loop:");

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 3);


// 3. for loop
console.log("\nfor loop:");

for (let k = 1; k <= 3; k++) {
  console.log(k);
}


// 4. Breaking the loop
console.log("\nbreak:");

for (let x = 1; x <= 5; x++) {
  if (x === 3) {
    break; // stops loop completely
  }
  console.log(x);
}


// 5. Continue to next iteration
console.log("\ncontinue:");

for (let y = 1; y <= 5; y++) {
  if (y === 3) {
    continue; // skip this iteration
  }
  console.log(y);
}


// 6. Labels for break/continue
console.log("\nlabels:");

outerLoop: // label
for (let a = 1; a <= 3; a++) {
  for (let b = 1; b <= 3; b++) {
    
    if (a === 2 && b === 2) {
      break outerLoop; // breaks outer loop
    }

    console.log(`a=${a}, b=${b}`);
  }
}

// switch

// 1. Syntax
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}


// 2. Example
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;

  case "user":
    console.log("Limited access");
    break;

  default:
    console.log("No access");
}


// 3. Grouping of case
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("This is a fruit");
    break;

  case "carrot":
  case "potato":
    console.log("This is a vegetable");
    break;

  default:
    console.log("Unknown item");
}


// 4. Type matters (strict comparison ===)
let num = "1";

switch (num) {
  case 1:
    console.log("Number 1");
    break;

  case "1":
    console.log("String 1");
    break;

  default:
    console.log("No match");
}