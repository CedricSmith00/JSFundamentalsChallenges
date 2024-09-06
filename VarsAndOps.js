//Activity 1
let name = "Jay";
 let age = 23;
 let favDrink = "Bigga Fruit Punch";

 console.log(`Hello,name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

 //Activity 2
 let breakfast = "Tea and Toast";
 let lunch = "Ramen Noodles";
 let dinner = "Fajita wraps and rice"

 console.log(`To start the day I ate ${breakfast}. At Luch I opted for ${lunch}. To end the day i had ${dinner}.`)

//Activity 3
let date1 = new Date("09/05/2024");
let date2 = new Date("09/18/2024");

let DifferenceInTime =
date2.getTime() - date1.getTime();

let DifferenceInDays = 
Math.round (DifferenceInTime / (1000 * 3600 * 24));

 console.log("Days from today to my birthdate:\n" + date1.toDateString() + " and " + date2.toDateString() + " is: " + DifferenceInDays + " days");

 //Activity 4
 let space1 = "X";
let space2 = "O";
let space3 = "";
let space4 = "X";
let space5 = "X";
let space6 = "";
let space7 = "O";
let space8 = "";
let space9 = "";

// Construct the board using template literals
let board = `
 ${space1} | ${space2} | ${space3} 
-----------
 ${space4} | ${space5} | ${space6} 
-----------
 ${space7} | ${space8} | ${space9} 
`;

console.log(board);