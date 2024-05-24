const { getRandomNumber, getRandomId } = require('../utils/randomUtils');

const createCurrency = function (name, img, minValue, maxValue) {
    return {
        id: getRandomId(),
        name: name,
        image_url: `/icons/currencies/${img}.png`,
        value: getRandomNumber(minValue, maxValue),
    };
};

const currencies = {
    zeni: createCurrency('Zeni', 'zeni', 6000, 10000),
    combat_exp: createCurrency('Kampferfahrung', 'combat-experience', 500, 1000),
    dragonstones: createCurrency('Drachensteine', 'dragonstones', 5, 30),
};

module.exports = currencies;
