const { createAssetPath } = require('../../utils/helperUtils');
const { getRandomNumber } = require('../../utils/randomUtils');

const gearStats = [
    {
        name: 'Ausdauer',
        image_url: createAssetPath('/icons/values/health.png'),
        value: getRandomNumber(100, 1000),
    },
    {
        name: 'Kraft',
        image_url: createAssetPath('/icons/values/damage.png'),
        value: getRandomNumber(100, 1000),
    },
    {
        name: 'Abwehr',
        image_url: createAssetPath('/icons/values/defence.png'),
        value: getRandomNumber(100, 1000),
    },
];

module.exports = gearStats;
