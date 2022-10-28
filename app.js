// Write a for loop that adds all numbers between 0 and 100

let sumOfNumbers = 0;
for (i = 0; i <= 100; i++) {
  console.log(i);
  console.log(sumOfNumbers);
  sumOfNumbers = i + sumOfNumbers;
  console.log(sumOfNumbers);
}

// First iteration:  Line 5: i = 0,  Line 6: sumOfNumbers = 0, Line 8: sumOfNumbers = 0 + 0 = 0
// Second iteration: Line 5: i = 1,  Line 6: sumOfNumbers = 0, Line 8: sumOfNumbers = 1 + 0 = 1
// Third iteration:  Line 5: i = 2,  Line 6: sumOfNumbers = 1,  Line 8: sumOfNumbers = 2 + 1 = 3

// And this continues until i=100. The final value of sumOfNumbers is 5050.

// ******* THE WHILE LOOP
let b = 100;
while (b > 0) {
  b--;
  console.log(`The new value of b is now ${b}`);
}

// ******* The DO WHILE LOOP.
// This is similar to the while loop, but the code block is executed at least once, even if the condition is false.
// The following will run while the value of 'c' is less than 20.
let c = 0;
do {
  console.log(`The value before we add to it. ${c}`);
  c++;
  console.log(`The new value after we add to it. ${c}`);
} while (c < 20);

// FIND THE LARGEST NUMBER IN AN ARRAY
let n = [10, 4, 54, 23, 100, 23, 5];
let big = n[0];
for (i = 0; i < n.length; i++) {
  // console.log(n[i]);
  if (n[i] > big) {
    console.log(`if ${n[i]} is greater than ${big}`);
    big = n[i];
    console.log(`then ${big} is the new value of big`);
  }
}
console.log(big);

// ***** Write a function which takes 2 parameters, a number and an array. If the given number in the first parameter is found in the given array which is the second parameter, print "number found" if not print "number not found".
// let n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const numArray = (x, array) => {
//   for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (x === array[i]) {
//       return "number found";
//     }
//   }
//   return "number not found";
// };
// console.log(numArray(40, n));

// function addNumbers(a, b) {
//   let c = a + b;
//   console.log(c);
// }

// Calculator Exercise
function simpleCalculator(a, b, o) {
  let c = 0;
  if (o == "+" || o == "plus" || o == "add") {
    c = a + b;
  } else if (o == "-") {
    c = a - b;
  } else if (o == "*") {
    c = a * b;
  } else if (o == "/") {
    c = a / b;
  } else {
    console.log("Dont know what you are doing");
  }
  return c;
}

// addnumbers(45,25);
// addnumbers(145,125);

// simpleCalculator(4, 5, "+");
// simplecalculator(4,15,"plus");
// simplecalculator(14,15,"add");
// simplecalculator(4,5,"-");
// simplecalculator(4,5,"*");
// simplecalculator(15,5,"/");
// simplecalculator(15,5,"$");
let answer = simpleCalculator(4, 5, "+");
console.log(answer);
