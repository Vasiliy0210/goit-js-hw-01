// ------------------task-06


let input;
let total = 0;

do {
    input = prompt('Please enter your number');
    total = Number(input) + total;
} while (input !== null);


alert(`Общая сумма чисел равна ${total}`)
