const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFromArray = function (array) {
    return array[getRandomNumber(0, array.length - 1)];
};

const getRandomString = function () {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const minChars = 5;
    const maxChars = getRandomNumber(5, 15);
    const stringLength = Math.floor(
        Math.random() * (maxChars - minChars) + minChars,
    );
    let randomString = '';

    for (let i = 0; i < stringLength; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return randomString;
};

const getRandomId = function () {
    const characters = '0123456789';
    const minChars = 5;
    const maxChars = 20;
    const charLength = Math.floor(Math.random() * (maxChars - minChars) + minChars);

    let id = '';

    for (let i = 0; i < charLength; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
};

module.exports = {
    getRandomString,
    getRandomNumber,
    getRandomFromArray,
    getRandomId,
};
