// ------------------task-03

const ADMIN_PASSWORD = '50';
const userPassword = prompt('Please enter user password: ')
let message;

if (userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (userPassword === null) {
    message = 'Отменено пользователем!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message)