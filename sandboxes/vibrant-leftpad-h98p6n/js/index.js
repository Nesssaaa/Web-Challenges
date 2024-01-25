console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();

  const newEntry = document.createElement("li");

  newEntry.classList.add("toast-container__message");
  newEntry.innerHTML = "I'm a pop-up-message";

  toastContainer.append(newEntry);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
