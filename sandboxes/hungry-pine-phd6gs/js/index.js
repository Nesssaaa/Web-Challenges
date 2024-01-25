const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

//output= true;
//console.log ("you are a teen")

button.addEventListener("click", () => {
  const age = Number(input.value);
  console.log(age);
  if (age >= 13 && age <= 17) {
    output.innerHTML = "You are a teen";
  } else {
    output.innerHTML = "You are not a teen";
  }
  // Beware: input values are *always* strings!

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
