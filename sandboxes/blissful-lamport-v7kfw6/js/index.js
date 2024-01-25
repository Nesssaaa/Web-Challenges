console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const ageBadnessSum = Number(data.age) + Number(data.badness);
  console.log(ageBadnessSum);
  console.log(data.firstName);

  console.log(
    "The age-badness-sum of" + data.firstName + " is " + ageBadnessSum,
  );

  event.target.elements.firstName.focus(); //event.target.firstName.focus();
  event.target.reset(); //form.reset();
});
