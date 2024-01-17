

function updateMainPage() {
  //Получаем данные из локального хранилища
  const recipe = localStorage.getItem("recipe");
  const author = localStorage.getItem("author");
  const description = localStorage.getItem("description");
  const photo = localStorage.getItem("photo");

  const middleContainer = document.querySelector(".middle-container");

  // Создаем уникальный идентификатор для нового элемента
  const newRecipeId = `recipe-${Date.now()}`;

  // Проверяем, существует ли элемент с таким же идентификатором
  const existingRecipe = document.getElementById(newRecipeId);
  
  // Добавляем новый рецепт в контейнер
  if (!existingRecipe) {
  const newRecipe = document.createElement("div");
  newRecipe.classList.add("new-recipe");
  newRecipe.innerHTML = `
      <div class="new-recipe" style="padding-top:4%; display: flex;flex-direction: row; gap: 1.5em;">
    <img src="${photo}" alt="" style="width: 31%; height: 100%;">
    <div class="new-recipe-description">
      <h4 style="color: #3D2F2B; font-size: 24px; font-style: normal; font-family: Montserrat; font-weight: 600; line-height: normal; letter-spacing: 0.16px;
  margin-top: 0;">${recipe}</h4>
      <p id="author" style="font-size: 20px; margin-top: -1.8%;"> Автор: ${author} | ${new Date().toLocaleDateString()}</p>
      <p id="description" style="font-size: 20px;">${description}</p>
      <button class="middle-container-button">
        Перейти к рецепту
      </button>
    </div>
    </div>
  `;
  middleContainer.appendChild(newRecipe);
  }
}
// Обработчик события изменения данных в локальном хранилище
window.addEventListener("DOMContentLoaded", updateMainPage);