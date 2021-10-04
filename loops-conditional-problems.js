// Part A:
// ***1) Given the array,
// Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?
// 2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.  
//  4) Now what if the array was 
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this? 
// I would use the split method.

let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];

let temp = lunchArray[0];

let longest = lunchArray[0].length;

for (let i = 0; i < lunchArray.length; i++) {
  if (longest < lunchArray[i].length) {
    temp = lunchArray[i];
    longest = lunchArray[i].length;
  }
  else {
    temp = temp;
  }
}

console.log( "Part A: " + '"' + temp + '" is the longest word with "' + longest + '" charactters long.')

// Let lunchArray = ["Burger  Salad  Lasagna Sushi  Meatloaf"]



// Part B:              
// Write a function that returns elements on odd positions in a list. 

function odd() {
  let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let oddList = [];

  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(i)%2 != 0) {
      oddList.push(list[i]);
    }
  }
  return oddList;
}

console.log("Part B: " + odd());



// Part C:
// Function factorial(n) {
// }
// Compute the factorial of any given number.

function factorial(n) {
  let fact = 1;

  while(n != 0) {
    fact *= n;
    n--;
  }
  return fact;
}

console.log("Part C: 7's factorial is " + factorial(7));



// Part D:
// Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good. 

let mpg = 121

if (mpg <= 10) {
  console.log("Part D: mpg = " + mpg + ", Gas guzzler. (mpg <= 10)");
}
else if (mpg <= 16) {
  console.log("Part D: mpg = " + mpg + ", Planet still frowns upon this, and so does your wallet. (mpg 11-16)")
}
else if (mpg <= 20) {
  console.log("Part D: mpg = " + mpg + ", It’s palpable. (mpg 17-20)")
}
else if (mpg <= 29) {
  console.log("Part D: mpg = " + mpg + ", Atmosphere smiles at your decision. (mpg 21-29)")
}
else if (mpg <= 35) {
  console.log("Part D: mpg = " + mpg + ", Not many gas stops will be taken. (mpg 30-35)")
}
else if (mpg <= 119) {
  console.log("Part D: mpg = " + mpg + ", The fish of the sea smile at your conservation. (mpg 36-119)")
}
else if (mpg >= 120) {
  console.log("Part D: mpg = " + mpg + ", If you are using the Tom Ogle fuel system, props. (mpg >= 120)")
}