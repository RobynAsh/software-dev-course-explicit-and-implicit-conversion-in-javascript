/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//Part 1

let result = Number("5") - 2; // Explicitly changes "5" to a number so the result is always a number
console.log("The result is: " + result);

let isValid = Boolean("false"); //Already explicit. Not sure what is needed here? The code will run exactly as expected and give an output of "This is Valid" It has already made a string and explicit boolean and because the string is not empty is a truthy
if (isValid) {
  console.log("This is valid!");
}

let age = Number("25"); //Explicitly changes "25" string to a number so the results of totalAge are able to perform as intended and produce 30 instead of 255
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Part 2

// Implicit

let apples = 5;
let fruitType = "apples"
console.log("Before: 'apples' is a number with value: " + apples);

let combined = "There are " + apples + " " + fruitType + ".";
console.log("After: 'combined' is a string with a value in it: " + combined);

//The code implicitly know to combine the number and the string together in one string. I don't need to tell it. 

// Explicit

let wordText = "hello";
console.log("What we start with (text): " + wordText);

let changedToNumber = Number(wordText);
console.log("What it becomes when we try to make it a number: " + changedToNumber)

//The code explicitly tells it to convert from a string to a number. The string is a word so it can not convert and results in NaN. 