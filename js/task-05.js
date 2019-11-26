// ------------------task-05

const userSelection = prompt('Введите страну в которую желаете осуществить доставку');
const deliveryChina = 'КИТАЙ';
const deliveryChili = 'ЧИЛИ';
const deliveryAustralia = 'АВСТРАЛИЯ';
const deliveryIndia = 'ИНДИЯ';
const deliveryJamayka = 'ЯМАЙКА';
let costDelivery;

let message;

if (userSelection !== null) {
  switch (userSelection.toUpperCase()) {
    case deliveryChina:
      costDelivery = 100;
      message = `Доставка в ${userSelection.toUpperCase()} будет стоить ${costDelivery} кредитов`;
      break;

    case deliveryChili:
      costDelivery = 250;
      message = `Доставка в ${userSelection.toUpperCase()} будет стоить ${costDelivery} кредитов`;
      break;

    case deliveryAustralia:
      costDelivery = 170;
      message = `Доставка в ${userSelection.toUpperCase()} будет стоить ${costDelivery} кредитов`;
      break;

    case deliveryIndia:
      costDelivery = 80;
      message = `Доставка в ${userSelection.toUpperCase()} будет стоить ${costDelivery} кредитов`;
      break;

    case deliveryJamayka:
      costDelivery = 120;
      message = `Доставка в ${userSelection.toUpperCase()} будет стоить ${costDelivery} кредитов`;
      break;

    case '':
      message = 'Вы не указали название страны доставки';
      break;

    default:
      message = 'В вашей стране доставка не доступна';
      alert(message);
  }
} else {
  message = 'Отменено пользователем';
}

console.log(message);
