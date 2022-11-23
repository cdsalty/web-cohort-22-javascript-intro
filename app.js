// Write a for loop that adds all numbers between 0 and 100
/*
let sumOfNumbers = 0;
for (i = 0; i <= 100; i++) {
  console.log(i);
  console.log(sumOfNumbers);
  sumOfNumbers = i + sumOfNumbers;
  console.log(sumOfNumbers);
}
*/
// First iteration:  Line 5: i = 0,  Line 6: sumOfNumbers = 0, Line 8: sumOfNumbers = 0 + 0 = 0
// Second iteration: Line 5: i = 1,  Line 6: sumOfNumbers = 0, Line 8: sumOfNumbers = 1 + 0 = 1
// Third iteration:  Line 5: i = 2,  Line 6: sumOfNumbers = 1,  Line 8: sumOfNumbers = 2 + 1 = 3

// And this continues until i=100. The final value of sumOfNumbers is 5050.
/*
// ******* THE WHILE LOOP
let b = 100;
while (b > 0) {
  b--;
  console.log(`The new value of b is now ${b}`);
}
*/

/*
// ******* The DO WHILE LOOP.
// This is similar to the while loop, but the code block is executed at least once, even if the condition is false.
// The following will run while the value of 'c' is less than 20.
let c = 0;
do {
  console.log(`The value before we add to it. ${c}`);
  c++;
  console.log(`The new value after we add to it. ${c}`);
} while (c < 20);
*/

/*

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
*/
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

/*

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


*/

/*
let genres = ["Action", "Comedy", "Horror"];
let authors = ["Author 1", "Author 2", "Author 3"];
//json
let books = [
  {
    bookName: "Game of Thrones",
    author: {
      firstName: "Author first name1",
      lastName: "Author last name1",
      bookCount: 100,
      awards: [
        {
          awardName: "Nobel ",
          yearAwarded: "2000",
        },
      ],
    },
    genre: "Action",
  },
  {
    bookName: "Harry Potter",
    author: {
      firstName: "Author first name2",
      lastName: "Author last name2",
      bookCount: 200,
      awards: [
        {
          awardName: "Nobel ",
          yearAwarded: "2010",
        },
        {
          awardName: "Nobel 2 ",
          yearAwarded: "2020",
        },
      ],
    },
    genre: "Thriller",
  },
];
// console.log(books[0].author.lastName)
//Author xyz has following awards
//Award name = blah blah
for (i = 0; i < books.length; i++) {
  console.log("Author " + books[i].author.firstName + " has following awards");
  for (j = 0; j < books[i].author.awards.length; j++) {
    console.log("Award name = " + books[i].author.awards[j].awardName);
  }
}
*/

// TODO: for next class
// 1) Given two arrays a and b merge them in to a single array. a and b be could be of different lengths
// example:
// let a = [4, 2, 6, 0, 8];
// let b = [9, 4, 3, 5, 12, 33, 4];
// output c = [4,2,6,0,8,9,4,3,5,12,33,4]

// let c = [];
// const mergeArray = () => {
//   let x = a.length > b.length ? a.length : b.length;
//   // let x = 0;
//   // THE ABOVE IS THE SAME AS BELOW
//   if (a.length > b.length) {
//     x = a.length;
//   } else {
//     x = b.length;
//   }
//   for (let i = 0; i < x; i++) {
//     if (i < a.length) {
//       c.push(a[i]);
//     }
//     if (b[i] != undefined) {
//       c.push(b[i]);
//     }
//   }
//   return c;
// };
// mergeArray();

// let c = a.concat(b);
// console.log(c);

