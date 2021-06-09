// 1. Declare and assign the variables here:
let spaceShuttleName = "Determination";
let shuttleSpeed_MPH = 17500; 
let distToMars_KM = 225000000;
let distToMoon_KM = 384400; 
let milesPer_KM = .621; 
let numFormatter = Intl.NumberFormat();




// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log("Type check for each variable.")
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed_MPH);
console.log(typeof distToMars_KM);
console.log(typeof distToMoon_KM);
console.log(typeof milesPer_KM);

console.log()

// Code your solution to exercises 3 and 4 here:

let milesToMars = distToMars_KM * milesPer_KM;
// milesToMars = numFormatter.format(milesToMars);

let hoursToMars = milesToMars / shuttleSpeed_MPH;
// hoursToMars = numFormatter.format(hoursToMars);

let daysToMars = hoursToMars / 24;
// daysToMars = numFormatter.format(daysToMars);

console.log(`${spaceShuttleName} will take ${daysToMars} days to reach Mars.`);

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

console.log();

// Code your solution to exercise 5 here:

let milesToMoon = distToMoon_KM * milesPer_KM;
let hoursToMoon = milesToMoon / shuttleSpeed_MPH;
let daysToMoon = hoursToMars / 24;
console.log(`${spaceShuttleName} will take ${daysToMoon} days to reach the Moon.`)

console.log("I wish I were a bird/")