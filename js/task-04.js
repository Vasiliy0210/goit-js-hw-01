// ------------------task-04

let pricePerDroid = 3000;
const credits = 23580;
const userBuy = prompt('Введите количество дроидов, которые вы желаете приобрести');
const totalPrice = Number(userBuy) * pricePerDroid;
const userBalance = credits - totalPrice;
let message;

if (userBuy === null) {
    message = 'Отменено пользователем!';
} else if (userBuy === '0') {
    message = 'Заказанное Вами количество товара не может быть оформлено к выдаче, введите пожалуйста количество товара больше "0"';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else if (totalPrice <= credits && userBuy > 0) {
    message = `Вы купили ${userBuy} дроидов, на счету осталось ${userBalance} кредитов.`;
} else {
    message = 'Введите количество заказа еще раз!'
}

console.log(message)

