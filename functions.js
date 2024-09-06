//Activity 1
let factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(33));

// Activity 2
let orderCount = 0;

let drink = "Fanta";

const takeOrder = (topping, drink) => {
    console.log(`Order #${orderCount}: Pizza with ${topping} and a ${drink} to wash it all down with, please.`);
    orderCount++;
}

takeOrder("Pineapple", "Fanta");
takeOrder("Pepperoni", "Coke");
takeOrder("Ham", "Sprite");

//Activity 3
