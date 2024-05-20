// Функция для определения максимального числа
function max() {
    let a = parseFloat(document.getElementById("fnum").value);
    let b = parseFloat(document.getElementById("snum").value);

    if (isNaN(a) || isNaN(b)) {
        alert('Пожалуйста, введите оба числа.');
    } else {
        let maxNumber = a > b ? a : b;
        document.getElementById("result").innerText = `Максимальное число: ${maxNumber}`;
    }
}

// Функция для изменения имени администратора
function admin() {
    let name = document.getElementById('name').value;
    document.getElementById("admin").innerText = `Admin: ${name}`;
}

// Функция для проверки возраста
function con() {
    let age = document.getElementById("age").value;
    if (age <= 0) {
        alert("Возраст не может быть отрицательным числом!");
    } else if (!confirm(`Вы уверены, что вам ${age}?`)) {
        alert("Введите свой возраст снова!");
    }
}

// Функция для изменения фамилии
function surname_change() {
    let surnameInput = document.getElementById("surname_input").value;
    if (surnameInput !== '' && /^[A-zА-яЁё]+$/.test(surnameInput)) {
        document.getElementById("surname_output").innerText = surnameInput;
    } else {
        alert("Введите фамилию");
    }
}

// Функция для изменения имени
function name_change() {
    let nameInput = document.getElementById("name_input").value;
    if (nameInput !== '' && /^[A-zА-яЁё]+$/.test(nameInput)) {
        document.getElementById("name_output").innerText = nameInput;
    } else {
        alert("Введите имя");
    }
}

// Функция, которая будет вызываться при отправке анкеты
// Функция, которая будет вызываться при отправке анкеты
function submitForm() {
    // Получаем значение чекбокса "Меня возьмут"
    var submissionCheckbox = document.getElementById("submition");

    // Проверяем, была ли анкета заполнена
    if (submissionCheckbox.checked) {
        // Выводим сообщение "Анкета отправлена"
        alert("Анкета отправлена");
    } else {
        alert("Пожалуйста, заполните анкету перед отправкой.");
    }
}


// Функция, которая будет вызываться при изменении значения поля имени
function checkName() {
    var nameInput = document.getElementById("name").value;
    var fillFormElement = document.getElementById("fill_form");

    // Проверяем, заполнено ли поле имени
    if (nameInput !== "") {
        // Показываем элемент "Заполнить анкету"
        fillFormElement.hidden = false;
    } else {
        // Скрываем элемент "Заполнить анкету"
        fillFormElement.hidden = true;
    }
}

