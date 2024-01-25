console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const productButton = document.querySelector(".product__buy-button");

productButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("The price of " + name + " is " + price);
});

const body = document.querySelector("body");

function newTeaser(
  name,
  description,
  category1,
  category2,
  category3,
  price,
  imageSrc
) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("product");
  newArticle.innerHTML = `<div class="product__body">
  <div class="product__text-container">
    <h2 class="product__name">${name}</h2>
    <ul class="product__categories">
      <li class="product__category">${category1}</li>
      <li class="product__category">${category2}</li>
      <li class="product__category">${category3}</li>
    </ul>
    <p class="product__description">
    ${description}
    </p>
  </div>
  <div class="product__image-container">
    <img
      class="product__image"
      src=${imageSrc}
      alt=""
    />
  </div>
</div>
<footer class="product__footer">
  <span class="product__price">${price}</span>
  <button type="button" class="product__buy-button2">Buy</button>
</footer>`;

  body.append(newArticle);
}

newTeaser(
  "Queen Angelfish",
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.",
  "Freshwater",
  "Large aquarium",
  "Plankton Diet",
  "149,99 €",
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640"
);

newTeaser(
  "Clown Fish",
  "Clown fish is the name of several types of fish that live in tropical oceans. They also are called anemone fish because they live among sea anemones.",
  "Saltwater",
  "Large aquarium",
  "Plankton Diet",
  "24,99 €",
  ""
);

/*const newArticle = document.createElement("article");
newArticle.classList.add("product");
document.body.append(newArticle);

const productBody = document.createElement("div");
productBody.classList.add("produckt__body");
newArticle.append(productBody);

const newName = document.createElement("h2");
newName.classList.add("product__name");
newName.innerHTML = "Queen angelfish";
productBody.append(newName);

const newDescription = document.createElement("p");
newDescription.classList.add("produc__description");
newDescription.innerHTML =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
productBody.append(newDescription);

const newUl = document.createElement("ul");
newUl.classList.add("product__categories");
productBody.append(newUl);

const newCategory1 = document.createElement("li");
newCategory1.classList.add("product__category");
newCategory1.innerHTML = "Freshwater";
newUl.append(newCategory1);

const newCategory2 = document.createElement("li");
newCategory2.classList.add("product__category");
newCategory2.innerHTML = "Large aquarium";
newUl.append(newCategory2);

const newCategory3 = document.createElement("li");
newCategory3.classList.add("product__category");
newCategory3.innerHTML = "Plankton Diet";
newUl.append(newCategory3);

const imageContainer = document.createElement("div");
imageContainer.classList.add("product__image-container");
newArticle.append(imageContainer);

const newImage = document.createElement("img");
newImage.classList.add("product__image");
newImage.innerHTMl = imageSrc;
imageContainer.append(newImage);*/
