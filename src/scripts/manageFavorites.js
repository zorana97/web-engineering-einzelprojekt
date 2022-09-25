function addToFavorites() {
  const list = document.getElementById("favoritesList");
  const activity = document.getElementById("activity").innerHTML;

  const favoritesItem = document.createElement("li");
  favoritesItem.innerHTML = activity;
  favoritesItem.setAttribute("class", "list-favorites");

  list.appendChild(favoritesItem);

  const deleteFavoriteBtn = document.createElement("span");
  deleteFavoriteBtn.innerHTML = "x";
  deleteFavoriteBtn.setAttribute("class", "delete-favorite");

  favoritesItem.appendChild(deleteFavoriteBtn);

  const close = document.querySelectorAll("span");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.style.display = "none";
    });
  }
}

export default addToFavorites;
