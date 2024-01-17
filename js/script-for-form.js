//Функция для получения данных из формы
// document.querySelector("#button-2").onclick =  getRecipeData;

function getRecipeData() {
    // Получаем данные из формы
    const recipe = document.getElementById("recipe").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("your-recipe").value;
    const photo = document.getElementById("photo-1");
    const addPhoto = photo.files[0];

    // Проверяем, что данные заполнены правильно
    if (recipe === "" || author === "" || description === "") {
      alert("Заполните все поля формы");
      return;
    }

    if (!addPhoto) {
        alert("Загрузите изображение");
        return;
    }

    // Сохраняем данные в локальное хранилище
    localStorage.setItem("recipe", recipe);
    localStorage.setItem("author", author);
    localStorage.setItem("description", description);

       // Чтение файла и преобразование его в Data URL
    const reader = new FileReader();
    reader.readAsDataURL(addPhoto);
    reader.onload = function () {
       localStorage.setItem("photo", reader.result);
    };
   
    console.log("Данные успешно сохранены");
    
     // Удаляем форму с экрана
     document.getElementById("main").remove();
     document.getElementById("footer-2").remove();
  
  // Добавляем надпись
  const message = document.createElement("after-form");
  message.style.fontSize = "50px";
  message.style.position = "absolute";
  message.style.top = "400px";
  message.style.left = "600px";
  document.body.appendChild(message);
  message.textContent = "Ваши данные отправлены!";

  }
