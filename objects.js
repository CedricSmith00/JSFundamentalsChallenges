//Activity 1
let person = {
    name: "Jay",
    age: "23",
    favSongs: "Neighbors, Darkside Freestyle, A13",
    sayHi: function() {
        return `Hello, my name is ${this.name}`;
    }
}

console.log(person.age)
console.log(person.favSongs)
console.log(person.sayHi());

//Activity 2
let pet = {
    name: "Fluffy",
    typeOfPet: "Rabbit",
    age: "2",
    colour: "White",
    eat: function() {
        return `${this.name} is eating`;
    },
    drink: function() {
        return `${this.name} is drinking`;
    }
}


console.log( pet.name , pet.typeOfPet , pet.age , pet.colour)
console.log(pet.eat());
console.log(pet.drink());


//Activity 3
let coffeeShop = {
    branch: "Toxteth",
    drinks: {
        coffee: 3.00,
        tea: 2.50,
        latte: 4.00
    },
    food: {
        sandwich: 5.50,
        cake: 4.00,
        salad: 6.00
    },
    drinksOrdered: function(...items) {
        let total = 0;
        let orderDetails = "Your drinks order is: ";
        for (let item of items) {
            if (this.drinks[item]) {
                orderDetails += `${item} ($${this.drinks[item]}), `;
                total += this.drinks[item];
            }
        }
        orderDetails += `Total: $${total.toFixed(2)}`;
        return orderDetails;
    },
    foodOrdered: function(...items) {
        let total = 0;
        let orderDetails = "Your food order is: ";
        for (let item of items) {
            if (this.food[item]) {
                orderDetails += `${item} ($${this.food[item]}), `;
                total += this.food[item];
            }
        }
        orderDetails += `Total: $${total.toFixed(2)}`;
        return orderDetails;
    }
}

console.log(coffeeShop.drinksOrdered('coffee', 'latte'));
console.log(coffeeShop.foodOrdered('sandwich', 'cake'));