/*

2) Given two arrays a and b find the product of elements. a and b be could be of different lengths. if there is no element found in the other array multiply by 1
example:
a = [4,2,6,0,8]
b = [9,4,3,5,12,33,4]
output c = [36,8,18,0,96,33,4] note the last two elements 33 and 4 since there are no elements for indexes 5 and 6 in array a

*/
// let a = [4, 2, 6, 0, 8];
// let b = [9, 4, 3, 5, 12, 33, 4];
// let idx = 0;
// let c = [];
// if (a.length < b.length) {
//   for (i = 0; i < a.length; i++) {
//     c.push(a[i] * b[idx]);
//     idx++;
//   }
//   for (j = idx; j < b.length; j++) {
//     c.push(b[j] * 1);
//   }
//   return c;
// }

// function product(a, b) {
//   // setting up basic vars
//   let i;
//   let j;
//   let idx = 0;
//   let c = [];

//   // if b is longer than a:
//   if (a.length < b.length) {
//     for (i = 0; i < a.length; i++) {
//       c.push(a[i] * b[idx]);
//       idx++;
//     }
//     for (j = idx; j < b.length; j++) {
//       c.push(b[j] * 1);
//     }
//   }

//   // if a is longer than b:
//   else if (a.length > b.length) {
//     for (i = 0; i < b.length; i++) {
//       c.push(b[i] * a[idx]);
//       idx++;
//     }
//     for (j = idx; j < a.length; j++) {
//       c.push(a[j] * 1);
//     }
//   }

//   //if they are equal
//   else {
//     for (i = 0; i < b.length; i++) {
//       c.push(b[i] * a[idx]);
//       idx++;
//     }
//   }

//   console.log("array a is " + a);
//   console.log("array b is " + b);
//   console.log("product of a and b is " + c);
// }
// a1 = [4, 2, 6, 0, 8];
// b1 = [9, 4, 3, 5, 12, 33, 4, 55, 66, 7, 8];

// a2 = [2, 4, 5, 6, 7];
// b2 = [3, 5, 6];

// a3 = [1, 2, 5];
// b3 = [2, 4, 7];

// console.log(product(a1, b1));
// product(a1, b1);
// product(a2, b2);
// product(a3, b3);

/*
function product(a,b)
  {
    // setting up basic vars
    let i;
    let j;
    let idx = 0;
    let c = [];
    
    // if b is longer than a:
    if(a.length<b.length)
    {
      for(i = 0; i<a.length; i++)
      {
        c.push(a[i]*b[idx]);
        idx++;
      }
      for (j = idx;j<b.length; j++)
      {
        c.push(b[j]*1);
      }
    }
      
    // if a is longer than b:  
    else if(a.length>b.length)
    {
     for(i = 0; i<b.length; i++)
      {
        c.push(b[i]*a[idx]);
        idx++;
      }
      for (j = idx;j<a.length; j++)
      {
        c.push(a[j]*1);
      }      
    }
      
    //if they are equal
    else
    {
     for(i = 0; i<b.length; i++)
      {
        c.push(b[i]*a[idx]);
        idx++;
      }      
    }
    
    console.log("array a is " + a);
    console.log("array b is " + b);
    console.log("product of a and b is " + c);
    return c;
  }
a1 = [4,2,6,0,8];
b1 = [9,4,3,5,12,33,4,55,66,7,8];

a2 = [2,4,5,6,7];
b2 = [3,5,6];

a3 = [1,2,5];
b3 = [2,4,7];

product(a1,b1);
product(a2,b2);
product(a3,b3);

*/
/*
let b = [1, 4, 5, 2];
let a = [2, 3, 2, 3];
let c = [];
let x = a.length > b.length ? a.length : b.length;
for (i = 0; i < x; i++) {
  let aValue = i >= a.length ? 1 : a[i];
  let bValue = i >= b.length ? 1 : b[i];
  let product = aValue * bValue;
  c.push(product);
}
console.log(c);


*/

// Write a function name printPyramid that takes two parameters. The first parameter is a number between 1 through 9. The second parameter is either 0 or 1.

// if the second parameter is a 2, the funciton woule print a pyramid of numbers. for example, if the parameters are passerd as printPyramid(3, 1), it should print this...
// 1
// 22
// 333
// if the parameters are passed as (3,0) it shold print like
// 333
// 22
// 1

