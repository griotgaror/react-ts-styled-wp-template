const { getRandomId } = require('../../utils/randomUtils');

const createRace = function ({ name, color }) {
    return {
        id: getRandomId(),
        name: name,
        color: color,
        preview_image_url: `/profile-images/default/${name}.webp`,
    };
};

const races = [
    createRace({
        name: 'Saiyajin',
        color: '#878E92',
    }),
    // createRace({
    //     name: 'Mensch',
    //     color: '#ED8F20',
    // }),
    // createRace({
    //     name: 'Namekianer',
    //     color: '#96DB63',
    // }),
    // createRace({
    //     name: 'Kaioshin',
    //     color: '#39AAE9',
    // }),
    // createRace({
    //     name: 'Freezer',
    //     color:  '#D852D7',
    // }),
    createRace({
        name: 'Android',
        color: '#33922A',
    }),
    // createRace({
    //     name: 'Majin',
    //     color: '#F15584',
    // }),
    createRace({
        name: 'Demon',
        color: '#EA3131',
    }),
];

module.exports = races;
