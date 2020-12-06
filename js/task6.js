const numbers = [];
let total = 0;

while (true) {
    let input = prompt(`Введи число`);

    if (input === null) {
        break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    }

    numbers.push(input);
}

for (let i = 0; i < numbers.length; i+=1) {
    total += numbers[i];
}

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);