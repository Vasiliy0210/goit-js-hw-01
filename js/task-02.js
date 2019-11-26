// ------------------task-02

const total = 100;
const ordered = Number(prompt('Введите количество товара для заказа со клада'));
let message;

if (ordered > total) {
    message = 'На складе недостаточно твоаров!';
} else if (ordered === 0) {
    message = 'К сожалению Вы не выбрали количество товара к заказу';
} else if (ordered > 0 && ordered <= total) {
    message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
    message = 'Введите количество товара к заказу используя цифры от 0 до 9';
}

console.log(message)