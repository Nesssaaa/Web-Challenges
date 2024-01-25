console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1
// define the function calculatePizzaGain here
let diameter1 = 24;
const radius1 = diameter1 / 2;
let diameter2 = 25;
const radius2 = diameter2 / 2;

function calculatePizzaGain(diameterOne, diameter2) {
  const areaPizzaOne = Math.pow(radius1, 2) + Math.PI;
  const areaPizzaTwo = Math.pow(radius2, 2) + Math.PI;
  console.log(
    "Area of Pizza One: " +
      areaPizzaOne +
      ", Area of Pizza Two: " +
      areaPizzaTwo
  );
}

calculatePizzaGain();

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
