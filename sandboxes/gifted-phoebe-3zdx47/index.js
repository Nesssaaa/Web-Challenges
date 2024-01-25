console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword =
  "password1234" === SUPER_SECRET_PASSWORD
    ? "Welcmome! You are logged in as Brunhilde1984."
    : "Access denied!";

console.log(receivedPassword);

// Part 2: Even / Odd
const number = 14;

if (number % 2 == 0) {
  console.log("Even Number!");
} else {
  console.log("Odd Number");
}
// Part 3: Hotdogs
const numberOfHotdogs = 1000000;

if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1);
} else {
  console.log(numberOfHotdogs * 0.1);
}

// Part 4: Daytime
const currentHour = 20;

const statement = currentHour < 17 ? "Still need to learn" : "Partytime";

console.log(statement);

// Part 5: Greeting
const isCoach = true;
const name = "Jessica";

const greeting = "Hello " + (name === "Jessica" && isCoach ? "Coach" : name);

console.log(greeting);
