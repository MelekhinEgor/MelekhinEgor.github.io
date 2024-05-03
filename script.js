const loginForm = document.getElementById('loginForm');
const errorMessageElement = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Здесь нужно заменить на проверку корректности введенных данных (например, с помощью AJAX-запроса на сервер)
    if (username === 'nika' && password === '02052000') {
        // Переход на другую страницу
        window.location.href = './main.html'; // Замените на URL вашей страницы
    } else {
        errorMessageElement.textContent = 'Неверный логин или пароль.';
    }
});
