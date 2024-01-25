console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newArticle = document.createElement("article");
const newP = document.createElement("p");
const newFooter = document.createElement("footer");
const newButton = document.createElement("button");
const newSpan = document.createElement("span");

newArticle.classList.add("post");
document.body.append(newArticle);

newP.classList.add("post__content");
newP.textContent = "Ich bin ein neuer Post";
newArticle.append(newP);

newFooter.classList.add("post__footer");
newArticle.append(newFooter);

newSpan.classList.add("post__username");
newSpan.textContent = "@user_lisa";
newFooter.append(newSpan);

newButton.classList.add("post__button");
newButton.textContent = "♥ Like";
newFooter.append(newButton);

newButton.addEventListener("click", handleLikeButtonClick);

/*<article class="post">
<p class="post__content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</p>
<footer class="post__footer">
  <span class="post__username">@username</span>
  <button type="button" class="post__button" data-js="like-button">
    ♥ Like
  </button>
</footer>
</article>*/