// function printPyramid(n, d) {
//   let spaces = "";
//   let row = "";
//   for (i = 1; i <= n; i++) {
//     console.log({ i });
//     row = "";
//     spaces = "";
//     for (j = 1; j <= n - i; j++) {
//       console.log({ j });
//       spaces += " ";
//       console.log({ spaces });
//     }
//     for (k = 1; k <= i; k++) {
//       console.log({ k });
//       row = row + i + " ";
//       console.log(row);
//     }
//     console.log(spaces + row);
//   }
// }
// printPyramid(3, 0);

// Write a function that will return 1 through 100. But for multiples of 3, it will return "Fizz" instead of the number and for the multiples of 5, it will return "Buzz". For numbers which are multiples of both 3 and 5, it will return "FizzBuzz".

// [x] function that will loop through the numbers 1 - 100;
// [] if a multiple of 3, return "Fizz"
// [] if a multiple of 5, return "Buzz"
// [] if both, return "FizzBuzz"
/*
const FizzBuzz = () => {
  for (i = 0; i <= 100; i++) {
    if ([i] % 3 == 0) {
      console.log([i] + " Fizz");
    }
    if (i % 5 == 0) {
      console.log([i] + "Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log([i] + "FizzBuzz");
    } else {
      console.log([i]);
    }
  }
};
console.log(FizzBuzz());
*/

/* Given a sentence, replace a specific word with another word  

example: replaceWord(inputSentence, wordToReplace, replaceWord)
"Dog barks", "Dog", "Cat" ----> will return Cat barks

let s = "Dog barks";
let a = s.split(" ");
i = 0;
// a[0]
if(a[i] === wordToReplace){
  a[i] = replacedWord;
}
a = [ "Cat", "Barks"]
*/

/*  ------------------------------------------------------------------------------------------------------
let sentence = "The cat is barking";
let wordToReplace = "cat";
let newReplacedWord = "dog";
const replaceWord = (sentenceToSearch) => {
  let individualWordsOfSentence = sentence.split(" ");
  let lengthOfWords = individualWordsOfSentence.length;
  console.log(lengthOfWords);
  console.log(individualWordsOfSentence);
};
replaceWord(sentence);



let m = new Map([
  [1, "one"],
  [2, "two"],
]);
let x = m.get(2);
console.log(m);

// for(cont x of a) {
//   console.log(x)
// }

// Covered: map, filter, find, forEach, forOf

let s = "DigitalCrafts";
for(const c of s) {
  console.log(c)
}

*/

/*  ------------------------------------------------------------------------------------------------------
// Write a function to see if a given sentence is a pangram (sentence that contains all the letters of the alphabet)
// "The quick brown fox jumps over the lazy dog." // true
// "This is not a pangram." // false
function isPangram(string) {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    console.log(i);
    if (strArr.indexOf(alphabet[i]) < 0) {
      // console.log(strArr.indexOf(alphabet[i]));
      console.log(strArr.indexOf());
      return false;
    }
  }
  return true;
}
// if a certain character is not found in strArr (the indexOf method returns -1), the loop will end and the function will return false.

// isPangram("The quick brown fox jumps over the lazy dog");

// - every key in a map is unique; anything else will be overwritten
// let bookMap = new Map();
// for(const book of books){
//   bookMap.set(book.bookName, book)
// }
// console.log(bookMap.get("Harry Potter"));
// it comes with a .has, .get, .set method that works with it.

*/

/*  ------------------------------------------------------------------------------------------------------
Given two integer arrays, find the numbers that is found in both arrays. The resulting output would be the array with all those numbers
Example:
a = [30, 2, 3, 5, 90]
b = [9, 2, 6, 5, 100]
*/

/*  ------------------------------------------------------------------------------------------------------
Given array of number 1 through n, find the missing number in the array.
Example: a = [1,2,4,6,7,8,9] --> returns [3,5]
*/

