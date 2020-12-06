const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length > 3 && login.length < 17) {
        return true;
    } return false;
};

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    } return true;
}; 

let message = `Логин успешно добавлен.`;

const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)) {
        message = `Ошибка! Логин должен быть от 4 до 16 символов`;
        return message;
    };

    if (!isLoginUnique(allLogins, login)) {
        message = `Такой логин уже используется!`;
        return message;
    };

    logins.push(login);
    return message;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(logins);
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'