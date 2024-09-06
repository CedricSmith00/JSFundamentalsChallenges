//Activity 1
let age = 18;

if (age > 17) {
    console.log("Yes I can serve you");
} else {
    console.log("You aren't old enough");
}

//Activity 2
let topping = "Pepperoni"; // Change this value to test different toppings

switch (topping) {
    case "Cheese":
    case "Tomato":
    case "Mushrooms":
        console.log("These are important ingredients for my pizza.");
        break;
        
    case "Pepperoni":
    case "Onions":
        console.log(`I don’t mind having ${topping} on my pizza.`);
        break;

    default:
        console.log(`${topping} should not be on a pizza.`);
        break;
}

//Activity 3
let password = "CodeNation24";

if (password.length < 8) {
    console.log("The password is too short.");
} else {
    console.log(password);
}
//Activity 4
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
} else if (num % 3 === 0) {
    console.log("fizz");
} else if (num % 5 === 0) {
    console.log("buzz");
} else {
    console.log(num);
}

//Activity 5


//Activity 6
let time = 9; // Replace with the current time in 24-hour format (e.g., 7 for 7 AM, 13 for 1 PM)
let placeOfWork = "Office";
let townOfHome = "Hometown";

if (time >= 7 && time < 9) {
    console.log(`At ${time}:00, I’m at home in ${townOfHome}.`);
} else if (time >= 9 && time < 17) {
    console.log(`At ${time}:00, I’m at work in ${placeOfWork}.`);
} else if (time >= 8 && time < 9) {
    console.log(`At ${time}:00, I’m commuting.`);
} else {
    console.log(`At ${time}:00, I'm not in the predefined locations.`);
}

//Activity 7



//Activity 8
let word = "racecar"; 

if (word.charAt(0) === word.charAt(word.length - 1)) {
    console.log(true);
} else {
    console.log(false);
}


//Activity 9