// Given two integer arrays, find the numbers that is found in both arrays. the resulting output would be the array with all those numbers
// Example:
// a = [30,2,3,5,90]
// b = [9,2,6,5,100]
// output c = [2,5]
// take two arrays, a and b and create another array with the numbers that are the same from each array

/*  ------------------------------------------------------------------------------------------------------
let a = [30, 2, 3, 5, 90];
let b = [9, 2, 6, 5, 100];

let c = []; //new array with the resulting output

function numFind(a, b) {
  //dont forget the parameters
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        c.push(a[i]);
      }
    }
  }
  console.log(c);
}

// numFind([20, 30, 40, 50], [2, 2, 2, 50]);

*/

// let a = "hello";
// let b = [2, 3, 4];
// let m = new Map();
// m.set("A", "One");
// m.set(2, "two");
// m.set("b", "three");

// console.log(m.get("b"));
// console.log(m.has("z")); // checks if it has z

/*  ------------------------------------------------------------------------------------------------------
function findMissing(range) {
  let r = new Map(); //map for the range
  let f = []; //empty array for answer
  for (let i = 0; i < range.length; i++) {
    //map all elements
    r.set(range[i], range[i]);
  }
  let top = Math.max(...r.values());
  console.log("Highest value is: " + top); //finding top value of our list
  for (let i = 1; i <= top; i++) {
    if (r.has(i)) {
      ///check if it has that number already
      continue;
    } else {
      f.push(i);
    }
  }
  console.log("\nMap of initial array: \n");
  console.log(r);
  console.log(" ");
  console.log("Values missing from range : " + f + "\n");
}
a = [1, 3, 4, 5, 9, 11, 16];
findMissing(a);
*/
/*------------------------------------------------------------------------------------------------------
// new Map continued....
const findMissing = (a) => {
  let x = new Map();
  let big = 0;
  let output = [];
  for (let n in a) {
    //x.set(1,1) , big = 1
    //x.set(4,4) , big = 4
    //x.set(2,2) , big = 4
    //x.set(6,7) , big = 6
    //x.set(7,7) , big = 7
    //x.set(8,8) , big = 8
    x.set(a[n], a[n]);
    if (a[n] > big) {
      big = a[n];
    }
  }
  for (let i = 1; i <= big; i++) {
    if (!x.has(i)) {
      output.push(i);
    }
  }
  return output;
};

let a = [1, 4, 2, 6, 7, 8];

let output = findMissing(a);
console.log(output);
*/

/*  ------------------------------------------------------------------------------------------------------
var singleNumber = function (nums) {
  const nMap = new Map();
  for (let i in nums) {
    const n = nums[i];
    if (nMap.has(n)) {
      nMap.delete(n);
    } else {
      nMap.set(n, n);
    }
  }
  const [singleNumber] = nMap.keys();
  return singleNumber;
};

const returnedValue = singleNumber([4, 4, 1, 2, 9, 1, 2]);


*/

/*  ------------------------------------------------------------------------------------------------------


1. Create a Map called "mexico" with the following entries:
  - id -> 24 
  - name -> "Mexico"
  - capital -> "Mexico City"
  - neighbours -> ["USA", "Guatemala", "Belize"]
2. Print out "mexico" to the terminal ------------> console.log(mexico.get('name'));
3. Change "id" to be 25
4. Add "Honduras" to the list of neighbours to "mexico"
5. Print out "mexico" to the terminal again
*/

let mexico = new Map([
  ["id", "24"],
  ["name", "Mexico"],
  ["capital", "Mexico City"],
  ["neighbors", ["USA", "Guatemala", "Belize"]],
]);

mexico.get("id");
mexico.set("Atlanta", "Georgia");
console.log(mexico.get("name"));
mexico.get("neighbors").push("Honduras");
console.log(mexico);
/*  ------------------------------------------------------------------------------------------------------



*/
