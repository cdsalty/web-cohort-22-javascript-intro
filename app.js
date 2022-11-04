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
