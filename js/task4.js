// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
let message;
const maxLength = 40;
const formatString = function (string) {
    // const symbols = string.split(``);
    // if (symbols.length > 40) {
    //     const symbolsToRemove = symbols.length - 40;
    //     const removedSymbols = symbols.splice(40, symbolsToRemove, "...");
            
    //     return symbols.join(``); 
    // }

    // return string;
    return string.length <= maxLength
    ? string
    : string.slice(0,maxLength) + `...`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// // вернется форматированная строка