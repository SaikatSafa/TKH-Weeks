// 1) Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
function numbers(i) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
console.log("Part 1:")
numbers();
console.log("");



// 2) Using a while loop, return an array that contains all odd numbers between 3 and 103
let oddNums = [];
let i = 1;

while (i != 103) {
  i += 2;
  oddNums.push(i)
}

console.log("Part 2: " + oddNums);
console.log("");



// 3) arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop. 
function arraySum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log("Part 3: 1 + 2 + 3 + 4 + 5 + 6 + 7 = " + arraySum([1, 2, 3, 4, 5, 6, 7]));
console.log("");



// 4) Use a loop to display the numbers 9 to 0 in descending order.
console.log("Part 4:")
for (let i = 9; i >= 0; i--) {
  console.log(i);
}
console.log("");



// 5) Write a function computing the factorial of n
function factorial(n) {
  let fact = 1;
  while (n != 0) {
    fact *= n;
    n--;
  }
  return fact;
}
console.log("Part 5: 7's factorial is " + factorial(7));
console.log("");


// 6) Write a function using a for loop that returns the sum of all numbers from 1 to n. 
function sum() {
  let n = 10;
  let sum = 0;
  
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("Part 6: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = " + sum())
console.log("");



// 7) Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ
function replaceZ() {
  let string = "donuts";
  let stringArray = [];

  for (let i = 0; i < string.length; i++) {
    if (i%2 == 0+1) {
      stringArray.push("Z")
    }
    else {
      stringArray.push(string[i]);
    }
  }
  return stringArray;
}
console.log("Part 7: " + replaceZ());
