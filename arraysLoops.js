// Activity1
 let favFilms = [
     "Django",
     "Deadpool",
     "Deadpool 3",
     "Spider-man Far from home",
     "Superbad"

 ]
 favFilms.push("Being John Malkovich")
 favFilms.push("No country for old men")

console.log(favFilms)


// Activity 2
const rndNum = new Set();

while(rndNum.size !== 8) {
  rndNum.add(Math.floor(Math.random() * 50) + 1);
}

console.log(rndNum)


// Activity 3
for(var i = 9; i >= 1; i--) {
    console.log(i);
}

// Activity 4
let showings = [
        "Bat-Man",
        "Scooby Doo: Spooky Island",
        "Blue Story",
        "Avengers Endgame"
    ];

        for(let i = 0; i < showings.length; i++){

        console.log(showings[i])
    }

    if(showings.indexOf("Ghostbusters") !== -1)  
        {  
         console.log("Yay its Ghostbusters")  
        }   
        else  
        {  
         console.log("Boo! We want Ghostbusters")  
        }  

// Activity 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates and checks six random numbers
for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(1, 30);
    
    if (randomNumber % 7 === 0) {
        console.log(`${randomNumber} is divisible by 7.`);
    } else {
        console.log(`${randomNumber} is not divisible by 7.`);
    }
}

// Activity 6
let bobsFollowers = ["Greg", "Bob", "Josh", "Dave"];
let hannahsFollowers = ["Josh", "Charlie", "Alice", "Dave"];

//Nested Loop (loopinside another loop) finds matching followers
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`${bobsFollowers[i]} is a matching follower.`);
        }
    }
}


// Activity 7
//For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Logs 0, 1, 2, 3, 4
}
//Pros: Simple when all iterations are known.
//Cons: Not very flexible when all iterations are not known.

//While Loop
let i = 0;
while (i < 5) {
    console.log(i); // Logs 0, 1, 2, 3, 4
    i++;
}
//Pros: Useful when all iterations are not known.
//Cons: Possibility of endless loop and crashing your computer.
