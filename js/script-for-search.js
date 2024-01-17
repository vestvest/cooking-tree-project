function search(query) {
	if (!query) {
		return [];
	  }
	// Получаем список всех элементов в контейнере
	const recipes = document.querySelectorAll(".middle-container .new-recipe, .middle-container .green-tea-tort, .middle-container .chocolate-berry-tort");
  
	// Создаем пустой объект для хранения найденных элементов
	const foundRecipes = {};
	
	// Проходим по всем элементам
	for (const recipe of recipes) {
	  // Проверяем, содержит ли элемент поисковый запрос
	  if (recipe.textContent.toLowerCase().includes(query.toLowerCase())) {
		// Добавляем элемент в объект найденных элементов, используя название рецепта как ключ
		foundRecipes[recipe.dataset.recipeName] = recipe;
	  }
	}
	
	// Возвращаем массив найденных элементов
	return Object.values(foundRecipes);
	}

	// document.getElementById("footer").remove();
	
document.querySelector("#search-input").addEventListener("input", (event) => {
	
	// Получаем поисковый запрос
	const query = event.target.value;
	
	  // Скрываем футер
	  document.querySelector("#footer").style.display = "none";

	// Выполняем поиск
	const results = search(query);

	// Обновляем список результатов поиска
	document.querySelector("#recipesContainer").innerHTML = results.map((recipe) => recipe.outerHTML).join("");
});

	
