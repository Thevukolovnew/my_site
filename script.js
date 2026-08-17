// Находим нашу кнопку по её идентификатору id
const button = document.getElementById('myButton');

// Говорим кнопке: "Слушай клик, и когда пользователь нажмет — выполни код"
button.addEventListener('click', () => {
    alert('Поздравляю! Вы написали и запустили свой первый JavaScript-скрипт!');
});
